import React from "react";
import "./Browns.css";

function Browns(props) {
  let background_image;

  if (props.gameResult === "won") {
    background_image = require("../../assets/browns_logo.jpg");
  } else {
    background_image = require("../../assets/browns_i_wanna_die.jpg");
  }

  return (
    <div id="browns-status">
      <img id="browns-image" alt="game status" src={background_image} />
    </div>
  );
}

export default Browns;
