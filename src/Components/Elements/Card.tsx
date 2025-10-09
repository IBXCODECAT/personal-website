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

    return (
        <div className="bg-slate-500">
            <img src={image} alt={alt}/>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <div>
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