const MasterSkeleton = () => {
    return (
        <>
            {/* Header Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="w-72 h-8 bg-gray-300 rounded-md animate-pulse"></div>
            </div>

            {/* Masters List Header */}
            <div className="flex justify-between gap-3 align-center px-4 pb-2 pt-4">
                <div className="w-32 h-4 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-32 h-4 bg-gray-300 rounded-md animate-pulse"></div>
            </div>

            {/* Tabs Section */}
            <div className="px-4 flex justify-between mt-3">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {[...Array(5)].map((_, index) => (
                        <li key={index} className="me-2">
                            <div className="w-24 h-4 bg-gray-300 rounded-md animate-pulse"></div>
                        </li>
                    ))}
                </ul>
                <form className="max-w-md">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search By Name"
                            required=""
                        />
                    </div>
                </form>
            </div>

            {/* Table Section */}
            <div className="px-4 py-3 @container">
                <div className="flex overflow-hidden rounded-xl border border-[#DBE0E5] animate-pulse">
                    <table className="flex-1">
                        <thead>
                            <tr>
                                {[...Array(6)].map((_, index) => (
                                    <th key={index} className="px-4 py-3 text-left text-[#121417] w-[400px] text-sm font-medium leading-normal">
                                        <div className="w-32 h-4 bg-gray-300 rounded-md animate-pulse"></div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(5)].map((_, index) => (
                                <tr key={index} className="border-t border-t-[#DBE0E5]">
                                    {[...Array(6)].map((_, index) => (
                                        <td key={index} className="h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal">
                                            <div className="w-32 h-4 bg-gray-300 rounded-md animate-pulse"></div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MasterSkeleton;
