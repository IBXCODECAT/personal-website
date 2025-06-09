import { useState, useEffect } from "react";

/**
 * A helper function to interpolate between two RGB colors.
 * @param color1 - The starting color as an [R, G, B] array.
 * @param color2 - The ending color as an [R, G, B] array.
 * @param factor - A number between 0 and 1 representing the transition progress.
 * @returns An `rgb(r, g, b)` string for use in CSS.
 */
const interpolateColor = (color1: number[], color2: number[], factor: number): string => {
  // Clamp the factor to the valid range [0, 1]
  const clampedFactor = Math.max(0, Math.min(1, factor));
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + clampedFactor * (color2[i] - color1[i]));
  }
  return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
};

// The Blob Component
const Blob = () => {
  // State to hold the blob's position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // State for the DOM's scroll percentage, from 0 to 1
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Define the start (top of page) and end (bottom of page) colors for the gradient.
  // Colors are represented as [R, G, B] arrays for easy interpolation.
  const emeraldSky = {
      from: [52, 211, 153],   // Tailwind's emerald-400
      to: [2, 132, 199],     // Tailwind's sky-600
  };
  const orangeSky = {
      from: [251, 189, 35],  // Tailwind's amber-400
      to: [220, 38, 38],     // Tailwind's red-600
  };

  // useEffect hook to add and clean up the mousemove event listener
  useEffect(() => {
    // This function updates the position state based on the mouse coordinates
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setPosition({
        x: clientX,
        y: clientY,
      });
      
    };

    // Updates the scroll percentage state whenever the page is scrolled
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const domHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Avoid division by zero if the page content is not tall enough to scroll
      const scrollPercent = domHeight > 0 ? scrollTop / domHeight : 0;
      setScrollPercentage(scrollPercent);

    }

    // Add the event listeners when the component mounts
    window.addEventListener("mousemove", handleMouseMove);

    // Set the initial scroll position on load, in case the page loads pre-scrolled
    handleScroll();

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means ``this effect runs only once on mount

  // Interpolate the 'from' and 'to' colors of the gradient based on the current scroll percentage.
  const fromColor = interpolateColor(emeraldSky.from, orangeSky.from, scrollPercentage);
  const toColor = interpolateColor(emeraldSky.to, orangeSky.to, scrollPercentage);


  return (
    <div
      style={{
        // We use transform to move the blob's container.
        transform: `translate(${position.x - 96}px, ${position.y - 96}px)`,
        // The transition property creates the smooth trailing effect
        transition: "transform 0.1s ease-out",

      }}
      className="fixed top-0 left-0 pointer-events-none"
    >
      <div
        style={{
        backgroundImage: `linear-gradient(${fromColor}, ${toColor})`,}}
        className="
          -translate-x-1/2 -translate-y-1/2 // Center the blob on the cursor
          w-48 h-48
          //bg-gradient-to-tr from-emerald-400 to-sky-600
          rounded-full
          opacity-75
          blur-2xl
          animate-spin-slow // Apply the custom spinning animation
        "
      />
    </div>
  );
};

export default Blob;