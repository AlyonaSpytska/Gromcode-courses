export function setTitle(text) {
  const textVar = document.querySelector('.title');
  textVar.textContent = text;
}

setTitle('some text');
