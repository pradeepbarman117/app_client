import { NavLink } from "react-router-dom";
import dateFormator from "../../../hooks/dateFormator";
import PropTypes from "prop-types";
import Loader from "../../common/loader/Loader";

const MasterTable = ({ filteredMaster, newMaster, loader }) => {
  return (
    // <div className="flex rounded-xl border border-[#DBE0E5] mb-4 relative overflow-scroll">
    //   <div className="max-h-[600px]">
    //     <div className="max-h-[600px] w-[100%] overflow-scroll">
    //       <table className="">
    //         <thead className="bg-gray-50 sticky top-0">
    //           <tr>
    //             <th className="px-4 py-3 text-left text-[#121417] w-[150px] text-sm font-medium leading-normal">
    //               Date
    //             </th>
    //             <th className="px-4 py-3 text-left text-[#121417] w-[150px] text-sm font-medium leading-normal">
    //               Id
    //             </th>
    //             <th className="px-4 py-3 text-left text-[#121417] w-[150px] text-sm font-medium leading-normal">
    //               User Id
    //             </th>
    //             <th className="px-4 py-3 text-[#121417] w-[150] text-sm font-medium leading-normal text-left">
    //               Name
    //             </th>
    //             <th className="px-4 py-3 text-[#121417] w-[150px] text-sm font-medium leading-normal text-center">
    //               Share (%)
    //             </th>
    //             <th className="px-4 py-3 text-[#121417] w-[150px] text-sm font-medium leading-normal text-center">
    //               Creator
    //             </th>
    //             <th className="px-4 py-3 text-[#121417] w-[150] text-sm font-medium leading-normal text-center">
    //               Action
    //             </th>
    //           </tr>
    //         </thead>
    // <tbody>
    //   {filteredMaster.map((items) => (
    //     <tr
    //       key={items.id}
    //       className={`border-t hover:bg-[#12141705] cursor-pointer border-t-[#DBE0E5] ${(newMaster?.id === items.id) && 'flash' } `}
    //     >
    //       <td className="h-[72px] px-4 py-2 w-60 text-[#61788A] text-sm font-normal leading-normal">
    //         {dateFormator(items.createdAt)}
    //       </td>
    //       <td className="h-[72px] px-4 py-2 w-60 text-[#121417] text-sm font-normal leading-normal">
    //         #{items.id}
    //       </td>
    //       <td className="h-[72px] px-4 py-2 w-60 text-[#121417] text-sm font-normal leading-normal">
    //         #{items.userId}
    //       </td>
    //       <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal capitalize text-[#61788A]">
    //         {items.name}
    //       </td>
    //       <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal text-center">
    //         {/* <div className="flex justify-center items-center p-2 bg-[#05c46b] rounded-md text-[white] font-medium"> */}
    //         {items.percent} %{/* </div> */}
    //       </td>
    //       <td className="h-[72px] px-4 py-2 w-60 text-[#61788A] text-sm font-normal leading-normal text-center capitalize">
    //         {items?.admin.name}
    //       </td>
    //       <td className="h-[72px] px-4 w-60 text-sm font-normal leading-normal">
    //         <NavLink
    //           to={`/masters/${items.id}/overview`}
    //           className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="size-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    //             />
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    //             />
    //           </svg>
    //           View
    //         </NavLink>
    //       </td>
    //     </tr>
    //   ))}
    //   {filteredMaster.length === 0 && (
    //   <tr>
    //     <td className="px-6 py-4">No Data Found</td>
    //   </tr>
    // )}
    // </tbody>
    //       </table>
    //     </div>
    //   </div>
    //   {loader && <Loader/>}
    // </div>
    <div className="flex overflow-scroll rounded-xl border border-[#DBE0E5] max-h-[600px]">
      <table className="w-full table-fixed">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            <th className="px-4 py-3 text-left text-[#121417] w-[150px] text-sm font-medium leading-normal">
              Date
            </th>
            <th className="px-4 py-3 text-left text-[#121417] w-[150px] text-sm font-medium leading-normal">
              Id
            </th>
            <th className="px-4 py-3 text-left text-[#121417] w-[150px] text-sm font-medium leading-normal">
              User Id
            </th>
            <th className="px-4 py-3 text-[#121417] w-[150px] text-sm font-medium leading-normal text-left">
              Name
            </th>
            <th className="px-4 py-3 text-[#121417] w-[150px] text-sm font-medium leading-normal text-center">
              Share (%)
            </th>
            <th className="px-4 py-3 text-[#121417] w-[150px] text-sm font-medium leading-normal text-center">
              Creator
            </th>
            <th className="px-4 py-3 text-[#121417] w-[150px] text-sm font-medium leading-normal text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredMaster.map((items) => (
            <tr
              key={items.id}
              className={`border-t hover:bg-[#12141705] cursor-pointer border-t-[#DBE0E5] ${
                newMaster?.id === items.id && "flash"
              } `}
            >
              <td className="h-[72px] px-4 py-2 w-60 text-[#61788A] text-sm font-normal leading-normal">
                {dateFormator(items.createdAt)}
              </td>
              <td className="h-[72px] px-4 py-2 w-60 text-[#121417] text-sm font-normal leading-normal">
                #{items.id}
              </td>
              <td className="h-[72px] px-4 py-2 w-60 text-[#121417] text-sm font-normal leading-normal">
                #{items.userId}
              </td>
              <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal capitalize text-[#61788A]">
                {items.name}
              </td>
              <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal text-center">
                {/* <div className="flex justify-center items-center p-2 bg-[#05c46b] rounded-md text-[white] font-medium"> */}
                {items.percent} %{/* </div> */}
              </td>
              <td className="h-[72px] px-4 py-2 w-60 text-[#61788A] text-sm font-normal leading-normal text-center capitalize">
                {items?.admin.name}
              </td>
              <td className="h-[72px] px-4 w-60 text-sm font-normal leading-normal">
                <NavLink
                  to={`/masters/${items.id}/overview`}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  View
                </NavLink>
              </td>
            </tr>
          ))}
          {filteredMaster.length === 0 && (
            <tr>
              <td className="px-6 py-4">No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

MasterTable.propTypes = {
  filteredMaster: PropTypes.array.isRequired,
  newMaster: PropTypes.object,
  loader: PropTypes.bool.isRequired,
};

export default MasterTable;
