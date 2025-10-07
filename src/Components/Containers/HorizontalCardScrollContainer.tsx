import { FC, useEffect, useRef } from "react";
import { CardData } from "../../Interfaces";

interface ContainerProps {
    data: CardData[];
}

const HorizontalCardScrollContainer: FC<ContainerProps> = ({data}) => {
    
    // Create a ref to attatch to the scrolling div
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleNativeWheel = (e: WheelEvent) => {
        
        if(scrollRef.current) {
            const container = scrollRef.current;
            
            // Calculate the new scroll position based on the vertical scroll data
            // The scroll amount is typically e.deltaY or e.deltaX
            const scrollAmount = e.deltaY || e.deltaX;

            // --- Logic: Horizontal Scroll Conversion ---
            container.scrollLeft += scrollAmount;

            // --- Logic: Scroll Input Conversions ---
            const isAtStart = container.scrollLeft === 0 && scrollAmount < 0;
            const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth && scrollAmount > 0;


            console.log("Start: " + isAtStart + " End: " + isAtEnd)

            // Prevent vertical scrolling if at start or end
            if(!isAtStart  && !isAtEnd) {
                e.preventDefault();
            }
        }
    }

    useEffect(() => {
        const container = scrollRef.current;
        if(!container) return;

        // Add the listener with passive: false
        container.addEventListener('wheel', handleNativeWheel, { passive: false });

        // Cleanup function: remove the listener when the component unmounts
        return () => {
            container.removeEventListener('wheel', handleNativeWheel);
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div
            ref={scrollRef}
            className="flex overflow-x-auto p-4 space-x-4">
        {data.map((item, index) => (
            // Inner Card: Prevents shrinking and sets a fixed width
            <div 
            key={index} 
            className="flex-none w-64 bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            </div>
        ))}
        </div>
  );
}

export default HorizontalCardScrollContainer;