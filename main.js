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

    mpos = new Vector(canvas.width/2, canvas.height/2);

    cannon = new Rectangle(30, canvas.height-30, 50, 25, "#0F7D16");
    ball = new Ball(50, canvas.height-50, 10, "#20DAFF");

    let targetX = canvas.width/2 + Math.random() * (canvas.width/2 - targetSize);
    let targetY = Math.random() * (canvas.height - targetSize);
    target = new Rectangle (targetX, targetY, targetSize, targetSize, "#D1FF33");

    wall = new Rectangle (canvas.width/2, canvas.height/2, 30, canvas.height/2, "#616464");


    update();
}

function update() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    let crash = ball.intersects(target);
    if(crash){
        target.color = "red";
        target.draw(c);
        level ++;
    }else{
        target.draw(c);
    }

    ball.draw(c);
    cannon.draw(c);

    wall.draw(c);




    requestAnimationFrame(update);
}

window.addEventListener('load', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
