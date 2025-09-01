import { FC } from "react";

interface CarouselCardProps {
    title: string;
    content: string;
}

const CarouselCard: FC<CarouselCardProps> = ({title, content}) => {
    return (
        <div className="card w-full p-8 bg-gradient-to-b from-indigo-950 to-sky-800 rounded-2xl text-gray-400 text-justify transition-all duration-300 ease-out">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-7 text-gray-200">
            {title}
            </h2>
            <div className="flex justify-items-stretch gap-8">
                <img src="https://placehold.co/600x400/EEE/31343C"/>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default CarouselCard;