"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic will be connected later
    console.log("Login submitted:", { email, password });
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${darkMode ? 'dark bg-zinc-950' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Dark mode toggle */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none"
          style={{ backgroundColor: darkMode ? '#3b82f6' : '#e5e7eb' }}
        >
          <div
            className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs ${
              darkMode ? 'translate-x-8' : 'translate-x-0'
            }`}
          >
            {darkMode ? '🌙' : '☀️'}
          </div>
        </button>
      </div>

      {/* Login Card */}
      <main className="w-full max-w-md">
        <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-800 transition-all">
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 tracking-tight mb-2">
              PCT Rush Portal
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Sign in to your account
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email Input */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-200">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-200">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition transform hover:scale-[1.02]"
            >
              Log In
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-10 text-sm text-zinc-500 dark:text-zinc-600">
        © 2025 Phi Chi Theta | Built by PCTech
      </footer>
    </div>
  );
}
