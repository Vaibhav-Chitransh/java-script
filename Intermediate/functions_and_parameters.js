function sayMyName() {
    console.log('Vaibhav Chitransh');
}

sayMyName();

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(2, 5);
addTwoNumbers(3, 'a');
addTwoNumbers(2, null);

const result = addTwoNumbers(3, 9);
console.log(`result: ${result}`);  // because function is not returning anything

function loginUserMessage(username) {
    return `${username} just logged in`;
}

console.log(loginUserMessage('Vaibhav'));
console.log(loginUserMessage());

function calculateCartPrice(...num) {
    return num;
}

console.log(calculateCartPrice(200, 300, 500));

const user = {
    username: 'Vaibhav',
    age: 20
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user);