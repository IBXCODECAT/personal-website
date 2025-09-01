import { FC } from "react";

interface CarouselCardProps {
    title: string;
    content: string;
}

const CarouselCard: FC<CarouselCardProps> = ({title, content}) => {
    return (
        <div className="card w-full h-full p-8 bg-purple-200 rounded-2xl text-gray-400 text-justify transition-all duration-300 ease-out">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-7 text-gray-800">
            {title}
            </h2>
            <p>{content}</p>
        </div>
    );
}

export default CarouselCard;