import { FC, ReactNode, useEffect, useRef } from "react";

interface StarfieldProps {
    children: ReactNode;
}

// Starfield component that renders a dynamic starfield background
// behind its child elements, with a zooming effect.
const Starfield: FC<StarfieldProps> = ({ children }) => {
  // Ref to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Ref to hold the animation frame ID for cleanup
  const animationFrameId = useRef<number | null>(null);
  // Ref to hold the mutable array of stars, to avoid re-renders on every animation frame
  const starsRef = useRef<any[]>([]);

  // Effect to initialize the canvas, generate stars, and set up the animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set initial canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Function to generate a single star with a depth (z) property
    const createStar = () => ({
      // X and Y relative to the center of the canvas
      x: Math.random() * canvas.width - canvas.width / 2,
      y: Math.random() * canvas.height - canvas.height / 2,
      // Z depth, larger value means further away
      z: Math.random() * canvas.width,
      // Base size and opacity before scaling based on depth
      initialSize: Math.random() * 1.5 + 0.5,
      initialOpacity: Math.random() * 0.5 + 0.5,
    });

    // Generate initial stars and store them in the mutable ref
    const numStars = 100; // Increased number of stars for a better effect
    starsRef.current = Array.from({ length: numStars }, createStar);

    // Variable to store the current opacity of the starfield
    let currentStarfieldOpacity = 1;

    // Animation loop function
    const animate = () => {
      // Ensure canvas and context are available
      if (!ctx || !canvas) return;

      // Clear the canvas for the new frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white'; // Stars are white

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      // Perspective value controls the "zoom" intensity
      const perspective = canvas.width * 0.8;

      // Iterate over the stars in the mutable ref and update their properties
      starsRef.current.forEach(star => {
        // Move star forward (decrease z value)
        star.z -= 1; // Adjust this value for faster/slower zoom

        // If star passes the camera (z becomes too small), reset it to the far back
        if (star.z < 1) {
          star.z = canvas.width; // Reset to max depth
          // Give it new random X and Y positions
          star.x = Math.random() * canvas.width - centerX;
          star.y = Math.random() * canvas.height - centerY;
          // Assign new random initial size and opacity
          star.initialSize = Math.random() * 1.5 + 0.5;
          star.initialOpacity = Math.random() * 0.5 + 0.5;
        }

        // Calculate scaled position, size, and opacity based on perspective
        const scale = perspective / star.z;
        const screenX = star.x * scale + centerX;
        const screenY = star.y * scale + centerY;
        const size = star.initialSize * scale;
        // Opacity increases as the star gets closer, capped at 1
        const opacity = star.initialOpacity * scale * 2;

        // Only draw the star if it's visible (size and opacity are above a threshold)
        if (size > 0.1 && opacity > 0.1) {
          ctx.beginPath();
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
          // Apply the `currentStarfieldOpacity` to each star's fill style
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(opacity, 1) * currentStarfieldOpacity})`;
          // Add a glow effect, also affected by the current overall opacity
          ctx.shadowBlur = size * 2;
          ctx.shadowColor = `rgba(255, 255, 255, ${Math.min(opacity * 0.8, 0.8) * currentStarfieldOpacity})`;
          ctx.fill();
        }
      });

      // Request the next animation frame
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // --- Scroll Fade Effect ---
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Define the scroll range over which the fade should occur.
      // For example, fade out completely by the time the user scrolls
      // down 50% of the viewport height.
      const fadeStart = 0; // Start fading immediately
      const fadeEnd = windowHeight * 0.5; // Fade out completely after scrolling 50% of viewport height

      if (scrollY <= fadeStart) {
        currentStarfieldOpacity = 1; // Fully visible at the top
      } else if (scrollY >= fadeEnd) {
        currentStarfieldOpacity = 0; // Fully transparent after scrolling past fadeEnd
      } else {
        // Calculate opacity based on scroll position within the fade range
        currentStarfieldOpacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
      }
      // You can also directly set the canvas style property here if you prefer
      // canvas.style.opacity = currentStarfieldOpacity.toString();
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Start the animation loop
    animate();

    // Handle window resize to adjust canvas dimensions and re-distribute stars
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-initialize stars on resize to ensure they are distributed correctly
      starsRef.current = Array.from({ length: numStars }, createStar);
      // Re-evaluate scroll position on resize to update opacity
      handleScroll();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function for the effect: remove event listener and cancel animation frame
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll); // Clean up scroll listener
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Canvas for the starfield background. Placed behind children (z-0). */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ pointerEvents: 'none' }} // Ensure canvas doesn't block interactions
      ></canvas>

      {/* Children elements rendered on top of the starfield (z-10). */}
      {children}
    </div>
  );
};

export default Starfield;