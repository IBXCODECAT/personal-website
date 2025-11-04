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

// Define the color stops for our gradient sections. Each stop has a position (0 to 1) and 'from'/'to' colors.
const colorStops = [
    { stop: 0.0, from: [52, 211, 153], to: [2, 132, 199] },     // Emerald Sky Start
    { stop: 0.33, from: [52, 211, 153], to: [2, 132, 199] },    // Emerald Sky End

    { stop: 0.5, from: [251, 189, 35], to: [217, 70, 239] },    // Magenta Sky Start
    { stop: 1.0, from: [251, 189, 35], to: [217, 70, 239] },     // Magenta Sky End
    
    //{ stop: 0.55, from: [251, 189, 35], to: [220, 38, 38] },    // Amber Sky Start
    //{ stop: 1.0, from: [251, 189, 35], to: [220, 38, 38] },    // Amber Sky End
];

/**
 * Calculates the interpolated gradient based on the overall progress and defined color stops.
 */
const getInterpolatedGradient = (progress: number) => {
    // Find the two stops the current progress is between.
    let startStop = colorStops[0];
    let endStop = colorStops[1];
    for (let i = 0; i < colorStops.length - 1; i++) {
        if (progress >= colorStops[i].stop && progress <= colorStops[i + 1].stop) {
            startStop = colorStops[i];
            endStop = colorStops[i + 1];
            break;
        }
    }

    // Calculate the progress within the current segment.
    const segmentDuration = endStop.stop - startStop.stop;
    const localProgress = segmentDuration > 0 ? (progress - startStop.stop) / segmentDuration : 0;

    // Interpolate the 'from' and 'to' colors of the gradient separately.
    const fromColor = interpolateColor(startStop.from, endStop.from, localProgress);
    const toColor = interpolateColor(startStop.to, endStop.to, localProgress);

    return { fromColor, toColor };
};

// The Blob Component
const Blob = () => {
  // State for the blob's on-screen position (clientX/Y) and document position (pageY)
  const [position, setPosition] = useState({ clientX: 0, clientY: 0, pageY: 0 });
  const [documentHeight, setDocumentHeight] = useState(0);
  const [isInside, setIsInside] = useState(false); // New state to track if the mouse is inside the window

  useEffect(() => {
    // Set the initial document height
    setDocumentHeight(document.documentElement.scrollHeight);
    
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        clientX: event.clientX,
        clientY: event.clientY,
        pageY: event.pageY
      });
    };

    const handleScroll = () => {
      // On scroll, we recalculate the pageY based on the last known screen Y + current scroll position.
      // This keeps the color consistent with the content under the cursor.
      const newPageY = position.clientY + window.scrollY;
      setPosition(prev => ({ ...prev, pageY: newPageY }));
    };

    const handleResize = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
      // Re-check mouse position against the new window dimensions
      if (
        position.clientX > 0 &&
        position.clientX < window.innerWidth &&
        position.clientY > 0 &&
        position.clientY < window.innerHeight
      ) {
        setIsInside(true);
      } else {
        setIsInside(false);
      }
    };
    
    const handleMouseEnter = (event: MouseEvent) => {
      // Check if the event target is the document element to prevent false positives
      if (event.target === document.documentElement) {
        setIsInside(true);
      }
    };

    const handleMouseLeave = (event: MouseEvent) => {
      // Check if the event target is the document element to prevent false negatives
      if (event.target === document.documentElement) {
        setIsInside(false);
      }
    };

    // Check if the mouse is inside the window on initial load
    if (
        position.clientX > 0 &&
        position.clientX < window.innerWidth &&
        position.clientY > 0 &&
        position.clientY < window.innerHeight
      ) {
        setIsInside(true);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter); 
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [position.clientY, position.clientX]); 

  // Calculate the overall progress of the cursor down the page.
  const progress = documentHeight > 0 ? position.pageY / documentHeight : 0;

  // Get the interpolated colors for the current progress.
  const { fromColor, toColor } = getInterpolatedGradient(progress);
  
  // Set the opacity based on the new `isInside` state
  const opacity = isInside ? 0.75 : 0;

  return (
    <div
      style={{
        // We use transform to move the blob's container.
        transform: `translate(${position.clientX - 32}px, ${position.clientY - 32}px)`,
        // The transition property creates the smooth trailing effect
        transition: "transform 0.1s ease-out",

      }}
      className="fixed top-0 left-0 pointer-events-none"
    >
      <div
        style={{
        backgroundImage: `linear-gradient(${fromColor}, ${toColor})`,
        opacity: opacity, // Apply the new opacity
        transition: "opacity 0.5s ease-in-out", // Add a transition for the opacity
        }}
        className=" 
          invisible lg:visible
          -translate-x-1/2 -translate-y-1/2 // Center the blob on the cursor
          w-16 h-16
          //bg-gradient-to-tr from-emerald-400 to-sky-600
          rounded-full
          //opacity-75
          blur-2xl
          animate-spin-slow // Apply the custom spinning animation
        "
      />
    </div>
  );
};

export default Blob;