const user = {
    username: 'Vaibhav',
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = 'Chitransh';
user.welcomeMessage();

console.log(this);  // empty

function chai() {
    let username = 'vaibhav';
    console.log(this);
    console.log(this.username);
}

chai();

const helloFunction = (user) => {
    console.log(`Hello ${user}`)
}

helloFunction('Vaibhav');

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(2, 6));

// Implicit function for one liner
const addThree = (num1, num2, num3) => (num1 + num2 + num3);

console.log(addThree(2, 7, 1));

(function chai() {
    console.log('Immediately Invoked Function Expression');
})();

( (name) => {
    console.log(`Hello, ${name}`);
})('Vaibhav');