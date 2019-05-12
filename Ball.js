class Ball extends Vector{

    constructor (x, y, radius, color){
        super(x,y);
        this.radius = radius;
        this.color = color;
    }

    draw(c){
        c.fillStyle = this.color;
        c.lineWidth = 5;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.closePath();
        c.stroke();
        c.fill();

    }



    intersects(box){
        if (this.x+ this.radius >= box.x && this.x+this.radius <= box.x + box.width && this.y+ this.radius>= box.y && this.y+ this.radius<= box.y + box.height){
            return true;
        }
        return false;
    }
}
Object.assign(Ball, Vector);
