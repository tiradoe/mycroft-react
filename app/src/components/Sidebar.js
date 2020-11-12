import React from "react";
import Clock from "./widgets/Clock.js";
import DateWidget from "./widgets/Date.js";
import "./Sidebar.css";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <DateWidget />
      <Clock />
    </div>
  );
}

export default Sidebar;
