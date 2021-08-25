// const text = `message`;

// const myMessage = `
// The text is ${text.toUpperCase()},
// And something else
// `

// console.log(myMessage);
//1. берем текст и делим его на куски и закидываем их в массив
// 'abcvdfhgf, 4 ['abcv', "dfhg", "f"]
//2. склеить все остальные спец символы /n, что перенесет каждый элемент на новую строку

const splitText = (text, len) => {
  const strArr = [];
  let startPosition = 0;
  if (typeof text !== 'string') {
    return null;
  }
  //чтоб считывать каждый кусок =>
  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break; //когда длина чанк равняется 0, тогда надо остановать цикл
    }
    //каждый раз увеличивать строку после считывания =>
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  //склеить массив с разделителем
  return strArr.join('\n');
};

const splitText = (text, len) => {
  const strArr = [];
  let startPosition = 0;

  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArr.join('\n');
};

console.log(splitText('abcvdfhgfororoorororeoor', 10));


const sortContacts = contacts => {
  if(!Array.isArray(contacts)) {
    return null;
  }
  const result = contacts
  .sort((a, b) => {
    return b.name.localeCompare(a.name);
  })
  return result;
}