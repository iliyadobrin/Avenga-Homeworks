const zodiacAnimals = [
  'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',
  'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'
];

function calculateChineseZodiac(year) {
  // dali e validen vnesot
  if (isNaN(year) || year < 1) {
    return 'Invalid year. Please enter a positive number.';
  }
  
  // formula za da se presmeta znakot na kineskiot horoskop
  const index = (year - 4) % 12;
  
  // vrakjanje na rezultatot
  return zodiacAnimals[index];
}

// input od korisnikot
const year = prompt('Enter a year to find its Chinese Zodiac:');

// prikazuvanje na rezultat
const zodiac = calculateChineseZodiac(parseInt(year));
alert(`Year ${year} is the year of the ${zodiac}`);