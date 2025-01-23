
const HomeSkeleton = () => {
    return (
        <>
            <div className="flex flex-wrap justify-between gap-3 p-4">
                {/* Skeleton for Dashboard */}
                <div className="w-72 h-8 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
            <h3 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                {/* Skeleton for Quick Stats */}
                <div className="w-32 h-4 bg-gray-300 rounded-md animate-pulse"></div>
            </h3>
            <div className="flex flex-wrap gap-4 p-4">
                {/* Skeleton for Active Users */}
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F0F2F5] animate-pulse">
                    <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
                    <div className="w-16 h-6 bg-gray-300 rounded-md"></div>
                </div>

                {/* Skeleton for New Users */}
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F0F2F5] animate-pulse">
                    <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
                    <div className="w-16 h-6 bg-gray-300 rounded-md"></div>
                </div>

                {/* Skeleton for DAU */}
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F0F2F5] animate-pulse">
                    <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
                    <div className="w-16 h-6 bg-gray-300 rounded-md"></div>
                </div>

                {/* Skeleton for MAU */}
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F0F2F5] animate-pulse">
                    <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
                    <div className="w-16 h-6 bg-gray-300 rounded-md"></div>
                </div>
            </div>

            {/* Skeleton for Recent Transactions Header */}
            <div className="flex justify-between gap-3 align-center px-4 pb-2 pt-4">
                <div className="w-32 h-4 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-16 h-4 bg-gray-300 rounded-md animate-pulse"></div>
            </div>

            {/* Skeleton for Recent Transactions Table */}
            <div className="px-4 py-3 @container">
                <div className="flex overflow-hidden rounded-xl border border-[#DBE0E5] animate-pulse">
                    <table className="flex-1">
                        <thead>
                            <tr className="">
                                {/* Skeleton for table headers */}
                                <th className="px-4 py-3 text-left text-[#121417] w-[400px] text-sm font-medium leading-normal">
                                    <div className="w-32 h-4 bg-gray-300 rounded-md"></div>
                                </th>
                                <th className="px-4 py-3 text-left text-[#121417] w-[400px] text-sm font-medium leading-normal">
                                    <div className="w-32 h-4 bg-gray-300 rounded-md"></div>
                                </th>
                                <th className="px-4 py-3 text-[#121417] w-60 text-sm font-medium leading-normal text-center">
                                    <div className="w-16 h-4 bg-gray-300 rounded-md"></div>
                                </th>
                                <th className="px-4 py-3 text-[#121417] w-[400px] text-sm font-medium leading-normal text-center">
                                    <div className="w-32 h-4 bg-gray-300 rounded-md"></div>
                                </th>
                                <th className="px-4 py-3 text-[#121417] w-60 text-sm font-medium leading-normal text-center">
                                    <div className="w-16 h-4 bg-gray-300 rounded-md"></div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Skeleton for table rows */}
                            {[...Array(5)].map((_, index) => (
                                <tr key={index} className="border-t border-t-[#DBE0E5]">
                                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal">
                                        <div className="w-32 h-4 bg-gray-300 rounded-md"></div>
                                    </td>
                                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#121417] text-sm font-normal leading-normal">
                                        <div className="w-32 h-4 bg-gray-300 rounded-md"></div>
                                    </td>
                                    <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal text-center">
                                        <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
                                    </td>
                                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal text-center">
                                        <div className="w-32 h-4 bg-gray-300 rounded-md"></div>
                                    </td>
                                    <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                        <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default HomeSkeleton