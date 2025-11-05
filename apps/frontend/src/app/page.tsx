"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:4000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          response: notes,
          userEmail: name || "anonymous@pct.com",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to save response");
      }

      console.log("✅ Saved:", data);
      setSubmitted(true);
      setName("");
      setNotes("");
    } catch (err: any) {
      console.error("❌ Error submitting:", err);
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-black flex flex-col items-center p-6">
      {/* Navbar */}
      <header className="w-full max-w-3xl flex justify-between items-center py-4 mb-8 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400 tracking-tight">
          PCT Rush Portal
        </h1>
        <button
          onClick={() => {
            setSubmitted(false);
            setError("");
          }}
          className="text-sm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          New Entry
        </button>
      </header>

      {/* Form / Submission Card */}
      <main className="w-full max-w-3xl">
        <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-800 transition-all">
          {!submitted ? (
            <>
              <h2 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
                Interview Evaluation
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 text-zinc-700 dark:text-zinc-200"
              >
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Notes</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Write your feedback..."
                    rows={5}
                    className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                  />
                </div>

                {error && (
                  <p className="text-red-600 dark:text-red-400 text-sm">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Evaluation"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-3">
                Submission Successful 🎉
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                Thanks for submitting your feedback!
              </p>
              <button
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setSubmitted(false)}
              >
                Submit Another
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="mt-10 text-sm text-zinc-500 dark:text-zinc-600">
        © 2025 Phi Chi Theta | Built by Rush Tech Team
      </footer>
    </div>
  );
}

