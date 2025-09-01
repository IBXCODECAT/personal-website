import React, { FC, ReactNode, useState } from "react";
import I_ChevronLeft from "../../Icons/ChevronLeft";
import I_ChevronRight from "../../Icons/ChevronRight";

const MAX_VISIBILITY = 3;

interface CarouselProps {
    children: ReactNode;
}

const Carousel: FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);

  return (
    <div className="carousel relative z-10 w-3/5 h-4/5">
      {active > 0 && (
        <button
          className="left-0 text-white"
          onClick={() => setActive(i => i - 1)}
          style={{ transform: 'translateX(-100%) translateY(-50%)' }}>
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
          className="right-0 text-white"
          onClick={() => setActive(i => i + 1)}
          style={{ transform: 'translateX(100%) translateY(-50%)' }}>
        
          <I_ChevronRight />
        </button>
      )}
    </div>
  );
};

export default Carousel;