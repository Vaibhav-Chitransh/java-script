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

const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {
    3: 'c',
    4: 'd'
}

const obj3 = {obj1, obj2};
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

const obj5 = {...obj1, ...obj2};
console.log(obj5);

console.log(Object.keys(obj5));  // returns array of keys
console.log(Object.values(obj5)); // returns array of values
console.log(Object.entries(obj5)); // returns array of array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring 
const course = {
    courseName: 'Data Structures',
    coursePrice: 'Free',
    courseInstructor: 'Vaibhav Chitransh'
}

const {courseInstructor: instructor} = course;
console.log(instructor);

// Json 
{
    "name": "Vaibhav",
    "courseName": 'MERN Stack',
    "price": 'free'
}

[
    {},
    {},
    {}
]