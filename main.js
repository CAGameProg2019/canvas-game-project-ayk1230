let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mpos;
let cannon;
var keyPress = {
    f: false
}
let target;
let ball;
var level = 1;
let wall;
let targetSize = 50;
var gravity = .2;
var velocity = 15;
var velocityx;
var velocityy;
var angle;
var setAngle;
var state = 'ready';



function init() {

    state = "ready";

    mpos = new Vector(canvas.width/2, canvas.height/2);

    velocityx=0;
    velocityy=0;
    cannon = new Rectangle(0,0, 70, 30, "#0F7D16");
    ball = new Ball(50,canvas.height - 40, 10, "#20DAFF");

    let targetX = canvas.width/2 + targetSize + Math.random() * (canvas.width/2 - targetSize*2);
    let targetY = Math.random() * (canvas.height - targetSize);
    target = new Rectangle (targetX, targetY, targetSize, targetSize, "#D1FF33");

    wall = new Rectangle (canvas.width/2, canvas.height/2, 30, canvas.height/2, "#616464");


    update();
}

function update() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    if(keyPress.w){
        velocity ++;
    }

    if(keyPress.s){
        velocity--;
    }


    wall.draw(c);

    c.save();
    c.translate(40, canvas.height -40);
    angle = Math.atan2(-(canvas.height- 50 - mpos.y),(mpos.x-30));

    if(angle<=0 && angle>=-90){
        cannon.rotate(angle);
        cannon.x = -13;
        cannon.y = -9;
        cannon.draw(c);
    }else if (angle <-90){
        cannon.rotate(90);
        cannon.x = -13;
        cannon.y = -9;
        cannon.draw(c);
    }else if (angle>0){
        cannon.rotate(0);
        cannon.x = -13;
        cannon.y = -9;
        cannon.draw(c);
    }

    if(state == "shooting"){
        velocityy += gravity;
        ball.x += velocityx;
        ball.y += velocityy;
    }

    c.restore();

    ball.draw(c);

    let crash = ball.intersects(target);
    if(crash){
        target.color = "red";
        velocityx = 0;
        velocityy = 0;
        level+=1;

    }else if (!(ball.x > canvas.width ||  ball.y > canvas.height)){
        requestAnimationFrame(update);
    }
    target.draw(c);

    c.lineWidth = 15;
    c.font = "20px Arial";
    c.fillStyle = "black";
    c.fillText("Level: "+ level, 40, 50);
    c.fillText("Speed: "+ velocity, 40, 70);

}

function shooting(){
    state = "shooting";
    setAngle = angle;
    velocityx = velocity*(Math.cos(setAngle));
    velocityy = (velocity*(Math.sin(setAngle)));

}

setInterval(function() {
    init();
}, 6000);

var mouseDown = false;
var mouseUp = false;

window.addEventListener('load', function() {
    init();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('mousemove', function(event){

        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;

        //mpos.print();

    });

    window.addEventListener('mousedown', function(event){
        if(state != 'shooting'){
            shooting();
        }
    });

    window.addEventListener('mouseup',function(event){
        mouseDown = false;
        mouseUp = true;
    });

    window.addEventListener('keydown', function(event){
        if(event.key === 'w'){
            keyPress.w = true;
        }
        if(event.key === 's'){
            keyPress.s = true;
        }
    });

    window.addEventListener('keyup', function(event){
        if(event.key === 'w'){
            keyPress.w = false;
        }
        if(event.key === 's'){
            keyPress.s = false;
        }
    });


});
