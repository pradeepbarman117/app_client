import PropTypes from "prop-types";
import Calendar from "../../common/calendar/Calendar";

const MasterUserCalendar = ({ setRecieveDate }) => {
  return <Calendar setRecieveDate={setRecieveDate} />;
};

MasterUserCalendar.propTypes = {
  setRecieveDate:PropTypes.func.isRequired
}

export default MasterUserCalendar;