/**
 * Created by sophia on 2/28/17.
 */
const inventors = [
  {firstName: 'Albert', lastName: 'Einstein', year: 1879, passed: 1955},
  {firstName: 'Isaac', lastName: 'Newton', year: 1643, passed: 1727},
  {firstName: 'Galileo', lastName: 'Galilei', year: 1564, passed: 1642},
  {firstName: 'Marie', lastName: 'Curie', year: 1867, passed: 1934},
  {firstName: 'Johannes', lastName: 'Kepler', year: 1571, passed: 1630},
  {firstName: 'Nicolaus', lastName: 'Copernicus', year: 1473, passed: 1543},
  {firstName: 'Max', lastName: 'Planck', year: 1858, passed: 1947}
];

// const people = [
//   'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul'
// ];

//filter the inventors by those born in the 1500s
var fifteenHundredsBirth = inventors.filter(function(inventor) {
      return inventor.year >= 1500 && inventor.year < 1600;
});
// console.table(fifteenHundredsBirth); //worked!

//provide an array of the inventors first and last names
const arrayOfInventors = inventors.map(function(inventor) {
  return `${inventor.firstName} ${inventor.lastName}`
});
// console.log(arrayOfInventors); //worked!

//Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = inventors.sort(function(a, b) {
  return a.year - b.year;
});
// console.table(oldestToYoungest); //worked

//How many years did all of the inventors live
const totalYears = inventors.reduce(function(total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0);
// console.log(totalYears); //worked!

//Sort the inventors by years lived, greatest to least
const yearsLived = inventors.sort(function(a, b) {
  const aYearsLived = a.passed - a.year;
  const bYearsLived = b.passed - b.year;
  return bYearsLived - aYearsLived;
});
// console.log(yearsLived); //worked!

