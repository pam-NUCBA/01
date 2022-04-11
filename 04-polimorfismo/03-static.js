//*Static polymorphism is the same as function overloading (we can have multiple methods with the exact name but different parameters), but this is not supported in JavaScript because JavaScript overwrites the old method with the latest one due to having the same name.

// But there is a way to mimic static polymorphism. See the example code given below.

class calculator {
    constructor() {}
    sum(num1, num2, num3, num4) {
        if (num4 != undefined) {
            console.log("Sum is called with four parameters");
            return num1 + num2 + num3 + num4;
        } else if (num3 != undefined) {
            console.log("Sum is called with three parameters");
            return num1 + num2 + num3;
        } else {
            console.log("Sum is called with two parameters");
            return num1 + num2;
        }
    }
}

const c = new calculator();
console.log(c.sum(2, 3));
console.log(c.sum(2, 3, 4));
console.log(c.sum(2, 3, 4, 5));