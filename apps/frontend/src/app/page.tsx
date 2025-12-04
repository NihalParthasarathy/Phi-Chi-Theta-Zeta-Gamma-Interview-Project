// This directive tells Next.js that this component uses client-side features (like state and events)
"use client";

// Import the useState hook from React - used for managing component state (data that can change)
import { useState } from "react";

// Export the default Home component - this is the main page component
export default function Home() {
  // Create a state variable 'name' with initial value "" and a function 'setName' to update it
  const [name, setName] = useState("");
  // Create a state variable 'notes' with initial value "" and a function 'setNotes' to update it
  const [notes, setNotes] = useState("");
  // Create a state variable 'submitted' with initial value false - tracks if form was submitted successfully
  const [submitted, setSubmitted] = useState(false);
  // Create a state variable 'loading' with initial value false - tracks if form is currently submitting
  const [loading, setLoading] = useState(false);
  // Create a state variable 'error' with initial value "" - stores any error messages
  const [error, setError] = useState("");
  // Create a state variable 'darkMode' with initial value false - tracks if dark mode is enabled
  const [darkMode, setDarkMode] = useState(false);

  // Define an async function to handle form submission - 'e' is the form event
  const handleSubmit = async (e: React.FormEvent) => {
    // Prevent the default form submission behavior (which would refresh the page)
    e.preventDefault();
    // Set loading to true to show the user that submission is in progress
    setLoading(true);
    // Clear any previous error messages
    setError("");

    // Start a try-catch block to handle potential errors during submission
    try {
      // Send a POST request to the backend server at localhost:4000/submit
      const res = await fetch("http://localhost:4000/submit", {
        // Specify that this is a POST request (sending data to server)
        method: "POST",
        // Tell the server we're sending JSON data
        headers: { "Content-Type": "application/json" },
        // Convert the JavaScript object to JSON string and send as request body
        body: JSON.stringify({
          // Send the notes as 'response'
          response: notes,
          // Send the name as 'userEmail', or use 'anonymous@pct.com' if name is empty
          userEmail: name || "anonymous@pct.com",
        }),
      });

      // Parse the JSON response from the server
      const data = await res.json();

      // Check if the response was not successful (status code not in 200-299 range)
      if (!res.ok) {
        // Throw an error with the error message from server, or a default message
        throw new Error(data.error || "Failed to save response");
      }

      // Log success message to browser console with the returned data
      console.log("✅ Saved:", data);
      // Set submitted to true to show success message
      setSubmitted(true);
      // Clear the name input field
      setName("");
      // Clear the notes textarea
      setNotes("");
    // Catch any errors that occurred during the try block
    } catch (err: any) {
      // Log the error to browser console
      console.error("❌ Error submitting:", err);
      // Set the error message to display to the user
      setError(err.message || "Something went wrong. Try again.");
    // Finally block runs regardless of success or error
    } finally {
      // Set loading back to false since submission attempt is complete
      setLoading(false);
    }
  };

  // Return the JSX (HTML-like structure) that defines what appears on the page
  return (
    <div className={`min-h-screen flex flex-col items-center p-6 ${darkMode ? 'dark bg-zinc-950' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Navbar */}
      <header className="w-full max-w-3xl flex justify-between items-center py-4 mb-8 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400 tracking-tight">
          PCT Rush Portal
        </h1>
        <div className="flex gap-3 items-center">
          {/* Dark/Light mode toggle switch */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none"
            style={{ backgroundColor: darkMode ? '#3b82f6' : '#e5e7eb' }}
          >
            {/* Sliding circle */}
            <div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs ${
                darkMode ? 'translate-x-8' : 'translate-x-0'
              }`}
            >
              {darkMode ? '🌙' : '☀️'}
            </div>
          </button>
          {/* Button that resets the form when clicked */}
          <button
            onClick={() => {
              // Reset submitted state to false (shows form again)
              setSubmitted(false);
              // Clear any error messages
              setError("");
            }}
            className="text-sm px-4 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition"
          >
            New Entry
          </button>
        </div>
      </header>

      {/* Form / Submission Card */}
      <main className="w-full max-w-3xl">
        <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-800 transition-all">
          {/* Conditional rendering - if form NOT submitted, show form; otherwise show success message */}
          {!submitted ? (
            <>
              <h2 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
                Interview Evaluation
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 text-zinc-700 dark:text-zinc-200"
              >
                {/* Container div for name input field */}
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

                {/* Container div for notes textarea */}
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

                {/* Conditional rendering - only show error message if error exists */}
                {error && (
                  <p className="text-red-600 dark:text-red-400 text-sm">
                    {error}
                  </p>
                )}

                {/* Submit button */}
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
            // Success message container
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-3">
                Submission Successful 🎉
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                Thanks for submitting your feedback!
              </p>
              {/* Button to submit another response */}
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

      {/* Footer */}
      <footer className="mt-10 text-sm text-zinc-500 dark:text-zinc-600">
        © 2025 Phi Chi Theta | Built by Rush Tech Team
      </footer>
    </div>
  );
}
