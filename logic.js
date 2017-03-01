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

const people = [
  'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul'
];

const data = ['car', 'truck', 'truck', 'car', 'bike', 'walk', 'van', 'bike'];

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

//Create a list of boulevards in Paris that contain 'de' anywhere in the name.
//Use https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const list = document.querySelector('.mw-category'); //we get the class name by inspecting the link to see which container encompasses the list
const links = Array.from(list.querySelectorAll('a')); //each boulevard is listed as a link, and convert from Node List to Array
const boulevards = links.map(link => link.textContent); //creates an array of boulevard names
const de = boulevards.filter(boulevard => boulevard.includes('de')); //filters to only those that contain 'de'

//Sort people alphabetically by last name
const alphabeticalOrder = people.sort();
// console.log(alphabeticalOrder); //worked!

//sum up the instances of each in data
const sum = data.reduce(function(counter, item) {
  if (!counter[item]) { //if counter does not exits, create it
    counter[item] = 0;
  }
  counter[item]++; //loop again increasing counter by one each time encountered
  return counter;
}, []); //return as an array or object
// console.log(sum); //worked!