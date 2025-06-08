import React from "react";

// The Blob Component
const Blob = () => {
  // State to hold the blob's position
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  // useEffect hook to add and clean up the mousemove event listener
  React.useEffect(() => {
    // This function updates the position state based on the mouse coordinates
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setPosition({
        x: clientX,
        y: clientY,
      });
    };

    // Add the event listener when the component mounts
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means ``this effect runs only once on mount

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
        className="
          -translate-x-1/2 -translate-y-1/2 // Center the blob on the cursor
          w-48 h-48
          bg-gradient-to-tr from-emerald-400 to-sky-600
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