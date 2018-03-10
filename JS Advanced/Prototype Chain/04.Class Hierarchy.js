function Figures() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error('Cannot initialize an abstract class!');
            }
        }

       get area() {
            return undefined;
        }

        toString() {
        }

    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

       get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${this.constructor.name} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

       get area() {
            return this.width * this.height;
        }

        toString() {
            return `${this.constructor.name} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {Figure, Circle, Rectangle}
}

let obj = Figures();
let Circle = obj.Circle;
let Rectangle = obj.Rectangle;
let f = new Figure();
let c = new Circle(5);
console.log(c.area);
console.log(c.toString());
let r = new Rectangle(3, 4);
console.log(r.area);
console.log(r.toString());

