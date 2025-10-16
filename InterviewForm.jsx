import React, { useState } from "react";

export default function InterviewForm() {
  const [form, setForm] = useState({ name: "", email: "", score: "", notes: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted for ${form.name} with score ${form.score}`);
    setForm({ name: "", email: "", score: "", notes: "" });
  };

  return (
    <div className="p-6 border-l border-gray-300 w-1/2">
      <h2 className="text-2xl font-bold mb-4">Interview Evaluation Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Candidate Name" className="border p-2" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Candidate Email" className="border p-2" />
        <input name="score" value={form.score} onChange={handleChange} placeholder="Score (1–10)" className="border p-2" />
        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes" className="border p-2" />
        <button className="bg-black text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}
