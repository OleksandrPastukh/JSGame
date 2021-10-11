const serg = document.getElementById("serg");
const car = document.getElementById("car");

document.addEventListener("keydown", function(event) {
    jump();
})
function jump() {
    if (serg.classList != "jump") {
        serg.classList.add("jump")
    }
    setTimeout( function() {
        serg.classList.remove("jump")
    }, 1000)
}

let isAlive = setInterval ( function() {
    let sergTop = parseInt(window.getComputedStyle(serg).getPropertyValue("top"));
    let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));

    if (carLeft < 50 && carLeft > 0 && sergTop >= 250) {
        alert("GAME OVER!!!")
    }
}, 10)

function jumpSound() {
    let audio = new Audio();
    audio.src = 'mp3/jumpSound.mp3';
    audio.autoplay = true;
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 32)
    jumpSound();
})
