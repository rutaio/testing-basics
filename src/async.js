async function returnTrue() {
  return true;
}

async function returnReject() {
  throw new Error('Klaida!');
}

async function filterArray() {
  return [1, 2, 3, 4, 5];
}

// Sukuriame funkcija kuri po 5 sekundziu turetu grazinti objekta
async function returnObjectAfterTimeout(object) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(object);
    }, 5000);
  });
}

module.exports = {
  returnTrue,
  returnReject,
  filterArray,
  returnObjectAfterTimeout,
};
