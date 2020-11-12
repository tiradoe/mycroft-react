import React from "react";
import Weather from "./widgets/Weather.js";

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
  return <Weather data={data} />;
}

export default MycroftMessageBus;
