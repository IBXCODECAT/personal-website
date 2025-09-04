import { FC } from "react";

export interface CarouselSlideProps {
  title: string;
  description: string;
  CTA: string;
  href?: string;  
  imageUri?: string;
  imageAlt?: string;
}

// A reusable component for an individual carousel slide.
const CarouselSlide: FC<CarouselSlideProps> = ({ title, description, CTA, href, imageUri, imageAlt }) => {
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
            src={imageUri} alt={imageAlt} 
            className="pl-4 pr-8 h-96"/>
        </div>
        <a 
          href={href} 
          className="
            mt-8
            bg-gradient-to-r from-purple-500 to-pink-500
            text-white font-bold text-lg
            py-4 px-10 rounded-full
            shadow-lg
            transform transition duration-300 ease-in-out
            hover:scale-105 hover:shadow-x1
            focus:outline-none focus:ring-0 focus:ring-purple-300 focus:ring-opacity-50
            active:scale-95
          ">
            {CTA}
        </a>
      </div>
    </article>
  );
};

export default CarouselSlide;