// import { useEffect, useState } from "react";

const SidebarSkeletor = () => {
        return (
            <div className="layout-content-container flex flex-col w-80 pt-20">
                <div className="flex h-full min-h-[700px] flex-col justify-between p-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            {/* Skeleton for Dashboard */}
                            <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#F0F2F5] animate-pulse">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <p className="w-32 h-4 bg-gray-300 rounded-md"></p>
                            </div>

                            {/* Skeleton for Users */}
                            <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#F0F2F5] animate-pulse">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <p className="w-32 h-4 bg-gray-300 rounded-md"></p>
                            </div>

                            {/* Skeleton for Transactions */}
                            <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#F0F2F5] animate-pulse">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <p className="w-32 h-4 bg-gray-300 rounded-md"></p>
                            </div>

                            {/* Skeleton for Masters */}
                            <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#F0F2F5] animate-pulse">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <p className="w-32 h-4 bg-gray-300 rounded-md"></p>
                            </div>

                            {/* Skeleton for Settings */}
                            <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#F0F2F5] animate-pulse">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <p className="w-32 h-4 bg-gray-300 rounded-md"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    // }
}

export default SidebarSkeletor