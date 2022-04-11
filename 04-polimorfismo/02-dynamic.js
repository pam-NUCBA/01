//*https://www.delftstack.com/howto/javascript/polymorphism-in-javascript/

// The polymorphism is used due to the following advantages.
// We can reuse the code that is already written and tested.
// It is easy to debug the code due to using polymorphism.
// Save time and increase the quality of the work.

//Dynamic polymorphism allows us to perform a single action in multiple ways

class Shape {
    calculateArea() {
        console.log("shape.calculateArea is called.");
        return 0;
    }
}

//rectangulo:

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        console.log("rectangle.calculateArea is called.");
        return this.length * this.width;
    }
}

//circulo:

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        console.log("circle.calculateArea is called.");
        return Math.PI * this.radius ** 2;
    }
}

//uso:
s = new Rectangle(3, 4);
console.log(s.calculateArea());
s = new Circle(2);
console.log(s.calculateArea());