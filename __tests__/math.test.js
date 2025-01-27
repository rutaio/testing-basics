// sitame faile apsirasome testus
// iskvieciame testa terminale irasydami npm run test

// cia isikeliame kokias funkcijas testuosime:
// jei tik viena funkcija importuojame:
// const addNumbers = require('../src/math');

// jei importuojame kelias funkcijas:
const { multiply, addNumbers } = require('../src/math');

// Describe - funkcija, kuri leidzia grupuoti testus:
// apsirasome scenarijus:
describe('Testuojame matematinius veiksmus', () => {
  // Test funkcija leidzia aprasyti pati testa:
  test('Testuojame ar du skaiciai sudeti teisingai', () => {
    // Expect funkcija, kuri leidzia padaryti patikrinimus, ar duotas rezultatas yra teisingas:
    // tikriname su toBe:
    expect(addNumbers(2, 2)).toBe(4);
    expect(addNumbers(1, 10)).toBe(11);
    expect(addNumbers(5, '')).toBe(0);
    expect(addNumbers(undefined, undefined)).toBe(0);
    expect(addNumbers(null, undefined)).toBe(0);
    expect(addNumbers(NaN, NaN)).toBe(0);
    expect(addNumbers(true, 19)).toBe(0);
    expect(addNumbers({}, 19)).toBe(0); // nes objektas nera skaicius
    expect(addNumbers([], 19)).toBe(0); // nes masyvas nera skaicius
  });

  // Unit testas:
  // Ne visoms funkcijoms reikes unit testu,
  // bet funkcijoms kurios priima argumentus
  test('Tikriname ar du skaiciai sudauginti teisingai', () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(2.5, 15)).toBe(37.5);
    expect(multiply(0, 100)).toBe(0);
    expect(multiply(null, 5)).toBe(0);
    expect(multiply(undefined, 5)).toBe(0); // nes undefined nera skaicius grazina failed
    expect(multiply([], {})).toBe(0);
  });

  // Integracinis testas:
  // Integracinis testas - testuoja kelias susijusias funkcijas vienu metu:
  // (individualios funkcijos jau yra istestuotos unit testing budu)
  test('Tikriname ar daugybos ir sudeties funkcijos veikia kartu teisingai', () => {
    expect(addNumbers(multiply(2, 2), multiply(2, 4))).toBe(12);
    expect(addNumbers(multiply(2, undefined), multiply(2, 4))).toBe(8);
  });
});

// ar visoms funkcijoms testuoti reikes apsirasyti visus scenarijus?
// priklauso nuo situacijos...
// kada reikia visu testu?
// jei duomenys ateina is API ar kitu funkciju...
