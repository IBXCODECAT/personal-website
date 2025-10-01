import { FC } from "react";
import PlayInstallButton from "../Elements/PlayInstallButton";

export interface CarouselSlideProps {
  title: string;
  description: string;
  CTA: string;
  href?: string;
}

// A reusable component for an individual carousel slide.
const CarouselSlide: FC<CarouselSlideProps> = ({ title, description, CTA, href }) => {
  return (
    <article className="w-full flex-shrink-0">
      <div className="flex flex-col items-center ml-12 mr-12">
        <h1 className="w-auto p-8 text-4xl font-bold text-gray-200" >{title}</h1>
        <div className="flex flex-row">
          <p 
            className="
              w-auto h-96 pl-8 pr-4 
            text-gray-200">{description}</p>
          <img 
            src={"https://placehold.co/600x400/EEE/31343C"} alt={"Placeholder Image 600x400"} 
            className="pl-4 pr-8 h-96"/>
        </div>
        <div className="flex flex-row justify-center gap-12 items-center mt-8 w-full">
          <PlayInstallButton/>
          <a 
            href={href} 
            className="
              bg-gradient-to-r from-purple-500 to-pink-500
              text-white font-bold text-lg
              py-4 px-10 rounded-full
              shadow-lg
            ">
              {CTA}
          </a>
        </div>
        
      </div>
    </article>
  );
};

export default CarouselSlide;