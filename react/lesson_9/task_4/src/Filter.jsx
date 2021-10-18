import React from "react";

const Filter = ({ sum, onNameChange, filtration }) => (
  <div className="filter">
    <span className="filter__count">{sum}</span>
    <input
      type="text"
      className="filter__input"
      onChange={onNameChange}
      value={filtration}
    />
  </div>
);

export default Filter;
