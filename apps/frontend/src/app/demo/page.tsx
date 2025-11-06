"use client";
import "./demo.css";

export default function DemoPage() {
  return (
    <div className="demo-container">
      <h1 className="demo-title">Welcome to the Demo Page</h1>
      <p className="demo-text">
        This is where we learn how TSX works step by step 🎓
      </p>

      <button
        className="demo-button"
        onClick={() => alert("You clicked the demo button!")}
      >
        Click Me
      </button>
    </div>
  );
}
