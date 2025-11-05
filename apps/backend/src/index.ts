import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { supabase } from "./supabaseClient.ts";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

// 🏠 Root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend server is running!",
    endpoints: {
      health: "/health",
      submit: "POST /submit"
    }
  });
});

// 🩺 Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

// 📨 Save interview responses route
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

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
