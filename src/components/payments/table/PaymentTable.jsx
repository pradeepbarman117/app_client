import { IndianRupee } from "lucide-react";
import PropTypes from "prop-types";
import dateFormator from "../../../hooks/dateFormator";
import { useState } from "react";
import RequestAcceptModal from "../modal/RequestAcceptModal";

const PaymentTable = ({ fileredData }) => {
  const [isAcceptModal, setIsAcceptModal] = useState(false)
  const [requestData, setRequestData] = useState({
    status: "pending",
    requestId: null,
    comments: null,
  });

  const getButtonColor = (type) => {
    if (type === "approved") return "bg-green-200 text-green-800 capitalize"; // red for withdrawal
    if (type === "pending") return "bg-yellow-200 text-yellow-800 capitalize"; // blue for deposit
    if (type === "rejected") return "bg-red-200 text-red-800 capitalize"; // blue for deposit
    return "bg-gray-200"; // default color for other types
  };

  const getStatus = (type) => {
    if (type === "approved" || type === "rejected") return true;
  };

  return (
    <>
      <div className="flex overflow-scroll rounded-xl border border-[#DBE0E5] max-h-[600px]">
        <table className="w-full table-fixed">
          <thead className="sticky top-0 bg-[#F0F2F5]">
            <tr className="">
              <th className="px-4 py-3 text-left text-[#121417] text-sm w-[100px] font-medium leading-normal">
                Serial
              </th>
              <th className="px-4 py-3 text-left text-[#121417] text-sm w-[100px] font-medium leading-normal">
                #id
              </th>
              <th className="px-4 py-3 text-left text-[#121417] text-sm w-[200px] font-medium leading-normal">
                Date
              </th>
              <th className="px-4 py-3 text-left text-[#121417] text-sm w-[400px] font-medium leading-normal">
                Request Id
              </th>
              <th className="px-4 py-3  text-[#121417] text-sm w-[200px] font-medium leading-normal text-left">
                Requester Id
              </th>
              <th className="px-4 py-3  text-[#121417] text-sm w-[200px] font-medium leading-normal text-left">
                Amount
              </th>
              <th className="px-4 py-3  text-[#121417] text-sm w-[200px] font-medium leading-normal text-left">
                Status
              </th>
              {/* <th className="px-4 py-3  text-[#121417] text-sm w-[200px] font-medium leading-normal text-left">
                Comment
              </th> */}
              <th className="px-4 py-3  text-[#121417] text-sm w-[200px] font-medium leading-normal text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {fileredData?.map((items,index) => {
              return (
                <tr key={items.id} className="border-t border-t-[#DBE0E5]">
                  <td className="h-[72px] px-4 py-2 text-[#121417] text-sm font-normal leading-normal">
                    #{index + 1}
                  </td>
                  <td className="h-[72px] px-4 py-2 text-[#121417] text-sm font-normal leading-normal">
                    #{items.id}
                  </td>
                  <td className="h-[72px] px-4 py-2 text-[#61788A] text-sm font-normal leading-normal">
                    {dateFormator(items.createdAt)}
                  </td>
                  <td className="h-[72px] px-4 py-2 text-[#121417] text-sm font-normal leading-normal">
                    {items.requestId}
                  </td>
                  <td className="h-[72px] px-4 py-2 text-[#61788A] text-sm font-normal leading-normal">
                    {items?.masterList.userId}
                  </td>
                  <td className="h-[72px] px-4 py-2 text-[#121417] text-sm font-normal leading-normal">
                    <div className="flex items-center">
                      <IndianRupee className="size-3.5 mt-0.5" />
                      <span>{items.amount}</span>
                    </div>
                  </td>
                  <td className="h-[72px] px-4 py-2 text-[#61788A] text-sm font-normal leading-normal">
                    <span
                      className={`text-xs font-medium me-2 w-[70px] py-2 px-2 items-center justify-center flex rounded-md
                        ${getButtonColor(items.status)}
                      `}
                    >
                      {items.status}
                    </span>
                  </td>
                  {/* <td className="h-[72px] px-4 py-2 text-[#121417] text-sm font-normal leading-normal">
                    Waiting...
                  </td> */}
                  <td className="h-[72px] px-4 py-2 text-[#121417] text-sm font-normal leading-normal">
                    {getStatus(items.status) ? (
                      <span
                        className={`text-xs font-medium me-2 w-[70px] py-2 px-2 items-center justify-center flex rounded-md
                        bg-blue-100 text-blue-800 cursor-pointer
                      `}
                      >
                        Change
                      </span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            setIsAcceptModal(true);
                            setRequestData({
                              ...requestData,
                              requestId: items.id,
                            });
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 text-indigo-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            setIsAcceptModal(true);
                            setRequestData({
                              ...requestData,
                              requestId: items.id,
                            });
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 text-indigo-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
            {fileredData?.length === 0 && (
              <tr className="border-t border-t-[#DBE0E5]">
                <td className="h-[72px] px-4 py-2 text-[#61788A] text-sm font-normal leading-normal">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isAcceptModal && (
        <RequestAcceptModal
          close={setIsAcceptModal}
          status={setRequestData}
          requestId={requestData.requestId}
        />
      )}
    </>
  );
};

PaymentTable.propTypes = {
  fileredData: PropTypes.array,
};

export default PaymentTable;
