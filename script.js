let input = document.querySelector("body");

let boom = new Audio("Sounds/sounds/boom.wav");
let clap = new Audio("Sounds/sounds/clap.wav");
let hihat = new Audio("Sounds/sounds/hihat.wav");
let kick = new Audio("Sounds/sounds/kick.wav");
let openhat = new Audio("Sounds/sounds/openhat.wav");
let ride = new Audio("Sounds/sounds/ride.wav");
let snare = new Audio("Sounds/sounds/snare.wav");
let tink = new Audio("Sounds/sounds/tink.wav");
let tom = new Audio("Sounds/sounds/tom.wav");

const buttonW = document.getElementById('w');
const buttonE = document.getElementById('e');
const buttonA = document.getElementById('a');
const buttonS = document.getElementById('s');
const buttonD = document.getElementById('d');
const buttonI = document.getElementById('i');
const buttonJ = document.getElementById('j');
const buttonK = document.getElementById('k');
const buttonL = document.getElementById('l');

input.addEventListener('keypress', (e) => {
            if (e.key === "w" || e.key === "W") {
        boom.play();
    } else if (e.key === "e" || e.key === "E") {
        clap.play();
    } else if (e.key === "a" || e.key === "A") {
        hihat.play();
    } else if (e.key === "s" || e.key === "S") {
        kick.play();
    } else if (e.key === "d" || e.key === "D") {
        openhat.play();
    } else if (e.key === "i" || e.key === "I") {
        ride.play();
    } else if (e.key === "j" || e.key === "J") {
        snare.play();
    } else if (e.key === "k" || e.key === "K") {
        tink.play();
    } else if (e.key === "l" || e.key === "L") {
        tom.play();
    }
})

buttonW.addEventListener('click', (e) => {  
    boom.play();
})
buttonE.addEventListener('click', (e) => {  
    clap.play();
})
buttonA.addEventListener('click', (e) => {  
    hihat.play();
})
buttonS.addEventListener('click', (e) => {  
    kick.play();
})
buttonD.addEventListener('click', (e) => {  
    openhat.play();
})
buttonI.addEventListener('click', (e) => {  
    ride.play();
})
buttonJ.addEventListener('click', (e) => {  
    snare.play();
})
buttonK.addEventListener('click', (e) => {  
    tink.play();
})
buttonL.addEventListener('click', (e) => {  
    tom.play();
})