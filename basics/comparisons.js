console.log("2" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* equality check and comparison operations work differently in JS comparisons convert null to a number while comparisons will not convert therfore the answer in 5th line is true and false for line 4 */

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);

console.log("2" == 2);
// strict equal to (===)
console.log("2" === 2);