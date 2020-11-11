import React from "react";

function MycroftMessageBus(props) {
  const socket = new WebSocket("ws://localhost:8181/core");

  socket.onmessage = (event) => {
    let eventData = JSON.parse(event.data);

    if (eventData.type === "gui.value.set") {
      switch (eventData.data.__from) {
        case "mycroft-weather.mycroftai":
          props.callback(handleWeather(eventData.data));
          break;
        default:
          break;
      }
    }
  };
  return null;
}

function handleWeather(data) {
  return (
    <React.Fragment>
      <span> {data.location}</span>
      <span> Current Temperature {data.current} </span>
      <span> Today's Min: {data.min} </span>
      <span> Today's Max: {data.max} </span>
    </React.Fragment>
  );
}

export default MycroftMessageBus;
