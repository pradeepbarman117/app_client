import {
  Users,
  UserRoundCheck,
  UserRoundX,
  Wifi,
} from "lucide-react";
import PropTypes from "prop-types";
import formatIndianNumber from '../../../utility/currencyFormator'

const UserCardDetails = ({ userDetails }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
      <div className="flex flex-col gap-3 rounded-xl p-6 bg-blue-100 hover:bg-blue-200 transition-colors">
        <div className="flex items-center justify-between">
          <p className="text-blue-800 text-base font-medium">Total Users</p>
          <Users className="text-blue-500 w-6 h-6" />
        </div>
        <p className="text-blue-900 tracking-tight text-2xl font-bold flex items-center">
          {formatIndianNumber(userDetails?.total || 20000)}
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-xl p-6 bg-green-100 hover:bg-green-200 transition-colors">
        <div className="flex items-center justify-between">
          <p className="text-green-800 text-base font-medium">Active Users</p>
          <UserRoundCheck className="text-green-500 w-6 h-6" />
        </div>
        <p className="text-green-900 tracking-tight text-2xl font-bold flex items-center">
          {formatIndianNumber(userDetails?.approved || 17000)}
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-xl p-6 bg-red-100 hover:bg-red-200 transition-colors">
        <div className="flex items-center justify-between">
          <p className="text-red-800 text-base font-medium">Blocked Users</p>
          <UserRoundX className="text-red-500 w-6 h-6" />
        </div>
        <p className="text-red-900 tracking-tight text-2xl font-bold flex items-center">
          {formatIndianNumber(userDetails?.rejected || 3000)}
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-xl p-6 bg-purple-100 hover:bg-purple-200 transition-colors">
        <div className="flex items-center justify-between">
          <p className="text-purple-800 text-base font-medium">Online User</p>
          <Wifi className="text-purple-800 w-6 h-6 animate-pulse"  />
        </div>
        <p className="text-purple-500 tracking-tight text-2xl font-bold flex items-center">
          {/* <IndianRupee strokeWidth={2.5} className="w-5 h-5 mr-1" /> */}
          {formatIndianNumber(userDetails?.online || 6540 )}
        </p>
      </div>
    </div>
  );
};

UserCardDetails.propTypes = {
  userDetails: PropTypes.object.isRequired,
};

export default UserCardDetails;
