export function setButton (buttonText) {
  const findBody = document.querySelector('body');
  findBody.innerHTML = `<button> ${buttonText} </button>`;
}

// setButton('button text');