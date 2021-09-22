// Конструтор Promise
// имеет свои методы, обращатся к ним через точку

// .resolve(value) -> создает промис с fulfilled значением

// 1 option
// const resolvedPromise = new Promise(resolve => {
//   resolve(17)
// });

// 2 option
// const resolvedPromise = Promise.resolve(17)

// .reject method - отклоненный промис (использ. не часто)

// 1 option
// const rejectPromise = new Promise(resolve, reject => {
//   reject(new Error('error'))
// });

// 2 option
// не забывай отклонять промис с какой то ошибкой -> new Error
// const rejectPromise = Promise.reject(new Error('error'));

// =======================  в след методах как параметр передается массив промисов

// .all - ждет пока выполятся все промисы. падает, если упал хотя бы один. 1с и 10с
// возвращает промис. callback попадает массив из значение, которые зарезолвятся всеми промисами

// дай значение с задержкой, передаем value и delay
const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(4, 2000);
const asyncNum3 = getValueWithDelay(10, 3000);

const getSum = numbers => 
  numbers.reduce((acc, num) => acc + num, 0);

// eslint-disable-next-line arrow-body-style
const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers).then(numbers => {
    getSum(numbers);
  });
}

asyncSum(asyncNum1, asyncNum2, asyncNum3).then(result => console.log(result));
