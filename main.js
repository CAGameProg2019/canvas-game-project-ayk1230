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
let targetSize = 50;


function init() {
    cannon = new Rectangle(30, window.height-30, 50, 25, "black");
    ball = new Ball(35, window.height -35, 10, "blue");

    let targetX = Math.random() * canvas.width;
    let targetY = Math.random() * canvas.height;
    target = new Rectangle (targetX, targetY, targetSize, targetSize, "yellow");



    update();
}

function update() {
    cannon.draw(c);
    ball.draw(c);
    requestAnimationFrame(update);
}

window.addEventListener('load', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
