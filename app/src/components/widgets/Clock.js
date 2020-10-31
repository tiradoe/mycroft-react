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
    const date = this.state.date;

    return (
      <div id="clock">
        <span>
          {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    );
  }
}

export default Clock;
