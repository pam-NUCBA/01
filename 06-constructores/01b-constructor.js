//* https://www.programiz.com/javascript/constructor-function
//van a ver videos que les dicen que "class no existe" en JS. Eso era antes, y entonces había que hacerlo así:

// constructor function
function Person() {
    this.name = 'John',
        this.age = 23,

        this.greet = function() {
            console.log('hello');
        }
}

// create objects
const person1 = new Person();
const person2 = new Person("Pablo", 16);

// access properties
console.log(person1.name); // John
console.log(person2.name); // John, aunque le hayamos pasado parametros, porque lo harcodeamos.