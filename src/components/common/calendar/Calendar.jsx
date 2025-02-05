import { useState, useRef, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  isAfter,
  isBefore,
  subMonths,
  addMonths,
} from "date-fns";
import dateFormator from "../../../hooks/dateFormator";
import PropTypes from "prop-types";

const Calendar = ({ setRecieveDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState(currentDate);
  const [selectedEndDate, setSelectedEndDate] = useState(currentDate);
  const [isSelectingRange, setIsSelectingRange] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [inputValue, setInputValue] = useState(""); // State for the input field value

  const calendarRef = useRef(null); // Ref for the calendar
  const inputRef = useRef(null); // Ref for the input field

  const today = new Date();

  // Handle navigation to previous/next months
  const handlePrevMonth = () => {
    const oneYearAgo = subMonths(today, 12); // 1 year ago from today
    if (isAfter(currentDate, oneYearAgo)) {
      setCurrentDate(subMonths(currentDate, 1));
    }
  };

  const handleNextMonth = () => {
    const oneMonthAhead = addMonths(today, 1); // 1 month from today
    if (isBefore(currentDate, oneMonthAhead)) {
      setCurrentDate(addMonths(currentDate, 1));
    }
  };

  // Get the current month and set up the days grid
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const monthName = format(currentDate, "MMMM yyyy");

  // const handleSelectDate = (day) => {
  //   if (isAfter(day, today)) return; // Disable selection of dates after today

  //   if (isSelectingRange) {
  //     if (selectedStartDate && !selectedEndDate) {
  //       setSelectedEndDate(day);
  //       setInputValue(
  //         `${dateFormator(selectedStartDate)} - ${dateFormator(day)}`
  //       );
  //       setRecieveDate({
  //         start: dateFormator(selectedStartDate),
  //         end: dateFormator(day),
  //       });
  //     }
  //   } else {
  //     setSelectedStartDate(day);
  //     setSelectedEndDate(null); // Clear previous range
  //     setInputValue(dateFormator(day)); // Set the start date in the input
  //   }
  //   setIsSelectingRange(!isSelectingRange);
  // };

  const handleSelectDate = (day) => {
    if (isAfter(day, today)) return; // Disable selection of dates after today
  
    // If the user clicks on the same start date or end date, remove the selection
    if (isSameDay(day, selectedStartDate)) {
      setSelectedStartDate(null);
      setSelectedEndDate(null);
      setInputValue(""); // Clear the input value
      setRecieveDate({ start: '', end: '' }); // Clear the selected date range
    } else if (isSelectingRange) {
      if (selectedStartDate && !selectedEndDate) {
        setSelectedEndDate(day);
        setInputValue(
          `${dateFormator(selectedStartDate)} - ${dateFormator(day)}`
        );
        setRecieveDate({
          start: dateFormator(selectedStartDate),
          end: dateFormator(day),
        });
      }
    } else {
      setSelectedStartDate(day);
      setSelectedEndDate(null); // Clear previous range
      setInputValue(dateFormator(day)); // Set the start date in the input
    }
    setIsSelectingRange(!isSelectingRange);
  };

  const isInRange = (day) => {
    if (!selectedStartDate || !selectedEndDate) return false;
    return day >= selectedStartDate && day <= selectedEndDate;
  };

  const isDateSelected = (day) => {
    return (
      isSameDay(day, selectedStartDate) ||
      isSameDay(day, selectedEndDate) ||
      isInRange(day)
    );
  };

  // Toggle the calendar visibility
  const handleToggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };

  // Close the calendar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setCalendarVisible(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center">
      <div className="max-w-sm w-full relative">
        <div className="flex border rounded-lg items-center ps-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>

          {/* Input Field to Show Date Range */}
          <input
            ref={inputRef}
            type="text"
            readOnly
            value={inputValue}
            onClick={handleToggleCalendar}
            placeholder="Select Date Range"
            className="w-full p-3 cursor-pointer text-gray-800 placeholder:text-sm rounded-lg"
          />

          {inputValue && (
            <span className="pe-3 cursor-pointer" onClick={()=>{
              setInputValue("");
              setCalendarVisible(false);
              setSelectedStartDate(null);
              setSelectedEndDate(null);
              setRecieveDate({
                start: '',
                end: '',
              })
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </span>
          )}
        </div>

        {/* Calendar UI - Only visible when calendarVisible is true */}
        {calendarVisible && (
          <div
            ref={calendarRef}
            className="absolute mt-2 z-10 w-80 p-5 bg-white shadow-lg rounded-lg"
          >
            <div className="px-4 flex items-center justify-between">
              <span className="text-base font-bold text-gray-800">
                {monthName}
              </span>
              <div className="flex items-center">
                <button
                  aria-label="calendar backward"
                  className="focus:text-gray-400 hover:text-gray-400 text-gray-800"
                  onClick={handlePrevMonth}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                </button>
                <button
                  aria-label="calendar forward"
                  className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800"
                  onClick={handleNextMonth}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                      <th key={day}>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800">
                            {day}
                          </p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {days.map((day, index) => {
                    if (index % 7 === 0) {
                      return (
                        <tr key={day}>
                          {days.slice(index, index + 7).map((dayInRow) => (
                            <td
                              key={dayInRow}
                              className="pt-6"
                              onClick={() => handleSelectDate(dayInRow)}
                            >
                              <div
                                className={`px-2 py-2 cursor-pointer flex w-full justify-center ${
                                  isAfter(dayInRow, today)
                                    ? "text-gray-300 cursor-not-allowed"
                                    : isSameDay(dayInRow, today)
                                    ? "bg-blue-500 text-white rounded-full"
                                    : isDateSelected(dayInRow)
                                    ? "bg-green-400 text-white rounded-full"
                                    : ""
                                }`}
                                style={{
                                  pointerEvents: isAfter(dayInRow, today)
                                    ? "none"
                                    : "auto",
                                }}
                              >
                                <p className="text-base font-medium">
                                  {format(dayInRow, "d")}
                                </p>
                              </div>
                            </td>
                          ))}
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Calendar.propTypes = {
  setRecieveDate: PropTypes.func.isRequired,
};

export default Calendar;
