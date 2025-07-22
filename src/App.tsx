  import Blob from "./Components/Blob";
import Card from "./Components/Card";
import ScrollPrompt from "./Components/ScrollPrompt";
import Section from "./Components/Section";
import Header from "./Components/Header";
import Starfield from "./Components/Starfield";

// Main App Component - This is where we render the Blob and the page content
export default function App() {
  return (
    <div className="bg-gray-900">

      {/* Landing Section */}

      <Starfield>
        <Section>
          <img src="kittyfx.png" alt="site logo" className="z-10" width={450} height={450} draggable="false"/>
          <Header startColor="from-emerald-500" endColor="to-sky-600" title="Nathan Schmitt" description="Hi there! I'm a full-stack software developer, passionate about bringing ideas to life through technology. This is my journey."/>
        </Section>
      </Starfield>
      
      {/* Render the dynamic gradient Blob that follows the cursor */}
      <Blob />


      {/* Prompt to scroll the page. */}
      <ScrollPrompt/>
      {/* This is where the scroll prompt will link us to (between last and next section) */}
      <div id="content"/>

      {/* Projects Section */}
      <Section>
        <div>
          <Header startColor="from-amber-400" endColor="to-fuchsia-600" title="Engineering Adventures" description="Here, you'll find a collection of projects and experiences that mark my journey as a full-stack software developer. Each card below represents a unique challenge, a new skill learned, and a story."/>
        
          <Card/>
          <Card/>
          <Card/>
        </div>
      </Section>

      <Section>
        <h1>Some other section</h1>
      </Section>
    </div>
  );
}
