import dateFormator from "../../hooks/dateFormator";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import UserTableSkeleton from "./UserTableSkeleton";

const UserTable = ({filteredData, isLoading, newUser}) => {

  if (isLoading) {
    return <UserTableSkeleton />;
  }

  return (
    <div className="relative">
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
                Balance
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
            {filteredData?.map((items) => {
              return (
                <tr
                  key={items.id}
                  className={`bg-white border-b hover:bg-gray-50  ${newUser?.id === items.id && "flash"}`}
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
                    <div className="flex items-center">₹{items.balance}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <NavLink to={`/masters/${items?.master?.id}/overview`} target="_blank" className={'underline text-blue-500'}>
                      {items?.master?.name}
                    </NavLink>
                  </td>
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
            {filteredData.length === 0 && (
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

UserTable.propTypes = {
  filteredData: PropTypes.array,
  isLoading: PropTypes.bool,
  newUser: PropTypes.object,
}

export default UserTable;
