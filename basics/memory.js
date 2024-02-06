// Stack and Heap memory 
//  stack -> Primitive Datatypes
// Heap -> Non-Primitive Datatypes 

let youTubeName = "Engineering Xpress";
let anotherName = youTubeName;
anotherName = "Vaibhav Chitransh"

console.log(youTubeName);
console.log(anotherName);

let userOne = {
    email: "userOne@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne;
userTwo.email = "userTwo@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);