// importuojame:
const {
  isEven,
  averageArray,
  cloneObject,
  pakelkKvadratu,
  koksPerimetras,
} = require('../src/utils');
const { maistoProduktai } = require('../src/products');

describe('Testing utils functions', () => {
  test('Tikriname ar skaicius yra lyginis', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
  });

  test('Tikriname ar vidurkis skaiciuojamas teisingai', () => {
    expect(averageArray([1, 2, 3, 4])).toBe(2.5);
    expect(averageArray([2, 4, 6, 8])).toBe(5);
  });

  test('Tikriname ar maisto produktuose yra mango', () => {
    expect(maistoProduktai).toContain('mango');
  });

  test('Tikriname ar sukurs objekto klona', () => {
    const originalObject = {
      name: 'Jonas',
      age: 25,
    };
    const clonedObject = cloneObject(originalObject);
    expect(clonedObject).toEqual(originalObject);
  });
});


