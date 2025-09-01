import { FC, ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className: string;
}

const SectionWrapper: FC<SectionProps> = ({children, className}) => {
    return (
        <section className={"h-48 p-8 " + className}>
            {children}
        </section>
    );
}

export default SectionWrapper;