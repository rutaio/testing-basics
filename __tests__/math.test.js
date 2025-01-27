const addNumbers = require('../src/math');

describe('Testuojame matematinius veiksmus', () => {
  // iskviesk testa:
  test('Testuojame kad 2+2 bus 4', () => {
    // kai iskviesi sia funkcija.. ir idesi kaip argumentus 2 ir 2, turi grazinti 4:
    expect(addNumbers(2, 2)).toBe(4);
  });
  test('Testuojame kad 1+1 bus 2', () => {
    // kai iskviesi sia funkcija.. ir idesi kaip argumentus 1 ir 1, turi grazinti 2:
    expect(addNumbers(1, 1)).toBe(2);
  });
  test('Testuojame kad 5+5 bus 10', () => {
    // kai iskviesi sia funkcija.. ir idesi kaip argumentus 5 ir 5, turi grazinti 10:
    expect(addNumbers(5, 5)).toBe(10);
  });
});
