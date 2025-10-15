import { FC } from "react";

interface HeaderProps {
    description?: string;
    title: string;
    className?: string;
}

const Header: FC<HeaderProps> = ({title, description, className}) => {

    return (
        <header className="text-center z-10 p-4">
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent ${className}`}>
                {title}
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
        </header>
    );
}

export default Header;