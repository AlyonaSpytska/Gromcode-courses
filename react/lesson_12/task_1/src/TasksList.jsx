import React from "react";
import Task from './Task';
import CreateTaskInput from "./CreateTaskInput";

class TasksList extends React.Component {
  state = {
    tasks: [
      { text: "Buy car", done: true, id: 1 },
      { text: "Buy shoes", done: false, id: 2 },
      { text: "Buy dress", done: true, id: 3 },
      { text: "Buy glasses", done: true, id: 4 },
      { text: "Buy food", done: false, id: 5 },
    ],
  };

  render() {
    return (
      <div className="todo-list">
        <CreateTaskInput />
        <ul className="list">
          {this.state.tasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
