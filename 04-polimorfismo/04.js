//*https://www.educative.io/edpresso/how-to-use-polymorphism-with-classes-in-javascript

class Vehicle {
    constructor() {
        this.noOfTires = 4;
        this.sourceOfEnergy = "fuel";
    }
}

class Bicycle extends Vehicle {
    constructor() {
        super();
        this.sourceOfEnergy = "human";
    }
}

class Car extends Vehicle {
    //*podríamos usar el constructor, pero en realidad, nos gusta que tenga fuel como combustible
    // constructor() {
    //     super();
    //     this.sourceOfEnergy = "gas";
    // }
}

const fordEscape = new Car();
const bughatti = new Bicycle();

console.log(fordEscape.sourceOfEnergy);
console.log(bughatti.sourceOfEnergy);