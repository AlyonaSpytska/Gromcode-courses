function setTitle(text) {
  text = document.querySelector('.title')
  // console.log(text);
  text.textContent = `I am title`
  // console.log(text.textContent);
  return text;
}

setTitle()
export {setTitle};