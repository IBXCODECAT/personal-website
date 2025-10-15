import Blob from "./Components/FX/Blob";
import CloudAnimation from "./Components/FX/Clouds";
import Header from "./Components/Header";
import ScrollPrompt from "./Icons/ScrollPrompt";
import SectionWrapper from "./Components/SectionWrapper";
import StarfieldAnimation from "./Components/FX/Starfield";

import Footer from "./Components/Footer";
import Card from "./Components/Elements/Card";

import FlexV from "./Components/Containers/FlexV";
import FlexH from "./Components/Containers/FlexH";
import Split from "./Components/Containers/Split";

// Main App Component - This is where we render the Blob and the page content
export default function App() {

  return (
    <div>
      {/* Landing Section */}
      <StarfieldAnimation>
        <SectionWrapper className="bg-gradient-to-b from-gray-950 to-indigo-950">
          <img src="/images/kittyfx.png" alt="site logo" className="z-10" width={450} height={450} draggable="false"/>
          <Header 
            className="bg-gradient-to-r from-emerald-500 to-sky-600"
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
          <FlexV className="h-full w-screen justify-start gap-24">
            <Header title="About Me" className="bg-gradient-to-r from-emerald-500 to-emerald-700"/>
            <FlexH className="justify-center">
              <Split
                leftTitle="Software Developer"
                rightTitle="Ariel Photographer"
                logoLeft="icons/developer.svg"
                logoRight="icons/drone.svg"
                leftContent={<p>Placeholder Content</p>}
                rightContent={<p>Placeholder Content</p>}
              />
            </FlexH>
          </FlexV>
      </SectionWrapper>

      {/* Landing Section */}
      <SectionWrapper className="bg-gradient-to-b from-sky-700 to-sky-500">
          <FlexV className="h-full w-screen justify-start gap-24">
            <Header 
              title="Featured Projects" 
              description="A selection of my most notable projects, showcasing a range of skills and technologies."
              className="bg-gradient-to-r from-emerald-500 to-emerald-700"/>

            <FlexH className="justify-center gap-20">
              <Card 
                title="Aviation Weather" subtitle="Real-time weather data for drone pilots." ctaMode="google_play"
                paragraph="Aviation Weather is an Android app that decodes cryptic METAR and TAF data into a user-friendly format for drone pilots on the go."
                features={["Works with 500+ airports in the United States.", "Decode complex METAR and TAF strings.", "Features a clean, intuitive interface for quick access to essential weather information."]}
                />
              <Card 
                title="USB Guard Interface" subtitle="A user-friendly interface for USB access control." ctaMode="link"
                paragraph="The USB Guard Interface is a linux application for KDE plasma that provides a user-friendly interface for the USBGuard service."
                features={["Monitor and manage authorized USB devices.", "Reject unauthorized USB devices automatically."]}
                />
              <Card 
                title="IBX Translator" subtitle="A translation tool for Discord ." ctaMode="link"
                paragraph="IBX Translator is a Discord bot that translates messages between multiple languages."
                features={["Supports over 100 languages.", "Real-time translation with low latency.", "Easy to use and integrate into any Discord server."]}
                />
              <Card title="Robotics Telemetry" subtitle="A telemetry system for FIRST robotics." ctaMode="download"/>
            </FlexH>
          </FlexV>
        
        {/*<Carousel slides={projectSlides}/>*/}
        
      </SectionWrapper>

      {/* Aviation Section */}
      <CloudAnimation>
        <SectionWrapper className="bg-gradient-to-b from-sky-500 to-sky-300">
          <Header 
            className="bg-gradient-to-r from-amber-400 to-fuchsia-600"
            title="Drone Services"/>

            <img 
              src='images/nathan.schmitt_drone.jpg' 
              alt="Nathan Schmitt flying a drone"
              width={100}
              />

        </SectionWrapper>
      </CloudAnimation>

      {/* Render the dynamic gradient Blob that follows the cursor */}
      <Blob />
      <Footer/>

    </div>
  );
}