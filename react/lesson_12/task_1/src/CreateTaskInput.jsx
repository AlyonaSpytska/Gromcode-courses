import React from "react";

class CreateTaskInput extends React.Component {
  state = {
    value: "",
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleTaksCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          className="create-task__input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="btn" onClick={this.handleTaksCreate}>
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;

// 1. взять текст из инпута
// 2. создать задачу с этим текстом
// 3. добавить сформированный объект(таску) в список
