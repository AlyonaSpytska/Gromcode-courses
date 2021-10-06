import React, { Component } from "react";
import "./counter.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    // задать начальное состояние
    // в объекте храним данные, которые  нужно отрисовать
    this.state = {
      counter: props.start,
    };

    // don't use this case!!
    setInterval(() => {
      // change state value:
      this.setState({
        // object:
        counter: this.state.counter + 1,
      });
    }, props.interval);
  }

  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}

export default Counter;
