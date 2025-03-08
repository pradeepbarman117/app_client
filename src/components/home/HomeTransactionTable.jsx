import {
  IndianRupee,
  ArrowRight,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Calendar,
  Filter,
} from "lucide-react";
import { dateFormatorWithTime } from "../../hooks/dateFormator";
import { useTransactionListQuery } from "../../queries/finance/transaction/transactionQuery";
import { NavLink } from "react-router-dom";

const HomeTransactionTable = () => {
  const { data } = useTransactionListQuery();

  const getStatusDetails = (status) => {
    switch (status) {
      case "completed":
        return {
          bgColor: "bg-emerald-100",
          textColor: "text-emerald-800",
          icon: <CheckCircle className="w-4 h-4 mr-1.5" />,
        };
      case "failed":
        return {
          bgColor: "bg-rose-100",
          textColor: "text-rose-800",
          icon: <XCircle className="w-4 h-4 mr-1.5" />,
        };
      default:
        return {
          bgColor: "bg-amber-100",
          textColor: "text-amber-800",
          icon: <Clock className="w-4 h-4 mr-1.5" />,
        };
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-200 hover:shadow-md mt-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-slate-800 text-xl font-bold leading-tight">
          Recent Transactions
        </h3>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
          </button>
          <NavLink
            to="/transaction"
            className="hidden sm:flex items-center gap-1 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </NavLink>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Serial
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  #ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    Date & Time
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Comment
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data?.data.map((item, index) => {
                const statusDetails = getStatusDetails(item.status);
                return (
                  <tr
                    key={item.id}
                    className="hover:bg-blue-50/30 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      #{item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {dateFormatorWithTime(item.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-mono">
                      {item.transactionId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm font-semibold text-gray-900">
                        <IndianRupee className="h-3.5 w-3.5 mr-1 text-gray-600" />
                        {new Intl.NumberFormat("en-IN").format(item.amount)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusDetails.bgColor} ${statusDetails.textColor}`}
                      >
                        {statusDetails.icon}
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-[200px] truncate">
                      {item.comments || "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-xs font-medium hover:bg-blue-100 transition-colors">
                        <Eye className="h-3.5 w-3.5 mr-1" />
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile View All Link */}
      <div className="mt-6 sm:hidden">
        <NavLink
          to="/transaction"
          className="flex items-center justify-center gap-1 text-blue-600 font-medium text-sm py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
        >
          View All Transactions
          <ArrowRight className="h-4 w-4" />
        </NavLink>
      </div>
    </div>
  );
};

export default HomeTransactionTable;
