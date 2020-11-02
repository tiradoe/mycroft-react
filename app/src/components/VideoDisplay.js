import React from "react";
import "./VideoDisplay.css";

function VideoDisplay(props) {
  return (
    <div className="video-display">
      <video playsInline autoPlay muted loop>
        <source src="https://i.imgur.com/y4oYIiW.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoDisplay;
