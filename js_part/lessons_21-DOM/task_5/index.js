export function setTitle(text) {
  text = document.querySelector('.title')
  // console.log(text);
  text.textContent = `I am a new Title`
  // console.log(text.textContent);
  return text;
}

setTitle()
