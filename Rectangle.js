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
        c.rect(x, y, width, height);
        c.stroke();

    }


}
