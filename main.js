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
var gravity = 5;
var velocity = 10;
var velocityx;
var velocityy;
var angle;
var setAngle;
var state = 'ready';



function init() {

    mpos = new Vector(canvas.width/2, canvas.height/2);


    cannon = new Rectangle(0,0, 70, 30, "#0F7D16");
    ball = new Ball(3,5, 10, "#20DAFF");

    let targetX = canvas.width/2 + Math.random() * (canvas.width/2 - targetSize - 30);
    let targetY = Math.random() * (canvas.height - targetSize);
    target = new Rectangle (targetX, targetY, targetSize, targetSize, "#D1FF33");

    wall = new Rectangle (canvas.width/2, canvas.height/2, 30, canvas.height/2, "#616464");


    update();
}

function update() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    wall.draw(c);

    c.save();
    c.translate(40, canvas.height -40);
    angle = Math.atan2(-(canvas.height- 50 - mpos.y),(mpos.x-30));

    if(angle<=0 && angle>=-90){
        cannon.rotate(angle);
        cannon.x = -13;
        cannon.y = -9;
        cannon.draw(c);
        ball.draw(c);
    }else if (angle <-90){
        cannon.rotate(90);
        cannon.x = -13;
        cannon.y = -9;
        cannon.draw(c);
        ball.draw(c);
    }else if (angle>0){
        cannon.rotate(0);
        cannon.x = -13;
        cannon.y = -9;
        cannon.draw(c);
        ball.draw(c);
    }

    c.restore();

    if(mouseDown){
        state = "shooting";
        setAngle = angle;
    }
    if(state == 'shooting'){

        velocityx = velocity*(Math.cos(setAngle));
        velocityy = velocity*(Math.sin(setAngle));

        ball.x += velocityx;
        ball.y = ball.y - velocityy + gravity;

        ball.draw(c);
    }

    c.lineWidth = 15;
    c.font = "20px Arial";
    c.fillStyle = "black";
    c.fillText("Level: "+ level, 40, 50);

    let crash = ball.intersects(target);
    if(crash){
        target.color = "red";
        target.draw(c);
        velocity = 0;
        level+=1;

        setTimeout();
    }else{
        target.draw(c);
    }

    // if(keyPress.s){
    //
    // }


    requestAnimationFrame(update);
}

setTimeout(function(){
    window.location.reload();
},6000);

var mouseDown = false;
var mouseUp = false;

// function getMousePos(canvas, event){
//     var rect = canvas.getBoundingCLientRect();
//     return {
//         x: event.clientX,
//         y: event.clientY
//     };
// }

window.addEventListener('load', function() {
    init();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('mousemove', function(event){

        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;

        mpos.print();

    });

    window.addEventListener('mousedown', function(event){
        mouseDown = true;
        mouseUp = false;
    });

    window.addEventListener('mouseup',function(event){
        mouseDown = false;
        mouseUp = true;
    })


});
