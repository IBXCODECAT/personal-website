import { FC } from "react";

export interface CarouselSlideProps {
  title: string;
  description: string;
  href?: string;  
  imageUri?: string;
  imageAlt?: string;
}

// A reusable component for an individual carousel slide.
const CarouselSlide: FC<CarouselSlideProps> = ({ title, description, href, imageUri, imageAlt }) => {
  return (
    <div className="w-full flex-shrink-0">
      <div className="flex flex-col items-center">
        <h1 className="w-auto p-8 text-4xl font-bold text-gray-200" >{title}</h1>
        <div className="flex flex-row">
          <p className="w-auto text-gray-200">{description}</p>
          <img src={imageUri} alt={imageAlt}/>
        </div>
        <a href={href}>Check it Out!</a>
      </div>
    </div>
  );
};

export default CarouselSlide;