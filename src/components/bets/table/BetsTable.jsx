import {
  IndianRupee,
  Clock,
  Eye,
  CalendarDays,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { dateFormatorWithTime } from "../../../hooks/dateFormator";
import PropTypes from "prop-types";

const BetsTable = ({ filteredBets }) => {
  const getStatusDetails = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return {
          bgColor: "bg-amber-100",
          textColor: "text-amber-800",
          icon: <Clock className="w-4 h-4 mr-1.5" />,
        };
      case "won":
        return {
          bgColor: "bg-emerald-100",
          textColor: "text-emerald-800",
          icon: <CheckCircle className="w-4 h-4 mr-1.5" />,
        };
      case "lost":
        return {
          bgColor: "bg-rose-100",
          textColor: "text-rose-800",
          icon: <XCircle className="w-4 h-4 mr-1.5" />,
        };
      default:
        return {
          bgColor: "bg-gray-100",
          textColor: "text-gray-800",
          icon: <Clock className="w-4 h-4 mr-1.5" />,
        };
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 lg:p-6 transition-all duration-200 hover:shadow-md mt-4">
      <div className="overflow-hidden rounded-xl border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-[#F0F2F5]">
              <tr className="bg-gradient-to-r from-gray-50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Serial
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  #id
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Date
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Match
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Bet Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Payout
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredBets?.map((bet, index) => {
                const statusDetails = getStatusDetails(bet.status);
                return (
                  <tr
                    key={bet.id}
                    className="hover:bg-blue-50/30 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{bet.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {dateFormatorWithTime(bet.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {bet.match.homeTeam} vs {bet.match.awayTeam}
                      <div className="text-xs text-gray-500">
                        {bet.match.sport}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 capitalize">
                      {bet.betType}
                      <div className="text-xs text-gray-500">
                        Odds:{" "}
                        {bet.betType === "home"
                          ? bet.odd.homeTeamOdds
                          : bet.odd.awayTeamOdds}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm font-semibold text-gray-900">
                        <IndianRupee className="h-3.5 w-3.5 mr-1 text-gray-600" />
                        {new Intl.NumberFormat("en-IN").format(bet.amount)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm font-semibold text-gray-900">
                        <IndianRupee className="h-3.5 w-3.5 mr-1 text-gray-600" />
                        {new Intl.NumberFormat("en-IN").format(
                          bet.potentialPayout
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusDetails.bgColor} ${statusDetails.textColor}`}
                      >
                        {statusDetails.icon}
                        {bet.status.charAt(0).toUpperCase() +
                          bet.status.slice(1)}
                      </span>
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
              {(!filteredBets || filteredBets?.length === 0) && (
                <tr className="hover:bg-blue-50/30 transition-colors duration-150">
                  <td
                    colSpan="8"
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No Bets Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

BetsTable.propTypes = {
  filteredBets: PropTypes.array,
};

export default BetsTable;
