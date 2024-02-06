const name = "Vaibhav";
let repoCount = 60;

// console.log(name + repoCount + " Value");  // Outdated syntax

// Modern syntax 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Contra-Beetel');
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(6, gameName.length);
console.log(newString);

const anotherString = gameName.slice(-2, gameName.length);
console.log(anotherString);

const myName = "     Vaibhav      Chitransh       ";
console.log(myName);
console.log(myName.trim());  // removes start and end spaces

const url = "https://vaibhav.com/vaibhav%20chitransh";
console.log(url.replace('%20','-'));
console.log(url.includes('vaibhav'));

console.log(gameName.split('-'));