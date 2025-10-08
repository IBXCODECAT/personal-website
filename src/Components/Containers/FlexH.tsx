import { FC, ReactNode } from "react";

interface FlexHProps {
    children: ReactNode;
    className?: string;
}

const FlexH: FC<FlexHProps> = ({children, className}) => {
    return <div className={"flex flex-row z-10 " + className}>{children}</div>;
}

export default FlexH;