const Table = () => {
    return (
        <table className="w-11/12 border-collapse table-fixed bg-gray-50 z-10">
            <tbody>
                <tr className="align-top">

                    {/* Column 1: Left Content */}
                    <td className="p-6 sm:p-10 border-r-2 border-gray-100 w-1/2">
                        <div className="flex items-center text-indigo-500 mb-4">
                            <img src="https://placehold.co/8x8" alt="placeholder" className="mr-3"/>
                            <h2 className="text-2xl font-bold text-gray-800">Column 1</h2>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex items-start">
                                <span className="text-indigo-400 font-bold mr-2 mt-0.5">&bull;</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 font-bold mr-2 mt-0.5">&bull;</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 font-bold mr-2 mt-0.5">&bull;</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                        </ul>
                    </td>

                    {/* Column 2: Right Content */}
                    <td className="p-6 sm:p-10 w-1/2">
                        <div className="flex items-center text-green-500 mb-4">
                            <img src="https://placehold.co/8x8" alt="placeholder" className="mr-3"/>
                            <h2 className="text-2xl font-bold text-gray-800">Column 2</h2>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;