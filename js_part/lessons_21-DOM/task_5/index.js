export function setTitle() {
  const text = document.querySelector('.title')
  text.textContent = `I am a title`;
  return text
}

setTitle()