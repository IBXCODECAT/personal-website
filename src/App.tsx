import Blob from "./Components/FX/Blob";
import CloudAnimation from "./Components/FX/Clouds";
import Header from "./Components/Header";
import ScrollPrompt from "./Icons/ScrollPrompt";
import SectionWrapper from "./Components/SectionWrapper";
import StarfieldAnimation from "./Components/FX/Starfield";


import Carousel from './Components/Carousel/Carousel'
import Footer from "./Components/Footer";
import { CarouselSlideProps } from "./Components/Carousel/CarouselSlide";

// Main App Component - This is where we render the Blob and the page content
export default function App() {

  const projectSlides: CarouselSlideProps[] = [
    {
      title: "Aviation Weather",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      href: "",
      imageAlt: "Placeholder Image 600x400",
      imageUri: "https://placehold.co/600x400/EEE/31343C"
    },
    {
      title: "Robotics Telemetry",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      href: "",
      imageAlt: "Placeholder Image 600x400",
      imageUri: "https://placehold.co/600x400/EEE/31343C"
    },
    {
      title: "Another Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      href: "",
      imageAlt: "Placeholder Image 600x400",
      imageUri: "https://placehold.co/600x400/EEE/31343C"
    }
  ];

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
            description="Software developer and ariel photographer, passionate about bringing ideas to life through advanced technology."/>
        </SectionWrapper>
      </StarfieldAnimation>

      {/* Prompt to scroll the page. */}
      <ScrollPrompt/>

      {/* This is where the scroll prompt will link us to (between last and next section) */}
      <div id="content"/>
      
      {/* Projects Section */}
      <SectionWrapper className="bg-gradient-to-b from-indigo-950 to-sky-700">
        
        <Carousel slides={projectSlides}/>
       
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

      {/* Render the dynamic gradient Blob that follows the cursor */}
      <Blob />
      
      <Footer/>

    </div>
  );
}
