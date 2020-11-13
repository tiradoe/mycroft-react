import React from "react";
import Weather from "./widgets/Weather.js";
import Browns from "./widgets/Browns.js";

function MycroftMessageBus(props) {
  const socket = new WebSocket("ws://localhost:8181/core");

  socket.onmessage = (event) => {
    let eventData = JSON.parse(event.data);

    if (
      eventData.type === "gui.value.set" ||
      eventData.type === "gui.event.send"
    ) {
      switch (eventData.data.__from) {
        case "mycroft-weather.mycroftai":
          props.callback(handleWeather(eventData.data));
          break;
        case "mycroft-personality-skill.tiradoe":
          props.callback(handlePersonalitySkill(eventData.data.params));
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

function handlePersonalitySkill(params) {
  if (params.intent === "darn_browns") {
    return <Browns gameResult={params.game_result} />;
  } else {
    return null;
  }
}

export default MycroftMessageBus;
