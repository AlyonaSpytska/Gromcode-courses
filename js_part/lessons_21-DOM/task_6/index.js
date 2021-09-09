export const setButton = buttonText => {
  const findBody = document.body.innerHTML;
  findBody.innerHTML = `<button> ${buttonText} </button>`;
}



