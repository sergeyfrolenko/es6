class Vehicle {

}

// with extends key word you must define super()
class Tank extends Vehicle {
    constructor(width, height, length) {
        super();
        this.width = width;
        this.height = height;
        this.length = length;
    }
    moveTo(x, y) {
        console.log(`Tank on sector x: ${x} - ${x+this.width}, y: ${y} - ${y+this.length}`)
    }
    fireTo(x,y) {

    }
}

let tank1 = new Tank(10,5,20);
let tank2 = new Tank();
tank1.moveTo(10,20);