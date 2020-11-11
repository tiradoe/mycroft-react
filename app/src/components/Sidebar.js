import React from "react";
import Clock from "./widgets/Clock.js";
import DateWidget from "./widgets/Date.js";
import "./Sidebar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <DateWidget />
      <Clock />
      {/* <FontAwesomeIcon icon={ faCloudSunRain } /> */}
    </div>
  );
}

export default Sidebar;
