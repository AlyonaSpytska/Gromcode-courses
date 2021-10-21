import React from 'react';
import className from 'classnames'
import classNames from 'classnames';

const Task = ({done, text}) => {
  return (
    <li className={classNames("list-item", { "list-item_done": done })}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={done}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn"></button>
    </li>
  );
};

export default Task