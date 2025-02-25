import PropTypes from "prop-types";
import Calendar from "../../common/calendar/Calendar";

const MasterCalendar = ({ setRecieveDate }) => {
  return <Calendar setRecieveDate={setRecieveDate} />;
};

MasterCalendar.propTypes = {
  setRecieveDate:PropTypes.func.isRequired
}

export default MasterCalendar;