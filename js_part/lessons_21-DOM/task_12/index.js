export const squareNumbers = () => {
  // eslint-disable-next-line array-callback-return
  const element = Array.from(document.querySelectorAll('.number')).map(li => li.dataset.squaredNumber = li.dataset.number ** 2); 
};

squareNumbers();