{
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
console.log(c); // var has global scope

function one() {
    const username = 'vaibhav';

    function two() {
        const website = 'youtube';
        console.log(username);
    }
    // console.log(website);

    two();
}

one();

console.log(addtwo(5));

function addtwo(num) {
    return num + 2;
}

// console.log(addthree(5));  gives error 

const addthree = function(num) {
    return num + 3;
}