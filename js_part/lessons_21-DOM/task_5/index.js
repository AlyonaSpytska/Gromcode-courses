function setTitle(text) {
  const getSomeText = document.querySelector('.title');
  // console.log(text);
  getSomeText.textContent = text;
  // console.log(text.textContent);
}

setTitle('give me a text');
export { setTitle };
