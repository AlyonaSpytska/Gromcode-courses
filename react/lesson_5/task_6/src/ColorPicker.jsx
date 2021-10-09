import React from "react";

const CORAL = "Coral";
const AQUA = "Aqua";
const BISQUE = "Bisque";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleText: '',
    };
  }

  onMouseHandler = color => {
    this.setState({
      titleText: color,
    });
  };

  outOfMouse = () => {
    this.setState({
      titleText: ''
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.titleText}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.onMouseHandler(CORAL)}
            onMouseLeave={this.outOfMouse}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.onMouseHandler(AQUA)}
            onMouseLeave={this.outOfMouse}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.onMouseHandler(BISQUE)}
            onMouseLeave={this.outOfMouse}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
