import Blob from "./Components/FX/Blob";
import CloudAnimation from "./Components/FX/Clouds";
import Header from "./Components/Header";
import ScrollPrompt from "./Icons/ScrollPrompt";
import SectionWrapper from "./Components/SectionWrapper";
import StarfieldAnimation from "./Components/FX/Starfield";


import Carousel from './Components/Carousel/Carousel'
import CarouselCard from "./Components/Carousel/CarouselSlide";
import SectionFooter from "./Components/SectionFooter";
import SocialIcon from "./Icons/SocialIcon";

// Main App Component - This is where we render the Blob and the page content
export default function App() {

  const images = [
    'https://placehold.co/1200x600/FF5733/FFFFFF?text=Slide+1',
    'https://placehold.co/1200x600/33FF57/FFFFFF?text=Slide+2',
    'https://placehold.co/1200x600/3357FF/FFFFFF?text=Slide+3',
    'https://placehold.co/1200x600/FF33A1/FFFFFF?text=Slide+4',
    'https://placehold.co/1200x600/A133FF/FFFFFF?text=Slide+5',
    'https://placehold.co/1200x600/FF5733/FFFFFF?text=Slide+6',
    'https://placehold.co/1200x600/33FF57/FFFFFF?text=Slide+7',
    'https://placehold.co/1200x600/3357FF/FFFFFF?text=Slide+8',
    'https://placehold.co/1200x600/FF33A1/FFFFFF?text=Slide+9',
    'https://placehold.co/1200x600/A133FF/FFFFFF?text=Slide+10',
    'https://placehold.co/1200x600/FF5733/FFFFFF?text=Slide+11',
    'https://placehold.co/1200x600/33FF57/FFFFFF?text=Slide+12',
    'https://placehold.co/1200x600/3357FF/FFFFFF?text=Slide+13',
    'https://placehold.co/1200x600/FF33A1/FFFFFF?text=Slide+14',
    'https://placehold.co/1200x600/A133FF/FFFFFF?text=Slide+15',
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
        
        

        <Carousel slides={images}/>
       
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

      <SectionFooter className="bg-green-600">
        <a href="https://localhost:3000">LINK0 - </a>
        <a href="https://localhost:3000">LINK1 - </a>
        <a href="https://localhost:3000">LINK2 - </a>
        <a href="https://localhost:3000">LINK3</a>


        <SocialIcon type="github" className="text-white size-8"/>
        <SocialIcon type="instagram" className="text-white size-8"/>
        <SocialIcon type="linkedin" className="text-white size-8"/>
        <SocialIcon type="twitter" className="text-white size-8"/>
        <SocialIcon type="youtube" className="text-white size-8"/>
        
      </SectionFooter>
      {/* Render the dynamic gradient Blob that follows the cursor */}
      <Blob />
    </div>
  );
}
