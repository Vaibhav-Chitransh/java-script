const url = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('#btn');


// By async await

// const getFacts = async () => {
//     console.log('getting data.......');
//     let response = await fetch(url);
//     console.log(response);  // JSON format
//     let data = await response.json();
//     const element = document.querySelector('.fact-box');
//     const num = Math.ceil(Math.random()*10 % 5) - 1;  // in api there are only 5 facts
//     // console.log(num);
//     element.innerText = data[num].text;
// }

// By using .then() concept

function getFacts() {
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        const num = Math.ceil(Math.random()*10 % 5) - 1;
        const element = document.querySelector('.fact-box');
        element.innerText = data[num].text;
    })
}

btn.addEventListener('click', getFacts);