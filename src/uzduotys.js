// 1.Sukurkite funkciją, kuri skaičiuoja raidziu kiekį tekste.
function countLettersInText(text) {
  if (typeof text !== 'string') {
    throw new Error('Neteisingas duomenu tipas! Reikia string tipo!');
  }
  return text.length; // lenght veikia tik ant string ir array
}

// 2.Sukurkite funkciją, kuri grąžina skaičiaus kvadratą.
function pakelkKvadratu(number) {
  if (typeof number !== 'number') {
    throw new Error('Neteisingas duomenu tipas! Reikia number tipo');
  }
  return number * number;
}

// 3.Sukurkite funkciją, kuri apskaičiuoja kvadrato perimetrą.
function koksPerimetras(a, b) {
  return a * b;
}

// 4.Sukurkite funkciją, kuri kaip argumentą priimtų skaičių masyvą.
// Funkcijos esmė grąžinti didžiausią skaičių. Parašykite keletą testų patikrinimui ar jūsų funkcija veikia tinkamai.


// 5.Sukurkite funkciją, kuri jums visada grąžins null.
// Naudojantis .toBeNull() patikrinkite ar jūsų funkcija veikia tinkamai.

module.exports = { countLettersInText, pakelkKvadratu, koksPerimetras };
