import ReactDOM from "react-dom";
import React from "react";

import "./index.scss";
import Status from "./Status.jsx";

const rootElem = document.querySelector("#root");
ReactDOM.render(<Status isOnline={false} />, rootElem);
