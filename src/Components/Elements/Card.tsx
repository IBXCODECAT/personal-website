import { FC } from "react";
import PlayInstallButton from "./PlayInstallButton";
import FlexH from "../Containers/FlexH";

interface CardProps {
    title: string;
    subtitle: string;
    image?: string;
    alt?: string;
    ctaMode: 'link' | 'download' | 'google_play';
}

const Card: FC<CardProps> = ({title, subtitle, image, alt, ctaMode}) => {
    
    // Load placeholder images if none are provided
    if (image === undefined) image = "https://placehold.co/350x250";
    if (alt === undefined) alt = "placeholder";

    // Assuming FlexH, PlayInstallButton, and other components/variables are defined elsewhere.

return (
    <div className="bg-slate-500 rounded-xl overflow-hidden">
        {/* 1. The **Image Container** This is the new key element. By making this **relative**, 
          it becomes the positioning context for the absolute text overlay.
          It ensures the text only covers the image, not the entire card.
        */}
        <div className="relative">
            <img 
                src={image} 
                alt={alt} 
                className="w-full h-auto rounded-t-xl" 
            />

            {/*
              2. The **Absolute Text Overlay**
              - 'absolute inset-0' covers only the parent 'relative' div (the image container).
              - 'p-4' adds padding within the image area.
              - 'flex flex-col justify-end' pushes the text to the bottom.
              - 'bg-black/30' provides a semi-transparent background for readability.
            */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30">
                <h2 className="text-white text-xl font-bold">{title}</h2>
                <p className="text-white text-sm">{subtitle}</p>
            </div>
        </div>

        {/* 3. The **Separate Content Area** This area is completely separate from the image and text overlay.
        */}
        <div className="p-4">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
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