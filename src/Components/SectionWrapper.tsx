import { FC, ReactNode } from "react";

interface SectionProps {
    children?: ReactNode;
    className: string;
}

const SectionWrapper: FC<SectionProps> = ({children, className}) => {
    return (
        <div className={"min-h-screen " + className}>
            <section className="w-full h-screen flex items-center justify-center">
                {children}
            </section>
        </div>
    );
}

export default SectionWrapper;