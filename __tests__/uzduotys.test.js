// importuojame:
const {
  countLettersInText,
  pakelkKvadratu,
  koksPerimetras,
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
    expect(koksPerimetras(3, 2)).toBe(6);
  });
});
