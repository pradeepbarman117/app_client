const TrData = () => {
  return (
    <tr className="animate-pulse">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="h-4 w-12 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-mono">
        <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-[200px] truncate">
        <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-4 w-16 bg-gray-300 rounded animate-pulse"></div>
      </td>
    </tr>
  );
};

const TransactionTableLoader = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {Array.from({ length: 10 }).map((_, index) => (
                <TrData key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionTableLoader;
