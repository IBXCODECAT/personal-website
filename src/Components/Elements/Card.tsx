import { FC } from "react";

interface CardProps {
    title: string;
    subtitle: string;
    image?: string;
    alt?: string;
}

const Card: FC<CardProps> = ({title, subtitle, image, alt}) => {
    
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
                <a>CTA</a>
            </div>
        </div>
    );
}

export default Card;