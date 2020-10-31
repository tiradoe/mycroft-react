import React from "react";

function DateWidget(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const day = days[today.getDay()].toUpperCase();
  const month = months[today.getMonth()].toUpperCase();

  return (
    <div className="date">
      <span className="month"> {month}</span>
      <br />
      <span className="day-of-month"> {today.getDate()}</span>
      <br />
      <span className="day"> {day}</span>
    </div>
  );
}

export default DateWidget;
