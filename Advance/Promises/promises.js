const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // Like Database calls, cryptography, network

    setTimeout(() => {
        console.log('Async task completed');
        resolve();
    }, 1000);
})

promiseOne.then(() => {
    console.log('Promise Consumed');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 2000);
}).then(() => {
    console.log('task 2 completed');
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            userName : "vaibhav",
            email : 'vaibhav@gmail.com'
        })
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({
                userName : 'vaibhav',
                password : '1234'
            })
        }
        else {
            reject('ERROR : Something went wrong');
        }
    }, 2000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.userName;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('The promise is either resolved or rejected');
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({
                username: 'Javascript',
                pwd: '12345678'
            })
        }
        else {
            reject('Error: JS went wrong');
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        const data =  await response.json();  // json me convert karane me bhi time lagta hai isliye ise bhi await karana padega
        console.log(data);
    } catch (error) {
        console.log('E:', error);
    }
}

getAllUsers();

// one example by .then() and .catch() method
fetch('https://api.github.com/users/vaibhav-chitransh')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})