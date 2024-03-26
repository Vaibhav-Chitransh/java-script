setTimeout(() => {
    console.log('Vaibhav Chitransh');
}, 2000);

const greet = (() => {
    console.log('Hi');
})

setTimeout(greet, 3000);

const changeText = (() => {
    document.querySelector('h1').innerHTML = "I am the Best";
})

const changeMe = setTimeout(changeText, 5000);

document.querySelector('button').addEventListener('click', () => {
    clearTimeout(changeMe);
    console.log('STOPPED');
})

function getRandomColor() {
    // Generate random values for RGB (Red, Green, Blue)
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Construct the CSS color string
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

const changeBackground = (() => {
    let bg = getRandomColor();
    const elem = document.querySelector('body');

    elem.style.backgroundColor = bg;
})

let toggle = false;
let intervalId;

function disco() {
    if (toggle) {
        intervalId = setInterval(changeBackground, 100);
    } else {
        clearInterval(intervalId);
    }
}

const clicked = document.querySelector('#on-btn');
clicked.addEventListener('click', () => {
    toggle = true;
    disco();
});

const discoOff = document.querySelector('#off-btn');
discoOff.addEventListener('click', () => {
    toggle = false;
    disco();
});
