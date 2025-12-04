"use client";
import { useState, useEffect, useRef } from "react";
import "./demo.css";

// Helper function to convert text to heart-masked text
const maskTextWithHearts = (text: string, heartCount: number): string => {
  if (!text) return "";
  const textLength = text.length;
  // Get the number of characters that should remain unmasked
  const unmaskedCount = Math.max(0, textLength - heartCount);

  // Pad the start with hearts and the end with the original text
  const hearts = "♥".repeat(heartCount);
  const remainingText = text.substring(heartCount);

  // We are masking from the start, so hearts replace the beginning letters
  return hearts + remainingText;
};

export default function DemoPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [heartCount, setHeartCount] = useState(0); // Tracks how many letters are hearts
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // All the text content we need to track and transform
  const textContent: Record<string, string> = {
    title: "Welcome to the Demo Page",
    paragraph: "This is where we learn how TSX works step by step 🎓",
    zachButtonText: "Click to text Zach and tell him you love him"
  };

  const handleZachClick = () => {
    // Only start the effect once
    if (!isClicked) {
      setIsClicked(true);
      // Start the heart conversion sequence
      setHeartCount(1);
    }
  };

  useEffect(() => {
    if (isClicked) {
      // Calculate the total number of characters in all tracked elements
      const totalChars = Object.values(textContent).reduce(
        (acc, text) => acc + text.length, 0
      );

      // Set up an interval to increase heartCount every 50ms (adjust speed here)
      intervalRef.current = setInterval(() => {
        setHeartCount(prevCount => {
          if (prevCount >= totalChars) {
            // Stop the interval once all characters are converted
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            return totalChars;
          }
          return prevCount + 1; // Increment the count
        });
      }, 50); // 50 milliseconds per heart

      // Cleanup the interval when the component unmounts
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isClicked, textContent]);
  
  // Use a helper function to determine the transformed text based on heartCount
  const getTransformedText = (key: string): string => {
    // The total number of hearts to apply across ALL elements
    let heartsLeftToApply = heartCount;

    for (const [textKey, text] of Object.entries(textContent)) {
        if (textKey === key) {
            // This is the current text block being processed
            return maskTextWithHearts(text, heartsLeftToApply);
        } else if (textKey !== key && heartsLeftToApply > 0) {
            // If hearts have been applied to previous text blocks, subtract their length
            heartsLeftToApply -= text.length;
            if (heartsLeftToApply < 0) heartsLeftToApply = 0; // Prevent going negative
        }
    }
    return textContent[key]; // Fallback, should not happen
  };

  return (
    <div className={`demo-container ${isClicked ? "gradient-active" : ""}`}>
      {/* 1. Transformed Title */}
      <h1 className="demo-title">{getTransformedText('title')}</h1>
      
      {/* 2. Transformed Paragraph */}
      <p className="demo-text">
        {getTransformedText('paragraph')}
      </p>

      <button
        className="demo-small-button"
        onClick={handleZachClick}
      >
        {/* 3. Transformed Zach Button Text */}
        <p className="demo-text-zach">
          {getTransformedText('zachButtonText')}
        </p>
      </button>
      
      <button
        className="demo-button"
        // You might want to disable this button once the effect starts
        disabled={isClicked} 
        onClick={() => alert("You clicked the demo button!")}
      >
        Click Me
      </button>
    </div>
  );
}