import React from "react";
import "./Date.css";

class DateWidget extends React.Component {
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  months = [
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

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const today = new Date();
    const day = this.days[today.getDay()].toUpperCase();
    const month = this.months[today.getMonth()].toUpperCase();

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
}

export default DateWidget;
