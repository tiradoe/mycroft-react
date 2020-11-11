import React, { useState } from "react";
import "./App.css";
import ContentWindow from "./components/ContentWindow.js";
import MycroftMessageBus from "./components/MycroftMessageBus.js";

function App() {
  const [display, setDisplay] = useState(null);

  const updateDisplay = (data) => {
    setDisplay(data);
  };

  return (
    <div className="App">
      <ContentWindow display={display} />
      <MycroftMessageBus callback={updateDisplay} />
    </div>
  );
}

export default App;
