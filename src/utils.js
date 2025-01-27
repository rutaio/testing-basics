function isEven(number) {
  // ar skaicius yra lyginis:
  // jei lyginis, grazins true:
  return number % 2 === 0;
}

function averageArray(array) {
  // eis per kiekviena array skaiciu ir tikrins:
  return array.reduce((sum, num) => sum + num, 0) / array.length;
}

function cloneObject(obj) {
  return { ...obj };
}

module.exports = { isEven, averageArray, cloneObject };
