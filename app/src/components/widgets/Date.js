import React, { useState, useEffect } from "react";
import "./Date.css";

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

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return clearInterval(timerId);
  }, []);

  const day = days[date.getDay()].toUpperCase();
  const month = months[date.getMonth()].toUpperCase();

  return (
    <div className="date">
      <span className="month"> {month}</span>
      <br />
      <span className="day-of-month"> {date.getDate()}</span>
      <br />
      <span className="day"> {day}</span>
    </div>
  );
}

export default DateWidget;
