import ReactDOM from "react-dom";
import React from "react";

import Search from "./search.jsx";
import "./index.scss";
import "./search.scss";

const rootElem = document.querySelector("#root");

ReactDOM.render(<Search name="Tom" />, rootElem);
