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
import LifeGame from "./Components/FX/LifeGame";

// Main App Component - This is where we render the Blob and the page content
export default function App() {

  return (
    <div>
      <LifeGame 
        cellWidthPercentage={0.02} 
        gameSpeed={200}
        startAliveThreshold={0.85}/>

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
        <FlexH className="justify-center">
          <Split
            mainTitle="My Dual Identity"
            mainSubtitle="Some super cool and catchy subtitle can go here."
            leftTitle="Software Developer"
            rightTitle="Ariel Photographer"
            logoLeft="icons/developer.svg"
            logoRight="icons/drone.svg"
            leftContent=
            {
              <div>
                <p>I'm a full-stack developer with a passion for building clean, robust, and scalable applications that solve real-world problems. My primary goal is to translate complex ideas into intuitive, performant user experiences, and I thrive on architecting efficient systems from the ground up.</p>
                <p className="font-bold mt-3">Key Strengths:</p>
                <ul>
                  <li><span className="text-green-500 mr-3">•</span>List Item 1</li>
                  <li><span className="text-green-500 mr-3">•</span>List Item 1</li>
                  <li><span className="text-green-500 mr-3">•</span>List Item 1</li>
                </ul>
              </div>
            }
            rightContent=
            {
              <div>
                <p>My photography is about revealing the world's hidden geometry through altitude......</p>
                <p className="font-bold mt-3">Key Strengths:</p>
                <ul>
                  <li><span className="text-indigo-500 mr-3">•</span>List Item 1</li>
                  <li><span className="text-indigo-500 mr-3">•</span>List Item 1</li>
                  <li><span className="text-indigo-500 mr-3">•</span>List Item 1</li>
                </ul>
              </div>
            }
          />
        </FlexH>
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
                paragraph="Aviation Weather decodes METAR and TAF data into a user-friendly format."
                features={["Languages: Typescript (TSX)/CSS.", "Framework: React Native", "Platform: Android."]}
                />
              <Card 
                title="USB Guard Interface" subtitle="A user-friendly interface for USB access control." ctaMode="link"
                paragraph="Frustrated by constantly diving into the command line to manage USB devices, I built this simple Qt GUI to be my daily driver. It provides a visual dashboard for UsbGuard, letting me click to authorize or block peripherals instantly and finally streamlining my USB workflow."
                features={["Languages: C/C++.", "Framework: QT/QML", "Platform: Linux with KDE Plasma."]}
                url="https://github.com/IBXCODECAT/UsbGuardGUI"
                />
              <Card 
                title="IBX Translator" subtitle="A translation tool for Discord ." ctaMode="link"
                paragraph="IBX Translator is a Discord bot that translates messages between multiple languages."
                features={["Languages: Typescript (TS).", "Framework: NodeJS.", "Platform: NodeJS Server."]}
                />
              <Card
                title="Robotics Telemetry" subtitle="A telemetry system for FIRST robotics." ctaMode="link"
                paragraph=""
                features={["Languages: Kotlin", "Framework: Android Studio", "Platform: Android"]}
                url="https://github.com/SaberRobotics2506/Saber-Metrics"
              />
            </FlexH>
          </FlexV>
        
      </SectionWrapper>
      <SectionWrapper className="bg-gradient-to-b from-sky-500 to-sky-300">
            <div></div>
      </SectionWrapper>

      <Blob />
      <Footer/>

    </div>
  );
}