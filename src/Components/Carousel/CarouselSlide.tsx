import { FC } from "react";

interface CarouselSlideProps {
    image: string;
}

// A reusable component for an individual carousel slide.
// It receives a single image URL and renders the slide content.
const CarouselSlide: FC<CarouselSlideProps> = ({ image }) => {
  return (
    <div className="w-full flex-shrink-0">
      <img
        src={image}
        alt="Carousel slide"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  );
};

export default CarouselSlide;