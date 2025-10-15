import { FC } from "react";

interface SplitProps {
    mainTitle?: string;
    mainSubtitle?: string;

    leftTitle?: string;
    rightTitle?: string;
    logoLeft?: string;
    logoRight?: string;

    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
}

const Split: FC<SplitProps> = ({ mainTitle, mainSubtitle, leftTitle, rightTitle, logoLeft, logoRight, leftContent, rightContent }) => {
    return (
        <div className="w-11/12 bg-white rounded-xl shadow-2xl overflow-hidden">
    
            {/* Title Card */}
            <div className="p-6 sm:p-8 bg-indigo-600 text-white">
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
                    {mainTitle || "Modern Two-Column Display"}
                </h1>
                <p className="text-indigo-200">
                    {mainSubtitle}
                </p>
            </div>

            <table className="border-collapse table-fixed bg-gray-50 z-10">
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
        </div>
    );
}

export default Split;