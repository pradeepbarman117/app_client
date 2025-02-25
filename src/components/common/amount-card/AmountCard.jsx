import { IndianRupee, FileText, CheckCircle, XCircle, Clock } from "lucide-react";
import PropTypes from "prop-types";
import formatIndianNumber from "../../../utility/currencyFormator";

const AmountCard = ({ amountDetails }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col gap-3 rounded-xl p-6 bg-blue-100 hover:bg-blue-200 transition-colors">
        <div className="flex items-center justify-between">
          <p className="text-blue-800 text-base font-medium">Requested Amount</p>
          <FileText className="text-blue-500 w-6 h-6" />
        </div>
        <p className="text-blue-900 tracking-tight text-2xl font-bold flex items-center">
          <IndianRupee strokeWidth={2.5} className="w-5 h-5 mr-1" />
          {amountDetails?.total && formatIndianNumber(amountDetails.total)}
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-xl p-6 bg-green-100 hover:bg-green-200 transition-colors">
        <div className="flex items-center justify-between">
          <p className="text-green-800 text-base font-medium">Approved Amount</p>
          <CheckCircle className="text-green-500 w-6 h-6" />
        </div>
        <p className="text-green-900 tracking-tight text-2xl font-bold flex items-center">
          <IndianRupee strokeWidth={2.5} className="w-5 h-5 mr-1" />
          {amountDetails?.approved && formatIndianNumber(amountDetails.approved)}
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-xl p-6 bg-red-100 hover:bg-red-200 transition-colors">
        <div className="flex items-center justify-between">
          <p className="text-red-800 text-base font-medium">Rejected Amount</p>
          <XCircle className="text-red-500 w-6 h-6" />
        </div>
        <p className="text-red-900 tracking-tight text-2xl font-bold flex items-center">
          <IndianRupee strokeWidth={2.5} className="w-5 h-5 mr-1" />
          {amountDetails?.rejected && formatIndianNumber(amountDetails.rejected)}
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-xl p-6 bg-yellow-100 hover:bg-yellow-200 transition-colors">
        <div className="flex items-center justify-between">
          <p className="text-yellow-800 text-base font-medium">Pending Amount</p>
          <Clock className="text-yellow-500 w-6 h-6" />
        </div>
        <p className="text-yellow-900 tracking-tight text-2xl font-bold flex items-center">
          <IndianRupee strokeWidth={2.5} className="w-5 h-5 mr-1" />
          {amountDetails?.pending && formatIndianNumber(amountDetails.pending)}
        </p>
      </div>
    </div>
  );
};

AmountCard.propTypes = {
  amountDetails: PropTypes.object.isRequired,
};

export default AmountCard;
