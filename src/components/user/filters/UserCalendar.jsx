import PropTypes from "prop-types";
import Calendar from "../../common/calendar/Calendar";

const UserCalendar = ({ setRecieveDate }) => {
  return <Calendar setRecieveDate={setRecieveDate} />;
};

UserCalendar.propTypes = {
  setRecieveDate:PropTypes.func.isRequired
}

export default UserCalendar;