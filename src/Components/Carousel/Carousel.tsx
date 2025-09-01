import { FC, useState } from "react";
import CarouselSlide from "./CarouselSlide";

interface CarouselProps {
  slides: string[];
}

// The main Carousel component that manages state and navigation logic.
// It receives an array of images as a prop.
const Carousel: FC<CarouselProps> = ({ slides }) => {
  // State to keep track of the current image index.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to move to the next image in the carousel.
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to move to the previous image in the carousel.
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="z-10 relative w-full max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden group">
      
      {/* Container for the carousel slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {slides.map((image, index) => (
          <CarouselSlide key={index} image={image} />
        ))}
      </div>

      {/* Previous button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-30 text-white hover:bg-opacity-50 transition duration-300 transform scale-100 group-hover:scale-110 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-30 text-white hover:bg-opacity-50 transition duration-300 transform scale-100 group-hover:scale-110 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none ${
              currentImageIndex === index ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;