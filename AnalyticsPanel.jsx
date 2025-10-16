import React from "react";

export default function AnalyticsPanel() {
  return (
    <div className="p-6 w-1/2">
      <h1 className="text-3xl font-bold mb-4">Rush Interview Analytics</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="border p-4 text-center"><h3>Total</h3><p>5</p></div>
        <div className="border p-4 text-center"><h3>Mean</h3><p>7.0</p></div>
        <div className="border p-4 text-center"><h3>Median</h3><p>7</p></div>
        <div className="border p-4 text-center"><h3>Mode</h3><p>5</p></div>
      </div>
    </div>
  );
}
