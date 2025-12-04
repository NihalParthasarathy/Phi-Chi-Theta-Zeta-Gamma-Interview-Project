// Import the Express framework for creating the server
import express from "express";

// Import CORS to allow the frontend to talk to this backend
import cors from "cors";

// Import dotenv to load environment variables from a .env file
import dotenv from "dotenv";

// Import the Supabase client we made in another file
import { supabase } from "./supabaseClient.ts";

// Load environment variables (like API keys) into process.env
dotenv.config();

// Create an Express app instance
const app = express();

// Let the app read JSON data from incoming requests
app.use(express.json());

// Allow cross-origin requests (frontend and backend on different ports)
app.use(cors());

// Set the port number for the server (use .env value or default to 4000)
const PORT = process.env.PORT || 4000;

// 🏠 Root route — basic welcome message
app.get("/", (req, res) => {
  // Send a 200 OK response with info about available routes
  res.status(200).json({
    message: "Backend server is running!",
    endpoints: {
      health: "/health",
      submit: "POST /submit"
    }
  });
});

// 🩺 Health check route — used to verify the server is alive
app.get("/health", (req, res) => {
  // Respond with { ok: true } to show everything’s working
  res.status(200).json({ ok: true });
});

// Middleware to verify JWT token from Supabase
const authenticateToken = async (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// 📨 Route for saving interview evaluations to Supabase
app.post("/api/evaluations", authenticateToken, async (req: any, res) => {
  try {
    console.log("🔥 POST /api/evaluations - Received data:", req.body);
    console.log("👤 User ID:", req.user.id);

    const {
      candidateName,
      candidateEmail,
      interviewerName,
      interviewerEmail,
      score,
      notes
    } = req.body;

    // Validate required fields
    if (!candidateName || !candidateEmail || !interviewerName || !interviewerEmail) {
      console.log("❌ Validation failed - missing required fields");
      return res.status(400).json({
        error: "Missing required fields: candidateName, candidateEmail, interviewerName, interviewerEmail"
      });
    }

    const insertData = {
      candidate_name: candidateName,
      candidate_email: candidateEmail,
      interviewer_name: interviewerName,
      interviewer_email: interviewerEmail,
      score: score ? parseInt(score) : null,
      notes: notes || null,
      user_id: req.user.id
    };

    console.log("💾 Inserting data into Supabase:", insertData);

    // Insert into interview_evaluations table
    const { data, error } = await supabase
      .from("interview_evaluations")
      .insert([insertData])
      .select();

    if (error) {
      console.error("❌ Supabase insert error:", error);
      throw error;
    }

    console.log("✅ Data saved successfully:", data);

    res.status(200).json({
      message: "Evaluation saved successfully!",
      data: data[0]
    });
  } catch (err: any) {
    console.error("❌ Error saving evaluation:", err);
    res.status(500).json({ error: err.message });
  }
});

// 📋 Route to get all evaluations for authenticated user
app.get("/api/evaluations", authenticateToken, async (req: any, res) => {
  try {
    console.log("📋 GET /api/evaluations - User ID:", req.user.id);

    const { data, error } = await supabase
      .from("interview_evaluations")
      .select("*")
      .eq("user_id", req.user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("❌ Supabase fetch error:", error);
      throw error;
    }

    console.log(`✅ Found ${data?.length || 0} evaluations for user`);
    console.log("📄 Data:", data);

    res.status(200).json(data);
  } catch (err: any) {
    console.error("❌ Error fetching evaluations:", err);
    res.status(500).json({ error: err.message });
  }
});

// 📅 Route to get interview schedule
app.get("/api/schedule", authenticateToken, async (req: any, res) => {
  try {
    const { data, error } = await supabase
      .from("interview_schedule")
      .select("*")
      .order("scheduled_time", { ascending: true });

    if (error) throw error;

    res.status(200).json(data);
  } catch (err: any) {
    console.error("❌ Error fetching schedule:", err);
    res.status(500).json({ error: err.message });
  }
});

// 📊 Route to get analytics
app.get("/api/analytics", authenticateToken, async (req: any, res) => {
  try {
    const { data, error } = await supabase
      .from("interview_evaluations")
      .select("score, created_at")
      .not("score", "is", null);

    if (error) throw error;

    // Calculate analytics
    const totalInterviews = data.length;
    const scores = data.map(item => item.score);
    const avgScore = scores.reduce((sum, score) => sum + score, 0) / totalInterviews;

    // Score distribution
    const scoreDistribution = scores.reduce((dist: Record<string, number>, score) => {
      const range = Math.floor(score / 2) * 2;
      const key = `${range}-${range + 1}`;
      dist[key] = (dist[key] || 0) + 1;
      return dist;
    }, {});

    res.status(200).json({
      totalInterviews,
      avgScore: Math.round(avgScore * 100) / 100,
      scoreDistribution,
      medianScore: scores.sort((a, b) => a - b)[Math.floor(scores.length / 2)] || 0,
      modeScore: scores.sort((a, b) =>
        scores.filter(v => v === a).length - scores.filter(v => v === b).length
      ).pop() || 0
    });
  } catch (err: any) {
    console.error("❌ Error fetching analytics:", err);
    res.status(500).json({ error: err.message });
  }
});

// Legacy route for backward compatibility
app.post("/submit", async (req, res) => {
  try {
    const { response, userEmail } = req.body;

    if (!response || !userEmail) {
      return res.status(400).json({ error: "Missing response or userEmail" });
    }

    const { error } = await supabase
      .from("responses")
      .insert([{ user_email: userEmail, response_text: response }]);

    if (error) throw error;

    res.status(200).json({ message: "Response saved successfully!" });
  } catch (err: any) {
    console.error("❌ Error inserting response:", err);
    res.status(500).json({ error: err.message });
  }
});

// Start the server and listen on the chosen port
app.listen(PORT, () => {
  // Log a message showing where the server is running
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
