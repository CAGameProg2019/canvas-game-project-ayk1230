class Vector {

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    dist(vec){
        let x = vec.x - this.x;
        let y = vec.y - this.y;
        return Math.sqrt(x*x + y*y);
    }

    magnitude(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }

    toString() {
        return '<'+this.x+', '+this.y+'>';
    }

    print() {
        console.log(this.toString());
    }
}
