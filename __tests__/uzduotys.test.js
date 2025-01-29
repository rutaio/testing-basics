// importuojame:
const {
  countLettersInText,
  pakelkKvadratu,
  koksPerimetras,
  biggestNumber,
  returnNull,
} = require('../src/uzduotys');

describe('Testuoju funkcijas is uzdaviniu', () => {
  test('Tikrinu kiek yra raidziu', () => {
    expect(countLettersInText('sveiki')).toBe(6);
    expect(countLettersInText('sveiki, kaip jus?')).toBe(17);
    expect(countLettersInText('')).toBe(0);
    expect(countLettersInText('   ')).toBe(3);
    // mes tikimes kad funkcija ismes teisinga klaida:
    expect(() => countLettersInText(1)).toThrow(
      'Neteisingas duomenu tipas! Reikia string tipo!'
    );
  });

  test('Tikrinu ar kelia kvadratu', () => {
    expect(pakelkKvadratu(3)).toBe(9);
    expect(pakelkKvadratu(0)).toBe(0);
    expect(() => pakelkKvadratu('abc')).toThrow(
      'Neteisingas duomenu tipas! Reikia number tipo'
    );
  });

  test('Tikrinu ar skaiciuoja perimetra', () => {
    expect(koksPerimetras(5)).toBe(20);
    expect(koksPerimetras(15)).toBe(60);
    expect(() => koksPerimetras(0)).toThrow(
      'Kvadrato krastine negali buti minusine!'
    );
    expect(() => koksPerimetras(-5)).toThrow(
      'Kvadrato krastine negali buti minusine!'
    );
    expect(() => koksPerimetras('absd')).toThrow(
      'Kvadrato krastine turi buti skaicius!'
    );
  });

  test('Tikrinu didziausia skaiciu is skaiciu masyvo', () => {
    expect(biggestNumber([1, 2, 3, 4, 5])).toBe(5);
    expect(biggestNumber([-1, -2, -3])).toBe(-1);
    expect(() => biggestNumber('')).toThrow('Masyvas negali buti tuscias!');
  });

  test('Tikrinu ar grazina Null', () => {
    expect(returnNull()).toBeNull();
    expect(returnNull(1)).toBeNull();
  });
});
