import { FC } from "react";

interface SplitProps {
    leftTitle?: string;
    rightTitle?: string;
    logoLeft?: string;
    logoRight?: string;

    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
}

const Split: FC<SplitProps> = ({ leftTitle, rightTitle, logoLeft, logoRight, leftContent, rightContent }) => {
    return (
        <table className="w-11/12 border-collapse table-fixed bg-gray-50 z-10">
            <tbody>
                <tr className="align-top">

                    {/* Column 1: Left Content */}
                    <td className="p-6 sm:p-10 border-r-2 border-gray-100 w-1/2">
                        <div className="flex items-center mb-4">
                            <img src={logoLeft || "https://placehold.co/32x32"} alt="placeholder" draggable="false" className="mr-3"/>
                            <h2 className="text-2xl font-bold text-gray-800">{leftTitle || "Column 1"}</h2>
                        </div>

                        {/* Example content, replace with leftContent prop if provided */}
                        {leftContent}
                    </td>

                    {/* Column 2: Right Content */}
                    <td className="p-6 sm:p-10 w-1/2">
                        <div className="flex items-center mb-4">
                            <img src={logoRight || "https://placehold.co/32x32"} alt="placeholder" draggable="false" className="mr-3"/>
                            <h2 className="text-2xl font-bold text-gray-800">{rightTitle || "Column 2"}</h2>
                        </div>

                        {/* Example content, replace with rightContent prop if provided */}
                        {rightContent}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Split;