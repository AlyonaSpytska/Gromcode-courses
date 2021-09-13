const itemsOfBtns = document.querySelectorAll('.btn').forEach(item => {
  item.addEventListener('click', event => {
    console.log(event.target.textContent);
  });
});
