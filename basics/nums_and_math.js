const score = 500;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anotherNumber = 23.8967;
console.log(anotherNumber.toPrecision(3));

const hundreds = 10000000000;
console.log(hundreds.toLocaleString()) // In US System
console.log(hundreds.toLocaleString('en-IN')); // In Indian system

console.log(Math);

console.log(Math.abs(-5));
console.log(Math.round(4.4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

console.log(Math.min(2, 4, 1, 0, 5));
console.log(Math.max(2, 4, 1, 0, 5));

console.log(Math.random()); // Always value between 0 and 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)) + min);  // gives values between 10 and 20