import React from "react";
import "./ContentWindow.css";

function ContentWindow(props) {
  return (
    <div className="content-container">
      <div className="video-display">
        <video playsinline autoplay="autoplay" muted loop>
          <source src="https://i.imgur.com/y4oYIiW.mp4" type="video/mp4" />
	</video>
      </div>
      <div className="sidebar">sidebar</div>
    </div>
  );
}

export default ContentWindow;
