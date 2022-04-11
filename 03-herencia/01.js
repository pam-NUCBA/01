//*permite eliminar código redundante. Se puede crear un padre del cual se hereda lo que se comparte, y se extiende para agregar lo que sea distinto.
//*https://www.javascripttutorial.net/es6/javascript-inheritance/
//cómo se hacía antes:

function Animal(legs) {
    this.legs = legs;
}

Animal.prototype.walk = function() {
    console.log("walking on " + this.legs + " legs");
};

function Bird(legs) {
    Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

Bird.prototype.fly = function() {
    console.log("flying");
};

var pigeon = new Bird(2);
pigeon.walk(); // walking on 2 legs
pigeon.fly(); // flying