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
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let stoneLeft = parseInt(window.getComputedStyle(stone).getPropertyValue("left"));

    if (cactusLeft < 60 && cactusLeft > 0 && dinoTop >= 150) {
        alert(" GAME OVER");
    } else if (stoneLeft < 60 && stoneLeft > 0 && dinoTop >= 150) {
        alert(" GAME OVER");
    }

}, 10)

