import { FC } from "react";
import PlayInstallButton from "./PlayInstallButton";
import FlexH from "../Containers/FlexH";

interface CardProps {
    title: string;
    subtitle: string;
    paragraph?: string;
    features?: string[];
    image?: string;
    alt?: string;
    ctaMode: 'link' | 'download' | 'google_play';
}

const Card: FC<CardProps> = ({title, subtitle, paragraph, features, image, alt, ctaMode}) => {
    
    // Load placeholder images if none are provided
    if (image === undefined) image = "https://placehold.co/350x250";
    if (alt === undefined) alt = "placeholder";

    // Assuming FlexH, PlayInstallButton, and other components/variables are defined elsewhere.

    return (
        <div className="bg-slate-500 rounded-xl overflow-hidden w-1/5">
            {/*The "Image Container" This is the new key element. */}
            <div className="relative">
                <img src={image} alt={alt} className="w-full h-auto rounded-t-xl"/>

                {/*The "Text Overlay" This is absolutely positioned within the image container.*/}
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30">
                    <h2 className="text-white text-xl font-bold">{title}</h2>
                    <p className="text-white text-sm">{subtitle}</p>
                </div>
            </div>

            {/*The "Content Area" This area is completely separate from the image*/}
            <div className="p-4">
                <p className="text-gray-800 mb-4">{paragraph}</p>
                <ul className="list-disc list-inside mb-4">
                    {features && features.map((feature, index) => (
                        <li key={index} className="text-gray-800 mb-2">{feature}</li>
                    ))}
                </ul>

                <FlexH className="items-center">
                    {ctaMode === 'google_play' && <PlayInstallButton className="block m-auto w-2/3" url="https://play.google.com/"/>}
                    {ctaMode === 'download' && <div></div>}
                    {ctaMode === 'link' && <div></div>}
                </FlexH>
            </div>
        </div>
    );
}

export default Card;