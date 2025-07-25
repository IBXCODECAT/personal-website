import Blob from "./Components/Blob";
import Card from "./Components/Card";
import CloudAnimation from "./Components/FX/Clouds";
import Header from "./Components/Header";
import ScrollPrompt from "./Components/ScrollPrompt";
import SectionWrapper from "./Components/SectionWrapper";
import StarfieldAnimation from "./Components/FX/Starfield";

// Main App Component - This is where we render the Blob and the page content
export default function App() {
  return (
    <div>
      {/* Landing Section */}
      <StarfieldAnimation>
        <SectionWrapper className="bg-gradient-to-b from-gray-950 to-indigo-950">
          <img src="kittyfx.png" alt="site logo" className="z-10" width={450} height={450} draggable="false"/>
          <Header 
            startColor="from-emerald-500" 
            endColor="to-sky-600" 
            title="Nathan Schmitt" 
            description="Hi there! I'm a full-stack software developer, passionate about bringing ideas to life through technology. This is my journey."/>
        </SectionWrapper>
      </StarfieldAnimation>

      {/* Prompt to scroll the page. */}
      <ScrollPrompt/>

      {/* This is where the scroll prompt will link us to (between last and next section) */}
      <div id="content"/>
      
      {/* Projects Section */}
      <SectionWrapper className="bg-gradient-to-b from-indigo-950 to-sky-700">
        <div>
          <Header
            startColor="from-amber-400"
            endColor="to-fuchsia-600"
            title="Software Developer "
            description="Here, you'll find a collection of projects and experiences that mark my journey as a full-stack software developer. Each card below represents a unique challenge, a new skill learned, and a story."/>
          <Card/>
          <Card/>
          
          <Card/>
        </div>
      </SectionWrapper>

      {/* Landing Section */}
      <SectionWrapper className="bg-gradient-to-b from-sky-700 to-sky-500">
        <Header 
          startColor="from-emerald-500" 
          endColor="to-sky-600" 
          title="Nathan Schmitt" 
          description="Hi there! I'm a full-stack software developer, passionate about bringing ideas to life through technology. This is my journey."/>
      </SectionWrapper>

      {/* Aviation Section */}
      <CloudAnimation>
        <SectionWrapper className="bg-gradient-to-b from-sky-500 to-sky-300">
          <Header 
            startColor="from-amber-400"
            endColor="to-fuchsia-600"
            title="Drone Services" 
            description="Hi there! I'm a full-stack software developer, passionate about bringing ideas to life through technology. This is my journey."/>
        </SectionWrapper>
      </CloudAnimation>

      <SectionWrapper className="bg-green-600">
        <Header 
          startColor="from-emerald-500" 
          endColor="to-sky-600" 
          title="Contact Me" 
          description="Hi there! I'm a full-stack software developer, passionate about bringing ideas to life through technology. This is my journey."/>
      
      </SectionWrapper>
      {/* Render the dynamic gradient Blob that follows the cursor */}
      <Blob />
    </div>
  );
}
