import React, { FC, ReactNode, useState } from "react";
import I_ChevronLeft from "../../Icons/ChevronLeft";
import I_ChevronRight from "../../Icons/ChevronRight";


const CARDS = 10;
const MAX_VISIBILITY = 3;

interface CarouselProps {
    children: ReactNode;
}

const Carousel: FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel relative w-96 h-96 perspective-[500px]">
      {active > 0 && (
        <button
          className="nav left-0 absolute z-20 text-white transition-all duration-300 ease-out"
          onClick={() => setActive(i => i - 1)}
          style={{ transform: 'translateX(-100%) translateY(-50%)' }}
        >
          <I_ChevronLeft />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container absolute w-full h-full"
          style={{
            ["--active" as any]: i === active ? 1 : 0,
            ["--offset" as any]: (active - i) / 3,
            ["--direction" as any]: Math.sign(active - i),
            ["--abs-offset" as any]: Math.abs(active - i) / 3,
            pointerEvents: i === active ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? 0 : 1,
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="nav right-0 absolute z-20 text-white transition-all duration-300 ease-out"
          onClick={() => setActive(i => i + 1)}
          style={{ transform: 'translateX(100%) translateY(-50%)' }}
        >
          <I_ChevronRight />
        </button>
      )}
    </div>
  );
};

export default Carousel;