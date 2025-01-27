// sis failas math.js yra skirtas laikyti funkcijoms,
// o kitas failas math.test.js yra skirtas testams skirtiems sioms funkcijoms!

// pirmine funkcija pries atrandant error:
// function addNumbers(a, b) {
//  return a + b;
// }

// pakoreguoju funkcija, kad priimtu stringus:
function addNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return 0;
  }
  return a + b;
}

function multiply(a, b) {
  // typeof visada grazina stringa:
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }
  return a * b;
}


// Pasakome kad sis failas yra modulis, ir mes ji galime exportuoti i kitus failus:
// jei tik viena funkcija eksportuojame:
// module.exports = addNumbers;

// jei kelias funkcijas eksportuojame:
module.exports = { addNumbers, multiply };

