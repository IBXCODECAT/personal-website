import { FC } from "react";

interface CardProps {
    image?: string;
    alt?: string;
}

const Card: FC<CardProps> = ({image, alt}) => {
    
    // Load placeholder images if none are provided
    if (image === undefined) image = "https://placehold.co/300";
    if (alt === undefined) alt = "placeholder";

    return (
        <div>
            <img src={image} alt={alt}/>
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