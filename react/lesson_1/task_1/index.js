
// js option
// const rootElem = document.querySelector('#root');
// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React';

// rootElem.append(greetingElem);

// react option
const rootElem = document.querySelector("#root");
const greetingElem = React.createElement (
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(greetingElem, rootElem);