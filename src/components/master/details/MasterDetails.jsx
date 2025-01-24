import { useMasterByIdQuery } from "../../../queries/masters/getMasterById";
import { useParams } from 'react-router-dom'
import MasterDetailsSkeleton from "./MasterDetailsSkeleton";

const MasterDetails = () => {

  const { id } = useParams();
  const { data, isLoading } = useMasterByIdQuery(id);
  
  console.log(data,'data');


  if(isLoading){
    return <MasterDetailsSkeleton/>
  }

  console.log('MasterDetails')

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
            <div className="flex items-center gap-4 text-[#111418]">
                <div className="size-4">
                <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_6_319)">
                    <path
                        d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                        fill="currentColor"
                    />
                    </g>
                    <defs>
                    <clipPath id="clip0_6_319">
                        <rect width={48} height={48} fill="white" />
                    </clipPath>
                    </defs>
                </svg>
                </div>
                <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                Acme Co
                </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                <a
                    className="text-[#111418] text-sm font-medium leading-normal"
                    href="#"
                >
                    Dashboard
                </a>
                <a
                    className="text-[#111418] text-sm font-medium leading-normal"
                    href="#"
                >
                    Profiles
                </a>
                <a
                    className="text-[#111418] text-sm font-medium leading-normal"
                    href="#"
                >
                    Revenue
                </a>
                <a
                    className="text-[#111418] text-sm font-medium leading-normal"
                    href="#"
                >
                    Audiences
                </a>
                <a
                    className="text-[#111418] text-sm font-medium leading-normal"
                    href="#"
                >
                    Attribution
                </a>
                <a
                    className="text-[#111418] text-sm font-medium leading-normal"
                    href="#"
                >
                    Events
                </a>
                </div>
                <div className="flex gap-2">
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <div
                    className="text-[#111418]"
                    data-icon="MagnifyingGlass"
                    data-size="20px"
                    data-weight="regular"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                    </div>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <div
                    className="text-[#111418]"
                    data-icon="Bell"
                    data-size="20px"
                    data-weight="regular"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
                    </svg>
                    </div>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <div
                    className="text-[#111418]"
                    data-icon="Gear"
                    data-size="20px"
                    data-weight="regular"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z" />
                    </svg>
                    </div>
                </button>
                </div>
                <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                    backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/a2cba0a1-23f7-4d7b-a071-1ca169a4ace5.png")',
                }}
                />
            </div>
            </header> */}
        <div className="justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
                  Master: Jane Williams
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  jane@acme.com
                </p>
              </div>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#dce0e5] px-4 gap-8">
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111418] text-[#111418] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-[#121417] text-sm font-bold leading-normal tracking-[0.015em]">
                    Overview
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-[#637588] text-sm font-medium leading-normal tracking-[0.015em]">
                    Events
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-[#637588] text-sm font-medium leading-normal tracking-[0.015em]">
                    Properties
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-[#637588] text-sm font-medium leading-normal tracking-[0.015em]">
                    Audience
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-[#637588] text-sm font-medium leading-normal tracking-[0.015em]">
                    Revenue
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-[#637588] text-sm font-medium leading-normal tracking-[0.015em]">
                    Attribution
                  </p>
                </a>
              </div>
            </div>
            <h3 className="text-[#111418] text-lg font-medium leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Edit Master
            </h3>
            <form action="#!">
              <div className="flex max-w-full flex-wrap gap-4 px-4 py-3">
                <label className="flex flex-col min-w-0 flex-1">
                  <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                    Name
                  </p>
                  <input
                    className="form-input w-full resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>

                <label className="flex flex-col min-w-0 flex-1">
                  <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                    Email
                  </p>
                  <input
                    className="form-input w-full resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
              </div>

              <div className="flex max-w-full flex-wrap gap-4 px-4 py-3">
                <label className="flex flex-col min-w-0 flex-1">
                  <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                    Password
                  </p>
                  <input
                    placeholder="••••••••••••••••"
                    className="form-input w-full resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>

                <label className="flex flex-col min-w-0 flex-1">
                  <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                    Passcode
                  </p>
                  <input
                    placeholder="••••••••••••••••"
                    className="form-input w-full resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
              </div>
              <div className="flex max-w-full flex-wrap gap-4 px-4 py-3">
                <label className="flex flex-col min-w-0 flex-1">
                  <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                    Share (%)
                  </p>
                  <input
                    className="form-input w-full resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
              </div>

              <div className="flex w-fit flex-wrap gap-4 px-4 py-3">
                <label className="flex flex-col min-w-0">
                  <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                    Blacklist
                  </p>
                  <input
                    type="checkbox"
                    defaultValue=""
                    className="sr-only peer"
                    defaultChecked=""
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
                </label>
              </div>

              <div className="flex px-4 py-3 justify-end">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Save</span>
                </button>
              </div>
            </form>
          </div>
          {/* <div className="layout-content-container flex flex-col">
                <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Revenue
                </h3>
                <div className="flex gap-3 p-3 flex-wrap pr-4">
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                    Last 30 days
                    </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                    Last 90 days
                    </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                    Last 180 days
                    </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                    Last 365 days
                    </p>
                </div>
                </div>
                <div className="flex flex-wrap gap-4 px-4 py-6">
                <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#dce0e5] p-6">
                    <p className="text-[#111418] text-base font-medium leading-normal">
                    $0.00 in the last 30 days
                    </p>
                    <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                    <svg
                        width="100%"
                        height={148}
                        viewBox="-3 0 478 150"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                        d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                        fill="url(#paint0_linear_1131_5935)"
                        />
                        <path
                        d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                        stroke="#637588"
                        strokeWidth={3}
                        strokeLinecap="round"
                        />
                        <defs>
                        <linearGradient
                            id="paint0_linear_1131_5935"
                            x1={236}
                            y1={1}
                            x2={236}
                            y2={149}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#f0f2f4" />
                            <stop offset={1} stopColor="#f0f2f4" stopOpacity={0} />
                        </linearGradient>
                        </defs>
                    </svg>
                    <div className="flex justify-around">
                        <p className="text-[#637588] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        Jan 1
                        </p>
                        <p className="text-[#637588] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        Jan 8
                        </p>
                        <p className="text-[#637588] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        Jan 15
                        </p>
                        <p className="text-[#637588] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        Jan 22
                        </p>
                        <p className="text-[#637588] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        Jan 29
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Filters
                </h3>
                <div className="flex gap-3 p-3 flex-wrap pr-4">
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                    All Users
                    </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                    User ID
                    </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                    Email
                    </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                    Phone
                    </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                    Country
                    </p>
                </div>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <input
                    placeholder="Filter by..."
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                    defaultValue=""
                    />
                </label>
                </div>
            </div> */}
        </div>
        {/* <footer className="flex justify-center">
            <div className="flex max-w-[960px] flex-1 flex-col">
                <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                    <a
                    className="text-[#637588] text-base font-normal leading-normal min-w-40"
                    href="#"
                    >
                    Docs
                    </a>
                    <a
                    className="text-[#637588] text-base font-normal leading-normal min-w-40"
                    href="#"
                    >
                    API Reference
                    </a>
                    <a
                    className="text-[#637588] text-base font-normal leading-normal min-w-40"
                    href="#"
                    >
                    Status
                    </a>
                    <a
                    className="text-[#637588] text-base font-normal leading-normal min-w-40"
                    href="#"
                    >
                    Contact Us
                    </a>
                    <a
                    className="text-[#637588] text-base font-normal leading-normal min-w-40"
                    href="#"
                    >
                    Privacy
                    </a>
                    <a
                    className="text-[#637588] text-base font-normal leading-normal min-w-40"
                    href="#"
                    >
                    Terms
                    </a>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#">
                    <div
                        className="text-[#637588]"
                        data-icon="TwitterLogo"
                        data-size="24px"
                        data-weight="regular"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        >
                        <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                        </svg>
                    </div>
                    </a>
                    <a href="#">
                    <div
                        className="text-[#637588]"
                        data-icon="LinkedinLogo"
                        data-size="24px"
                        data-weight="regular"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        >
                        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                        </svg>
                    </div>
                    </a>
                    <a href="#">
                    <div
                        className="text-[#637588]"
                        data-icon="FacebookLogo"
                        data-size="24px"
                        data-weight="regular"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        >
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                        </svg>
                    </div>
                    </a>
                    <a href="#">
                    <div
                        className="text-[#637588]"
                        data-icon="InstagramLogo"
                        data-size="24px"
                        data-weight="regular"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        >
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                        </svg>
                    </div>
                    </a>
                </div>
                <p className="text-[#637588] text-base font-normal leading-normal">
                    @2022 Acme Co
                </p>
                </footer>
            </div>
            </footer> */}
      </div>
    </div>
  );
};

export default MasterDetails;
