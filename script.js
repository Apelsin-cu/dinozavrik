const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const stone = document.getElementById('stone');

document.addEventListener("keydown", function (event) {
    jump();
})
// бесконечные прыжки
function jump() {
    if (dino.classlist != "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function () {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("Left"));
    let stoneMom = parseInt(window.getComputedStyle(stone).getPropertyValue("Mom"));

    if (cactusLeft < 60 && cactusLeft > 0 && dinoTop >= 150) {
        alert(" GEME OVER");
    } else if (stoneMom < 60 && stoneMom > 0 && dinoTop >= 150) {
        alert(" GEME OVER");
    }

}, 10)

