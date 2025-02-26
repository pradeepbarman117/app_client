import { useState } from "react";
import { useParams } from "react-router-dom";
import UserTableSkeleton from "./UserTableSkeleton";
import { useUserByMasterId } from "../../../queries/user/getUser";
import dateFormator from "../../../hooks/dateFormator";
import MasterUserCalendar from "../../user/filters/UserCalendar";
import UserSearch from "../../user/filters/UserSearch";

const MasterUserTable = () => {
  const { id } = useParams();
  const { data, isLoading } = useUserByMasterId(id);
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState({
    start: "",
    end: "",
  });

  const filterUsers = data?.data.filter((items) => {
    if (!date.start || !date.end) {
      return items.userId.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const startDate = new Date(date.start);
    const endDate = new Date(date.end);

    data?.data.filter((items) => {
      const itemDate = new Date(items.createdAt);
      return itemDate >= startDate && itemDate <= endDate;
    });
  });

  if (isLoading) {
    return <UserTableSkeleton />;
  }

  return (
    <div className="relative">
      <div className="pe-4 flex justify-between my-4">
        <MasterUserCalendar setRecieveDate={setDate} />
        <UserSearch setSearchTerm={setSearchTerm}/> 
      </div>
      <div className="flex overflow-hidden rounded-xl border border-[#DBE0E5] relative ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                #Id
              </th>
              <th scope="col" className="px-6 py-3">
                User Id
              </th>
              <th scope="col" className="px-6 py-3">
                Coin
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Creator
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filterUsers?.map((items) => {
              return (
                <tr
                  key={items.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                  >
                    <div className="font-normal text-gray-500">
                      {dateFormator(items.createdAt)}
                    </div>
                  </th>
                  <td className="px-6 py-4">#{items.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">{items.userId}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">₹{items.coin}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">{items?.master?.name}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      type="button"
                      data-modal-target="editUserModal"
                      data-modal-show="editUserModal"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit user
                    </a>
                  </td>
                </tr>
              );
            })}
            {filterUsers.length === 0 && (
              <tr>
                <td className="px-6 py-4">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* {loader && <Loader />} */}
      </div>
    </div>
  );
};

export default MasterUserTable;
