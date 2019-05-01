class Rectangle {

    constructor(x, y, width, height, stroke) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.stroke = stroke;

    }

    draw(c){
        c.strokeStyle = this.stroke;
        c.lineWidth = 5;
        c.rect(this.x, this.y, this.width, this.height);
        c.stroke();
        c.fill();

    }


}
