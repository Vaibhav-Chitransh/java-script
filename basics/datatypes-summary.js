// Primitive datatypes

/* String, Number, Boolean, null, undefined, Symbol, BigInt */

const score = 100;
const scoreValue = 100.3;
let isLoggedIn = false;
let outsideTemp = null;
let userEmail;

const id = Symbol('1836');
const anotherId = Symbol('1836');

console.log(id === anotherId);

const bigNumber = 1284673947399n;
console.log(typeof bigNumber);

// Reference (Non-Primitive)

/* Arrays, Objects, Functions */

const heroes = ['Ironman', 'batman', 'thor', 'spiderman'];
console.log(heroes);


let myObj = {
    name: "Vaibhav",
    age: 20,
}

console.log(myObj);

const myFunction = function() {
    console.log('Hello World');
}

console.log(myFunction);