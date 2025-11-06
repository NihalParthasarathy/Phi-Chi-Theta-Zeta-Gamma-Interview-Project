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

// 📨 Route for saving interview responses to Supabase
app.post("/submit", async (req, res) => {
  try {
    // Pull out 'response' and 'userEmail' from the request body
    const { response, userEmail } = req.body;

    // If either one is missing, return a 400 error
    if (!response || !userEmail) {
      return res.status(400).json({ error: "Missing response or userEmail" });
    }

    // Insert a new row into the 'responses' table in Supabase
    const { error } = await supabase
      .from("responses")
      .insert([{ user_email: userEmail, response_text: response }]);

    // If Supabase returned an error, throw it to be caught below
    if (error) throw error;

    // Send success message if everything worked
    res.status(200).json({ message: "Response saved successfully!" });
  } catch (err: any) {
    // Log the error to the console for debugging
    console.error("❌ Error inserting response:", err);
    // Return a 500 (server error) response with the error message
    res.status(500).json({ error: err.message });
  }
});

// Start the server and listen on the chosen port
app.listen(PORT, () => {
  // Log a message showing where the server is running
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
