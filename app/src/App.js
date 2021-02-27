import React, { useState } from "react";
import ContentWindow from "./components/ContentWindow.js";
import MycroftMessageBus from "./components/MycroftMessageBus.js";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(null);

  const updateDisplay = (data) => {
    setDisplay(data);

    // reset the display after 15 seconds
    setTimeout(() => {
      setDisplay(null);
    }, 15000);
  };

  return (
    <div className="App">
      <ContentWindow display={display} />
      <MycroftMessageBus callback={updateDisplay} />
    </div>
  );
}

export default App;
