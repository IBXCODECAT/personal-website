import { FC, ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className: string;
}

const SectionWrapper: FC<SectionProps> = ({children, className}) => {
    return (
        <section className={className + " min-h-screen"}>
            <div className="w-full h-screen flex items-center justify-center">
                {children}
            </div>
        </section>
    );
}

export default SectionWrapper;