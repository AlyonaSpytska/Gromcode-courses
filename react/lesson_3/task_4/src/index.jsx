// moment().diff(moment(props.birthDate), "Years");
// const age = moment().diff('1981-01-01', 'years');
import React from "react";
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App'

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <App />, rootElem
);