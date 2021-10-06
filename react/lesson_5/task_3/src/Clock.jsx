import React, { Component } from "react";
import moment from 'moment'
import "./clock.scss";

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const formatOfTime = offset => moment(offset).format("LTS");
// console.log(formatOfTime(0));
const findTimeOffset = offset => formatOfTime(getTimeWithOffset(offset));



class Clock extends Component {
  constructor(props) {
    super(props);
    // в объекте храним данные, которые  нужно отрисовать
    this.state = {
      location: props.location,
      offset: findTimeOffset(this.props.offset),
    };

    // don't use this case!!
    setInterval(() => {
      // change state value:
      this.setState({
        // object:
        offset: findTimeOffset(this.props.offset),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.offset}</div>
      </div>
    );
  }
}

export default Clock;

