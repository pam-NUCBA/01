//*una forma intermedio entre factory y class

//en este caso me obliga a no usar arrows:
function Perro(colas, vacunado, ojos) {
    console.log(this); //this es el objeto perro
    this.colas = colas;
    this.vacunado = vacunado;
    this.ojos = ojos;
    this.darPata = function() {
        console.log("dar la pata");
        console.log(this) //este this lo llama ya cuando creamos el nuevo perro, entonces tiene sus datos
    };
}

//ahora podemos hacer muchos perros!
//*new crea un objeto nuevo, nos evita poner el return. Nos crea algo similar a una instancia
const perro1 = new Perro(1, true, ["marron", "marron"]);
perro1.darPata();

const perro2 = new Perro(1, false, ["marron", "marron"]);
perro2.darPata()