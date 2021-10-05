import ReactDOM from "react-dom";
import React from "react";
import Profile from "./Profile.jsx";
import "./index.scss";

const userData = {
  firstName: "James",
  lastName: "Bond",
  birthDate: "1991-01-17T11:11:11.819Z",
  birthPlace: "London",
};

ReactDOM.render(
  <Profile user={userData} />,
  document.getElementById("root")
);
