import React, { useEffect, useState } from 'react';

// Define a type for the common SVG component props
interface CloudSVGProps {
  className?: string;
  style?: React.CSSProperties;
}

// Cloud SVG path data - three different simple cloud shapes
const CloudSVG1: React.FC<CloudSVGProps> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 200 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M175 60C175 76.5685 161.569 90 145 90C134.12 90 124.473 84.1804 119.006 75.1275C113.539 84.1804 103.88 90 93 90C76.4315 90 63 76.5685 63 60C63 43.4315 76.4315 30 93 30C103.88 30 113.539 35.8196 119.006 44.8725C124.473 35.8196 134.12 30 145 30C161.569 30 175 43.4315 175 60ZM100 50C100 66.5685 86.5685 80 70 80C53.4315 80 40 66.5685 40 50C40 33.4315 53.4315 20 70 20C86.5685 20 100 33.4315 100 50ZM150 40C150 56.5685 136.569 70 120 70C103.431 70 90 56.5685 90 40C90 23.4315 103.431 10 120 10C136.569 10 150 23.4315 150 40Z"
      fill="currentColor"
    />
  </svg>
);

const CloudSVG2: React.FC<CloudSVGProps> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 200 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M180 50C180 66.5685 166.569 80 150 80C139.12 80 129.473 74.1804 124.006 65.1275C118.539 74.1804 108.88 80 98 80C81.4315 80 68 66.5685 68 50C68 33.4315 81.4315 20 98 20C108.88 20 118.539 25.8196 124.006 34.8725C129.473 25.8196 139.12 20 150 20C166.569 20 180 33.4315 180 50ZM100 40C100 56.5685 86.5685 70 70 70C53.4315 70 40 56.5685 40 40C40 23.4315 53.4315 10 70 10C86.5685 10 100 23.4315 100 40ZM160 30C160 46.5685 146.569 60 130 60C113.431 60 100 46.5685 100 30C100 13.4315 113.431 0 130 0C146.569 0 160 13.4315 160 30Z"
      fill="currentColor"
    />
  </svg>
);

const CloudSVG3: React.FC<CloudSVGProps> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 200 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M190 40C190 56.5685 176.569 70 160 70C149.12 70 139.473 64.1804 134.006 55.1275C128.539 64.1804 118.88 70 108 70C91.4315 70 78 56.5685 78 40C78 23.4315 91.4315 10 108 10C118.88 10 128.539 15.8196 134.006 24.8725C139.473 15.8196 149.12 10 160 10C176.569 10 190 23.4315 190 40ZM100 30C100 46.5685 86.5685 60 70 60C53.4315 60 40 46.5685 40 30C40 13.4315 53.4315 0 70 0C86.5685 0 100 13.4315 100 30ZM150 20C150 36.5685 136.569 50 120 50C103.431 50 90 36.5685 90 20C90 3.43146 103.431 -10 120 -10C136.569 -10 150 3.43146 150 20Z"
      fill="currentColor"
    />
  </svg>
);

// Array of cloud SVG components
const cloudShapes: React.FC<CloudSVGProps>[] = [CloudSVG1, CloudSVG2, CloudSVG3];

// Define a type for a single cloud object in the state
interface Cloud {
  id: number;
  CloudComponent: React.FC<CloudSVGProps>;
  top: string;
  duration: string;
  delay: string;
  scale: string;
  opacity: string;
}

// Define props for CloudAnimation, including children
interface CloudAnimationProps {
  children?: React.ReactNode;
}

const CloudAnimation: React.FC<CloudAnimationProps> = ({ children }) => {
  // State to hold cloud properties, explicitly typed as an array of Cloud objects
  const [clouds, setClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    // Generate more clouds for variety
    const numClouds: number = 15; // Number of clouds
    const newClouds: Cloud[] = Array.from({ length: numClouds }).map((_, index) => {
      // Randomly pick a cloud shape
      const CloudComponent: React.FC<CloudSVGProps> = cloudShapes[Math.floor(Math.random() * cloudShapes.length)];

      // Calculate a random delay, including negative values for immediate appearance
      // The range for delay is now from - (max_duration / 2) to max_delay
      const maxDuration = 40; // Max duration from original range (20-40s)
      const maxDelay = 15; // Max delay from original range (0-15s)
      const randomDelay = Math.random() * (maxDelay + maxDuration / 2) - (maxDuration / 2); // Adjust range to include negatives
      const duration = `${Math.random() * 20 + 20}s`; // 20-40 seconds

      return {
        id: index,
        CloudComponent: CloudComponent, // Store the selected component
        // Random starting position (vertical) - adjusted to only cover upper half (0% to 40%)
        top: `${Math.random() * 40}%`, // Clouds will appear between 0% and 40% from the top
        // Random animation duration for varied speeds
        duration: duration,
        // Random animation delay to stagger their appearance, now including negative values
        delay: `${randomDelay}s`,
        // Random size for variety - adjusted for even more variation (0.1 to 2.0 scale)
        scale: `${Math.random() * 1.9 + 0.1}`,
        // Random opacity for a more natural look - adjusted for more variation (0.2 to 1.0 opacity)
        opacity: `${Math.random() * 0.8 + 0.2}`,
      };
    });
    setClouds(newClouds);
  }, []);

  return (
    // Removed w-full, h-screen, and background gradient to allow sizing by children and only draw clouds
    <div className="relative overflow-hidden font-inter">
      {/* Tailwind CSS for keyframe animation - for cloud movement */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateX(100vw); /* Start off-screen right */
            }
            100% {
              transform: translateX(-150%); /* Move off screen to the left */
            }
          }
        `}
      </style>

      {clouds.map((cloud) => (
        <cloud.CloudComponent // Use the dynamically selected component
          key={cloud.id}
          className="absolute text-white"
          style={{
            top: cloud.top,
            width: `calc(100px * ${cloud.scale})`, // Base width adjusted by scale
            height: `calc(50px * ${cloud.scale})`, // Base height adjusted by scale
            opacity: cloud.opacity,
            animation: `float ${cloud.duration} ${cloud.delay} infinite linear`,
            animationFillMode: 'backwards', // Ensures 0% state is applied during delay
          }}
        />
      ))}
      {children} {/* Render child elements here */}
    </div>
  );
};

export default CloudAnimation;
