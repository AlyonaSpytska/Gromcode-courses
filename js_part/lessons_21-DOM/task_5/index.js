function setTitle(text) {
  // eslint-disable-next-line no-param-reassign
  text = document.querySelector('.title')
  // eslint-disable-next-line no-param-reassign
  text.textContent = `I am a title`;
  return text
}

setTitle()