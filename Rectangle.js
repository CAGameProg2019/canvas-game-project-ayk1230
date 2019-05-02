class Rectangle {

    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
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


}
