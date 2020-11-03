import React, { useState, useEffect } from "react";
import "./Clock.css";

function Clock(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return clearInterval(timerId);
  }, []);

  let time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Remove the leading zero in Chrome
  if (time.substr(0, 1) === "0") {
    time = time.substr(1);
  }

  return (
    <div id="clock">
      <span>{time}</span>
    </div>
  );
}

export default Clock;
