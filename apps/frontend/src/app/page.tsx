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
    // Main container div with full screen height, gradient background, flexbox layout, centered content, and padding
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-black flex flex-col items-center p-6">
      // Navbar section - comment in JSX
      {/* Navbar */}
      // Header element with max width, flexbox for spacing, padding, margin, and bottom border
      <header className="w-full max-w-3xl flex justify-between items-center py-4 mb-8 border-b border-zinc-200 dark:border-zinc-800">
        // Heading with large text, bold font, blue color, and tight letter spacing
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400 tracking-tight">
          // The text content of the heading
          PCT Rush Portal
        // Close h1 tag
        </h1>
        // Button that resets the form when clicked
        <button
          // onClick handler - runs this function when button is clicked
          onClick={() => {
            // Reset submitted state to false (shows form again)
            setSubmitted(false);
            // Clear any error messages
            setError("");
          }}
          // Button styling classes - small text, padding, rounded corners, blue background, hover effects
          className="text-sm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          // Button text
          New Entry
        // Close button tag
        </button>
      // Close header tag
      </header>

      // Form / Submission Card comment
      {/* Form / Submission Card */}
      // Main content area with max width
      <main className="w-full max-w-3xl">
        // Card container with background, blur effect, rounded corners, shadow, border, and padding
        <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-800 transition-all">
          // Conditional rendering - if form NOT submitted, show form; otherwise show success message
          {!submitted ? (
            // Fragment to group multiple elements without adding extra DOM nodes
            <>
              // Heading for the form section
              <h2 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
                // Heading text
                Interview Evaluation
              // Close h2 tag
              </h2>
              // Form element with onSubmit handler and flexbox layout with gap between elements
              <form
                // When form is submitted, call handleSubmit function
                onSubmit={handleSubmit}
                // Styling - vertical flex layout with gaps between form fields
                className="flex flex-col gap-5 text-zinc-700 dark:text-zinc-200"
              >
                // Container div for name input field
                <div className="flex flex-col">
                  // Label for the name input
                  <label className="text-sm font-medium mb-1">Your Name</label>
                  // Text input field for name
                  <input
                    // Input type is text (single line)
                    type="text"
                    // Controlled input - value is tied to 'name' state variable
                    value={name}
                    // When user types, update 'name' state with new value
                    onChange={(e) => setName(e.target.value)}
                    // Placeholder text shown when input is empty
                    placeholder="Enter your name"
                    // Styling for the input field - padding, border, background, focus effects
                    className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // Makes this field required (can't submit empty)
                    required
                  />
                // Close div container
                </div>

                // Container div for notes textarea
                <div className="flex flex-col">
                  // Label for the notes textarea
                  <label className="text-sm font-medium mb-1">Notes</label>
                  // Textarea element for multi-line text input
                  <textarea
                    // Controlled textarea - value tied to 'notes' state
                    value={notes}
                    // When user types, update 'notes' state
                    onChange={(e) => setNotes(e.target.value)}
                    // Placeholder text shown when empty
                    placeholder="Write your feedback..."
                    // Number of visible text rows (5 lines tall)
                    rows={5}
                    // Styling - same as input above, plus 'resize-none' prevents user from resizing
                    className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    // Makes this field required
                    required
                  />
                // Close div container
                </div>

                // Conditional rendering - only show error message if error exists
                {error && (
                  // Paragraph element for error message in red
                  <p className="text-red-600 dark:text-red-400 text-sm">
                    // Display the error message
                    {error}
                  // Close p tag
                  </p>
                )}

                // Submit button
                <button
                  // Button type is submit (triggers form submission)
                  type="submit"
                  // Disable button while loading (prevents double submission)
                  disabled={loading}
                  // Button styling - margin, blue background, hover effects, disabled state styling
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  // Conditional text - show "Submitting..." while loading, otherwise show "Submit Evaluation"
                  {loading ? "Submitting..." : "Submit Evaluation"}
                // Close button tag
                </button>
              // Close form tag
              </form>
            // Close fragment
            </>
          // Else block - shown when submitted is true
          ) : (
            // Success message container with centered text
            <div className="text-center">
              // Success heading in green
              <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-3">
                // Success message with emoji
                Submission Successful 🎉
              // Close h2 tag
              </h2>
              // Thank you message paragraph
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                // Thank you text
                Thanks for submitting your feedback!
              // Close p tag
              </p>
              // Button to submit another response
              <button
                // Styling for the button
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                // When clicked, set submitted back to false to show form again
                onClick={() => setSubmitted(false)}
              >
                // Button text
                Submit Another
              // Close button tag
              </button>
            // Close success message div
            </div>
          )}
        // Close card container div
        </div>
      // Close main tag
      </main>

      // Footer element with top margin and gray text
      <footer className="mt-10 text-sm text-zinc-500 dark:text-zinc-600">
        // Copyright text
        © 2025 Phi Chi Theta | Built by Rush Tech Team
      // Close footer tag
      </footer>
    // Close main container div
    </div>
  // Close return statement
  );
// Close Home function
}
