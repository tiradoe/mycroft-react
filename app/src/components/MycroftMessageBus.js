import React from "react";

function MycroftMessageBus(props) {
  const socket = new WebSocket("ws://localhost:8181/core");

  socket.onmessage = (event) => {
    let eventData = JSON.parse(event.data);

    if (eventData.type === "gui.value.set") {
      console.log(eventData);
    }
  };

  return <div>Messages and stuff</div>;
}

export default MycroftMessageBus;
