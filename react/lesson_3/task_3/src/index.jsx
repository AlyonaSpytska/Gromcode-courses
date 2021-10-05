import ReactDOM from "react-dom";
import React from "react";
import "./styles.scss";
import Comment from './Comment'


const rootElem = document.querySelector("#root");

const userInfo = {
  name: "Sara",
  avatarUrl: "https://avatars.githubusercontent.com/u/84840548?v=4",
};

ReactDOM.render(<Comment 
  user={userInfo}
  text="Good job!"
  date={new Date('2019-01-01T11:32:19.566Z')}
   />,
  rootElem
);
