import { useEffect, useState } from "react";
import HomeSkeleton from "./HomeSkeleton";

const Home = () => {

    const [loading, setLoading] = useState(true);
    // Simulate data fetching (e.g., API call)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // After 2 seconds, stop loading
        }, 300);

        return () => clearTimeout(timer); // Clean up timer
    }, []);

    if(loading){
        return <HomeSkeleton/>
    }

    return (
        <>
            {/* <div className="layout-content-container flex flex-col flex-1"> */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#121417] tracking-light text-[32px] font-bold leading-tight min-w-72">
                    Dashboard
                </p>
            </div>
            <h3 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Quick Stats
            </h3>
            <div className="flex flex-wrap gap-4 p-4">
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F0F2F5]">
                    <p className="text-[#121417] text-base font-medium leading-normal">
                        Active Users
                    </p>
                    <p className="text-[#121417] tracking-light text-2xl font-bold leading-tight">
                        2.3k
                    </p>
                </div>
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F0F2F5]">
                    <p className="text-[#121417] text-base font-medium leading-normal">
                        New Users
                    </p>
                    <p className="text-[#121417] tracking-light text-2xl font-bold leading-tight">
                        1.5k
                    </p>
                </div>
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F0F2F5]">
                    <p className="text-[#121417] text-base font-medium leading-normal">
                        DAU
                    </p>
                    <p className="text-[#121417] tracking-light text-2xl font-bold leading-tight">
                        1.8k
                    </p>
                </div>
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F0F2F5]">
                    <p className="text-[#121417] text-base font-medium leading-normal">
                        MAU
                    </p>
                    <p className="text-[#121417] tracking-light text-2xl font-bold leading-tight">
                        5.2k
                    </p>
                </div>
            </div>
            <div className="flex justify-between gap-3 align-center px-4 pb-2 pt-4">
                <h3 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em]">
                    Recent Transactions
                </h3>
                <span>View All</span>
            </div>
            <div className="px-4 py-3 @container">
                <div className="flex overflow-hidden rounded-xl border border-[#DBE0E5]">
                    <table className="flex-1">
                        <thead>
                            <tr className="">
                                <th className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-120 px-4 py-3 text-left text-[#121417] w-[400px] text-sm font-medium leading-normal">
                                    Date
                                </th>
                                <th className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-240 px-4 py-3 text-left text-[#121417] w-[400px] text-sm font-medium leading-normal">
                                    User
                                </th>
                                <th className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-360 px-4 py-3  text-[#121417] w-60 text-sm font-medium leading-normal text-center">
                                    Type
                                </th>
                                <th className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-480 px-4 py-3  text-[#121417] w-[400px] text-sm font-medium leading-normal text-center">
                                    Amount
                                </th>
                                <th className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-600 px-4 py-3  text-[#121417] w-60 text-sm font-medium leading-normal text-center">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-t-[#DBE0E5]">
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-120 h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal">
                                    Feb 14, 2023
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-240 h-[72px] px-4 py-2 w-[400px] text-[#121417] text-sm font-normal leading-normal">
                                    user #1234
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full">
                                        <span className="truncate">purchase</span>
                                    </button>
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-480 h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal text-center">
                                    $19.99
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full">
                                        <span className="truncate">success</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t border-t-[#DBE0E5]">
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-120 h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal">
                                    Feb 14, 2023
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-240 h-[72px] px-4 py-2 w-[400px] text-[#121417] text-sm font-normal leading-normal">
                                    user #4321
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full">
                                        <span className="truncate">withdrawal</span>
                                    </button>
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-480 h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal text-center">
                                    $50.00
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full">
                                        <span className="truncate">pending</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t border-t-[#DBE0E5]">
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-120 h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal">
                                    Feb 14, 2023
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-240 h-[72px] px-4 py-2 w-[400px] text-[#121417] text-sm font-normal leading-normal">
                                    user #5678
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full">
                                        <span className="truncate">deposit</span>
                                    </button>
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-480 h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal text-center">
                                    $100.00
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full">
                                        <span className="truncate">success</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t border-t-[#DBE0E5]">
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-120 h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal">
                                    Feb 14, 2023
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-240 h-[72px] px-4 py-2 w-[400px] text-[#121417] text-sm font-normal leading-normal">
                                    user #8765
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full">
                                        <span className="truncate">purchase</span>
                                    </button>
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-480 h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal text-center">
                                    $9.99
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full">
                                        <span className="truncate">pending</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t border-t-[#DBE0E5]">
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-120 h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal">
                                    Feb 14, 2023
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-240 h-[72px] px-4 py-2 w-[400px] text-[#121417] text-sm font-normal leading-normal">
                                    user #9876
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full">
                                        <span className="truncate">withdrawal</span>
                                    </button>
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-480 h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal text-center">
                                    $25.00
                                </td>
                                <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full">
                                        <span className="truncate">success</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n                          @container(max-width:120px){.table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-120{display: none;}}\n                @container(max-width:240px){.table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-240{display: none;}}\n                @container(max-width:360px){.table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-360{display: none;}}\n                @container(max-width:480px){.table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-480{display: none;}}\n                @container(max-width:600px){.table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-600{display: none;}}\n              "
                    }}
                />
            </div>
            {/* </div> */}

            
        </>
    )
}

export default Home