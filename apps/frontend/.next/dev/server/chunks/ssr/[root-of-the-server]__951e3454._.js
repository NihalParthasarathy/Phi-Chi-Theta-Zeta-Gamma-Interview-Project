module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This directive tells Next.js that this component uses client-side features (like state and events)
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Import the useState hook from React - used for managing component state (data that can change)
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Home() {
    // Create a state variable 'name' with initial value "" and a function 'setName' to update it
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Create a state variable 'notes' with initial value "" and a function 'setNotes' to update it
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Create a state variable 'submitted' with initial value false - tracks if form was submitted successfully
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Create a state variable 'loading' with initial value false - tracks if form is currently submitting
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Create a state variable 'error' with initial value "" - stores any error messages
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Create a state variable 'darkMode' with initial value false - tracks if dark mode is enabled
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Define an async function to handle form submission - 'e' is the form event
    const handleSubmit = async (e)=>{
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
                headers: {
                    "Content-Type": "application/json"
                },
                // Convert the JavaScript object to JSON string and send as request body
                body: JSON.stringify({
                    // Send the notes as 'response'
                    response: notes,
                    // Send the name as 'userEmail', or use 'anonymous@pct.com' if name is empty
                    userEmail: name || "anonymous@pct.com"
                })
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
        } catch (err) {
            // Log the error to browser console
            console.error("❌ Error submitting:", err);
            // Set the error message to display to the user
            setError(err.message || "Something went wrong. Try again.");
        // Finally block runs regardless of success or error
        } finally{
            // Set loading back to false since submission attempt is complete
            setLoading(false);
        }
    };
    // Return the JSX (HTML-like structure) that defines what appears on the page
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen flex flex-col items-center p-6 ${darkMode ? 'dark bg-zinc-950' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full max-w-3xl flex justify-between items-center py-4 mb-8 border-b border-zinc-200 dark:border-zinc-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-blue-700 dark:text-blue-400 tracking-tight",
                        children: "PCT Rush Portal"
                    }, void 0, false, {
                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setDarkMode(!darkMode),
                                className: "relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none",
                                style: {
                                    backgroundColor: darkMode ? '#3b82f6' : '#e5e7eb'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs ${darkMode ? 'translate-x-8' : 'translate-x-0'}`,
                                    children: darkMode ? '🌙' : '☀️'
                                }, void 0, false, {
                                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    // Reset submitted state to false (shows form again)
                                    setSubmitted(false);
                                    // Clear any error messages
                                    setError("");
                                },
                                className: "text-sm px-4 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition",
                                children: "New Entry"
                            }, void 0, false, {
                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "w-full max-w-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-800 transition-all",
                    children: !submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100",
                                children: "Interview Evaluation"
                            }, void 0, false, {
                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "flex flex-col gap-5 text-zinc-700 dark:text-zinc-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-medium mb-1",
                                                children: "Your Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: name,
                                                onChange: (e)=>setName(e.target.value),
                                                placeholder: "Enter your name",
                                                className: "p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-medium mb-1",
                                                children: "Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: notes,
                                                onChange: (e)=>setNotes(e.target.value),
                                                placeholder: "Write your feedback...",
                                                rows: 5,
                                                className: "p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 dark:text-red-400 text-sm",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed",
                                        children: loading ? "Submitting..." : "Submit Evaluation"
                                    }, void 0, false, {
                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : // Success message container
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-green-600 dark:text-green-400 mb-3",
                                children: "Submission Successful 🎉"
                            }, void 0, false, {
                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-700 dark:text-zinc-300 mb-4",
                                children: "Thanks for submitting your feedback!"
                            }, void 0, false, {
                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",
                                onClick: ()=>setSubmitted(false),
                                children: "Submit Another"
                            }, void 0, false, {
                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                        lineNumber: 175,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "mt-10 text-sm text-zinc-500 dark:text-zinc-600",
                children: "© 2025 Phi Chi Theta | Built by Rush Tech Team"
            }, void 0, false, {
                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
"[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__951e3454._.js.map