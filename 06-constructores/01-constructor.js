//*constructor es una propiedad que viene en todos los objetos de javascript.

//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes

//en este caso me obliga a no usar arrows:
class Perro {
    constructor(colas, vacunado, ojos) {
        console.log(this); //this es el objeto perro. Todavía está vacío!
        this.colas = colas;
        this.vacunado = vacunado;
        this.ojos = ojos;
        this.darPata = function() {
            console.log("dar la pata");
            console.log(this) //este this lo llama ya cuando creamos el nuevo perro, entonces tiene sus datos
        };
    }
}
//ahora podemos hacer muchos perros!
//*new crea un objeto nuevo, nos evita poner el return. Nos crea algo similar a una instancia
const perro1 = new Perro(1, true, ["marron", "marron"]);

console.log(perro1.constructor)
console.log(Perro.constructor)
console.log(perro1.darPata())
console.log(perro1.colas)