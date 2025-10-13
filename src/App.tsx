import Blob from "./Components/FX/Blob";
import CloudAnimation from "./Components/FX/Clouds";
import Header from "./Components/Header";
import ScrollPrompt from "./Icons/ScrollPrompt";
import SectionWrapper from "./Components/SectionWrapper";
import StarfieldAnimation from "./Components/FX/Starfield";

import Carousel from './Components/Carousel/Carousel'
import Footer from "./Components/Footer";
import { CarouselSlideProps } from "./Components/Carousel/CarouselSlide";
import Card from "./Components/Elements/Card";
import FlexV from "./Components/Containers/FlexV";
import FlexH from "./Components/Containers/FlexH";

// Main App Component - This is where we render the Blob and the page content
export default function App() {
  
  const projectSlides: CarouselSlideProps[] = [
    {
      title: "Aviation Weather App",
      description: "Operating a drone safely requires a keen awareness of weather conditions, as regulations and manufacturer guidelines often place strict operational requirements on flights. Drones are particularly susceptible to wind, precipitation, and low visibility, which can compromise stability and navigation.\n\nThis project was born out of the need for a more accessible solution to a problem many drone pilots face: deciphering complex meteorological data. ----- While sources like METAR and TAF (Aviation Routine Weather Report and Terminal Aerodrome Forecast) provide crucial information, their coded format is often difficult to interpret quickly in the field. ---- The Drone Weather App solves this problem by providing a user-friendly mobile interface that decodes METAR and TAF data into a clear, actionable format. Pilots can now get instant, on-the-go access to the weather information they need to make informed decisions and ensure safe, compliant drone operations.",
      href: "",
      CTA: "Download APK",
    },
    {
      title: "Hide & Seek Video Game",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      href: "",
      CTA: "Call to Action",
    },
    {
      title: "Robotics Telemetry",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      href: "https://github.com/SaberRobotics2506/Saber-Metrics",
      CTA: "View Source Code",
    }
  ];

  return (
    <div>
      {/* Landing Section */}
      <StarfieldAnimation>
        <SectionWrapper className="bg-gradient-to-b from-gray-950 to-indigo-950">
          <img src="/images/kittyfx.png" alt="site logo" className="z-10" width={450} height={450} draggable="false"/>
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
          
          <FlexV className="h-full w-screen justify-start gap-24">
            <Header title="Featured Projects" startColor="from-emerald-500" endColor="to-emerald-700"/>

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
      </SectionWrapper>

      {/* Landing Section */}
      <SectionWrapper className="bg-gradient-to-b from-sky-700 to-sky-500">
        
        {/*<Carousel slides={projectSlides}/>*/}
        
      </SectionWrapper>

      {/* Aviation Section */}
      <CloudAnimation>
        <SectionWrapper className="bg-gradient-to-b from-sky-500 to-sky-300">
          <Header 
            startColor="from-amber-400"
            endColor="to-fuchsia-600"
            title="Drone Services"/>

            <img 
              src='images/nathan.schmitt_drone.jpg' 
              alt="image"
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