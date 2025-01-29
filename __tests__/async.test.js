jest.setTimeout(10000);

const {
  returnTrue,
  returnReject,
  filterArray,
  returnObjectAfterTimeout,
} = require('../src/async');

describe('Async funkciju testai', () => {
  // Testuojame funkcija, kuri grazina Promise su reiksme TRUE
  test('Tikriname ar grazins true', async () => {
    const result = await returnTrue(); // laukia duomenu
    // (jei nelauktu, eitu i kita eiliute)
    expect(result).toBe(true);
  });

  test('Tikriname ar grazins error', async () => {
    expect(returnReject()).rejects.toThrow('Klaida');
  });

  // toContain
  test('Tikriname ar grazins skaiciu masyva kuriame yra skaicius 5', async () => {
    const result = await filterArray(); // laukia duomenu
    expect(result).toContain(5);
  });

  test('Tikriname timeout', async () => {
    // grazina tikslu laika:
    const startTime = Date.now();
    // paleido promise, kuris sukasi 5 sekundes:
   await returnObjectAfterTimeout({ name: 'Tomas', age: 25 });
    const endTime = Date.now();
    // kiek praejo laiko:
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeLessThanOrEqual(5000);
  });
});
