const myArr = [2,4,6,3, true, 'Vaibhav'];
console.log(myArr);

const myHeros = new Array('IronMan', 'Thor', 'Spiderman');
console.log(myHeros);

// Array Methods 

myArr.push('Chitransh');
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift('Great'); // Insert the value at the starting
console.log(myArr);

myArr.shift(); // Removes the first element from the array
console.log(myArr);

console.log(myArr.includes('Vaibhav'));
console.log(myArr.indexOf(4));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

const sliceArr = myArr.slice(2, 5);
console.log(sliceArr);

const spliceArr = myArr.splice(2, 5);
console.log(spliceArr);
console.log(myArr);

const marvel_heros = ['thor', 'spiderman', 'ironman'];
const dc_heros = ['batman', 'spiderman', 'flash'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const anotherArray = [0, 3, 4, [3, 6, 7], 2, 9, [2, 4, [5, 3]]];
const usableArray = anotherArray.flat(Infinity /* depth */);
console.log(usableArray);

console.log(Array.isArray('Vaibhav'));
console.log(Array.from('Vaibhav'));

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));