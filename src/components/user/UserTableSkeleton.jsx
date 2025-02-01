
const UserTableSkeleton = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white">
        <div className="w-32 h-8 bg-gray-300 animate-pulse rounded"></div>
        <div className="relative w-80 h-8 bg-gray-300 animate-pulse rounded"></div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b hover:bg-gray-50">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
            >
              <div className="w-32 h-4 bg-gray-300 animate-pulse rounded"></div>
            </th>
            <td className="px-6 py-4">
              <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-gray-300 me-2 animate-pulse"></div>
                <div className="w-16 h-4 bg-gray-300 animate-pulse rounded"></div>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
            </td>
            <td className="px-6 py-4">
              <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
            </td>
          </tr>
          {/* More skeleton rows can be added here */}
        </tbody>
      </table>
    </div>
  );
};

export default UserTableSkeleton;
