import { FC } from "react";
import { CardData } from "../../Interfaces";

interface ContainerProps {
    data: CardData[];
}

const HorizontalCardScrollContainer: FC<ContainerProps> = ({data}) => {
    return (
        <div className="flex overflow-x-auto p-4 space-x-4 custom-scrollbar">
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