const birthYears = [2004, 2000, 1990, 2010, 1985, 2020, 2021];
const currentYear = new Date().getFullYear();

const ages = birthYears.map(year => currentYear - year);
const adults = ages.filter(age => age >= 18);

console.log("Ani de naștere:", birthYears);
console.log("Vârste:", ages);
console.log("Vârste peste 18 ani:", adults);