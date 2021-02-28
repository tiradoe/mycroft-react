import React from "react";
import "./Browns.css";
import browns_win from "../../assets/browns_logo.jpg";
import browns_lose from "../../assets/browns_i_wanna_die.jpg";
import steelers_lose from "../../assets/steelers-lose.gif";

function Browns(props) {
  let background_image;

  switch (props.gameResult) {
    case "won":
      background_image = browns_win;
      break;
    case "beat_steelers":
      background_image = steelers_lose;
      break;
    default:
      background_image = browns_lose;
  }

  return (
    <div id="browns-status">
      <img id="browns-image" alt="game status" src={background_image} />
    </div>
  );
}

export default Browns;
