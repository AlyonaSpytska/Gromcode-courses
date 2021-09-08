export function setTitle(text) {
  const getText = document.querySelector('.title')
  getText.textContent = text;
  return text
}

setTitle(`I am a title`)