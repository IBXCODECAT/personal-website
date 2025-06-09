import React from "react";
import Blob from "./Components/Blob";
import Card from "./Components/Card";
import ScrollPrompt from "./Components/ScrollPrompt";

// Main App Component - This is where we render the Blob and the page content
export default function App() {
  return (
    <div className="bg-gray-900">
    <div className="relative  min-h-screen text-white flex items-center justify-center font-sans overflow-hidden">
      
      <img src="kittyfx.png" alt="site logo" className="z-10" width={450} height={450} draggable="false"/>
      {/* The Blob component is rendered here */}
      <Blob />

      {/* Example content for the page */}
      <div className="text-center z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-600">
          Nathan Schmitt
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Move your mouse around the screen to see the blob trail effect. The
          blob is a separate component and doesn't interfere with the content
          underneath it.
        </p>
        
      </div>
    </div>
      <ScrollPrompt/>
      <Card/>
      <Card/>
    </div>
  );
}
