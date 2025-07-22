import { FC, ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
}

const Section: FC<SectionProps> = ({children}) => {
    return (
        <section className="relative min-h-screen text-white flex items-center justify-center font-sans overflow-hidden">
            {children}
        </section>
    );
}

export default Section;