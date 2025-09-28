import { FC } from "react";

interface HeaderProps {
    description?: string;
    startColor: string;
    title: string;
    endColor: string;
}

const Header: FC<HeaderProps> = ({startColor, endColor, title, description}) => {

    return (
        <header className="text-center z-10 p-4">
            <h1 className={`bg-gradient-to-r ${startColor} ${endColor} text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent`}>
                {title}
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
        </header>
    );
}

export default Header;