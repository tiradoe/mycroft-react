import React from "react";
import VideoDisplay from "./VideoDisplay.js";
import Sidebar from "./Sidebar.js";
import "./ContentWindow.css";

function ContentWindow(props) {
  return (
    <div className="content-container">
      <VideoDisplay />
      <Sidebar />
    </div>
  );
}

export default ContentWindow;
