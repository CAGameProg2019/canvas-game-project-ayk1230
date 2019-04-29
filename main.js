let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mpos;
let cannon;
let target;
let ball;
var level = 1;
let wall;

function init() {
    draw.rect();
    update();
}

function update() {

    requestAnimationFrame(update);
}

window.addEventListener('load', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
