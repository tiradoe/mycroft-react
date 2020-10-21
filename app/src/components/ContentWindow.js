import React from "react";
import "./ContentWindow.css";

function ContentWindow(props) {
  return (
    <div className="content-container">
      <div class="video-display">
        <iframe
          title="video-loop"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/XIhEPwTMjWk?controls=0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="sidebar">sidebar</div>
    </div>
  );
}

export default ContentWindow;
