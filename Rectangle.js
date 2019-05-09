class Rectangle extends Vector{

    constructor(x, y, width, height, color) {
        super(x,y);
        this.width = width;
        this.height = height;
        this.color = color;

    }

    draw(c){
        c.fillStyle = this.color;
        c.lineWidth = 5;
        c.beginPath();
        c.rect(this.x, this.y, this.width, this.height);
        c.closePath();
        c.stroke();
        c.fill();

    }

    rotate(angle){
        this.angle = angle;
        // this.x = x;
        // this.y = y;
        //
        // c.translate(x,y);
        c.rotate(angle);

    }

    update(mouse){
        var vel = new Vector (mouse.x, mouse.y);
        vel.subVector(this);


            this.addVector(vel);
        }

}
