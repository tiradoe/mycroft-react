import React, { useState } from "react";
import "./App.css";
import ContentWindow from "./components/ContentWindow.js";
import MycroftMessageBus from "./components/MycroftMessageBus.js";

function App() {
  const [display, setDisplay] = useState(null);

  const updateDisplay = debounce((data) => {
    setDisplay(data);

    // reset the display after 15 seconds
    // setTimeout(() => setDisplay(null), 15000);
  }, 250);

  return (
    <div className="App">
      <ContentWindow display={display} />
      <MycroftMessageBus callback={updateDisplay} />
    </div>
  );
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default App;
