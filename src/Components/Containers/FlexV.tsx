import { FC, ReactNode } from "react";

interface FlexVProps {
    children: ReactNode;
    className?: string;
}

const FlexV: FC<FlexVProps> = ({children, className}) => {
    return <div className={"flex flex-col " + className}>{children}</div>;
}

export default FlexV;