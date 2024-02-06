// Singleton 
// Object.create(); 

// Object literals
const mySym = Symbol('key1');

const jsUser = {
    name: 'Vaibhav',
    'full name': 'Vaibhav Chitransh',
    age: 20,
    [mySym]: 'myKey1',
    location: 'Jaipur',
    email: 'vaibhavchitransh@gmail.com',
    isLoggedIn: false,
    lastLoggedIn: ['Tuesday', 'Friday']
}

console.log(jsUser.email);
console.log(jsUser['name']);  // Good way to access
console.log(jsUser[mySym]);

jsUser.email = 'beetelRebel@gmail.com';
console.log(jsUser);
// Object.freeze(jsUser); // After this no changes can be made in the object
// jsUser.age = 22;
// console.log(jsUser);

jsUser.greeting = function() {
    console.log('Hello JS User');
}

jsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

const tinderUser = new Object();

tinderUser.name = "Sam";
tinderUser.id = '123abc';
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: 'vaibhavchitransh@gmail.com',
    fullName: {
        userFullName: {
            firstName: 'Vaibhav',
            lastName: 'Chitransh'
        }
    }
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);