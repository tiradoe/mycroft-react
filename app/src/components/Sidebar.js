import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css";

function Sidebar(props) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const today = new Date(); 
  const day = days[today.getDay()].toUpperCase()
  const month = months[today.getMonth()].toUpperCase()

  return (
      <div className="sidebar">
	  <div className="date">
	    <span className="month"> {month}</span><br/>
	    <span className="day-of-month"> {today.getDate()}</span><br/>
	    <span className="day"> {day}</span>
	  </div>
	  {/* <FontAwesomeIcon icon={ faCloudSunRain } /> */}
      </div>
  );
}

export default Sidebar;
