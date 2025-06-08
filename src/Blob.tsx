import React from "react";

// The Blob Component
const Blob = () => {
  // State to hold the blob's position
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  // useEffect hook to add and clean up the mousemove event listener
  React.useEffect(() => {
    // This function updates the position state based on the mouse coordinates
    // We explicitly type the 'event' parameter as a native MouseEvent
    const handleMouseMove = (event: MouseEvent) => {
      // Correctly destructure clientX and clientY from the event object
      const { clientX, clientY } = event;
      setPosition({
        x: clientX,
        y: clientY,
      });
    };

    // Add the event listener when the component mounts
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    // This is important to prevent memory leaks
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div
      style={{
        // We use transform to move the blob. This is more performant than changing top/left.
        // The blob is centered on the cursor by subtracting half its width/height (144px / 2 = 72px).
        transform: `translate(${position.x - 72}px, ${position.y - 72}px)`,
        // The transition property creates the smooth trailing effect
        transition: "transform 0.2s ease-out",
      }}
      className="
        fixed top-0 left-0 
        w-36 h-36 
        bg-violet-500 
        rounded-full 
        opacity-50 
        blur-2xl
        pointer-events-none  // This allows you to click on elements 'behind' the blob
      "
    />
  );
};

export default Blob;
