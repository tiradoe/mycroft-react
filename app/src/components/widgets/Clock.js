import React from "react";
import "./Clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    let time = this.state.date.toLocaleTimeString([], {
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
}

export default Clock;
