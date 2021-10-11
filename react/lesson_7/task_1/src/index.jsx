import ReactDOM from "react-dom";
import React from "react";

import "./index.scss";
import NumbersList from "./NumbersList";
const numbers = [1, 2, 3, 4, 5]



ReactDOM.render(
  <NumbersList numbers={numbers} />,
  document.querySelector("#root")
);
