import React from 'react';

// Define the interface for the props that the GradientSectionContainer component will accept.
// This provides type checking for 'children', 'fromColor', and 'toColor'.
interface GradientSectionContainerProps {
  children?: React.ReactNode; // 'children' can be any valid React node and is optional.
  fromColor?: string;         // 'fromColor' is a string and is optional.
  toColor?: string;           // 'toColor' is a string and is optional.
}

// The GradientSectionContainer component is now typed as a React Functional Component (React.FC)
// with the defined GradientSectionContainerProps.
// It provides a full-height gradient background and accepts customizable colors.
const GradientSectionContainer: React.FC<GradientSectionContainerProps> = ({
  children,
  fromColor = 'black',
  toColor = 'blue-500'
}) => {
  // Construct the Tailwind CSS class string dynamically using the props.
  // Template literals are used to embed the fromColor and toColor directly into the class names.
  // Default values are provided for fromColor and toColor in the function signature,
  // ensuring the component still renders with a default gradient if props are not passed.
  const gradientClasses = `bg-gradient-to-b from-${fromColor} to-${toColor}`;

  return (
    // The main container div.
    // The dynamic gradient classes are applied here.
    // 'min-h-screen' ensures the div takes at least the full height of the viewport,
    // making sure the gradient is visible across the entire screen vertically.
    // 'flex items-center justify-center' is used to center any children content
    // within the gradient container, providing a good default layout.
    // 'p-4' adds some padding around the content.
    <div className={`${gradientClasses} min-h-screen flex items-center justify-center`}>
      {/*
        This is where any content passed to the GradientSectionContainer component will be rendered.
        Example usage in a parent component (e.g., App.tsx):
        <GradientSectionContainer fromColor="purple-700" toColor="pink-400">
          <h1 className="text-white text-4xl font-bold">My Custom Gradient Section</h1>
          <p className="text-white text-lg mt-2">This is some content on a beautiful custom gradient background.</p>
        </GradientSectionContainer>

        Or with default colors:
        <GradientSectionContainer>
          <h1 className="text-white text-4xl font-bold">Default Gradient Section</h1>
          <p className="text-white text-lg mt-2">This uses black to blue-500 by default.</p>
        </GradientSectionContainer>
      */}
      {children}
    </div>
  );
};

export default GradientSectionContainer;
