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
var state = 'ready';


function init() {

    mpos = new Vector(canvas.width/2, canvas.height/2);

    cannon = new Rectangle(0,0, 70, 30, "#0F7D16");
    ball = new Ball(50, canvas.height - 35, 10, "#20DAFF");

    let targetX = canvas.width/2 + Math.random() * (canvas.width/2 - targetSize - 30);
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


    wall.draw(c);

    c.save();
    c.translate(40, canvas.height -40);
    var angle = Math.atan2(-(canvas.height- 50 - mpos.y),(mpos.x-30));

    cannon.rotate(angle);
    cannon.x = -13;
    cannon.y = -9;
    cannon.draw(c);

    c.restore();

    ball.draw(c);

    c.lineWidth = 15;
    c.font = "20px Arial";
    c.fillStyle = "black";
    c.fillText("level: "+ level, 20, 50);

    requestAnimationFrame(update);
}

window.addEventListener('load', function() {
    init();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('mousemove', function(event){

        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;

        mpos.print();

    });

});
