//*podemos modificar nuestro objeto para poder crear muchas instancias con diferentes datos:
//cuando un objeto tiene métodos, tiene behaviours, comportamientos, y en esos casos ya no nos conviene crearlos así

//*fábrica o funcion constructor:
const perro = (colas, vacunado, ojos) => {
    return {
        colas,
        vacunado,
        ojos,
        darPata: function() {
            console.log("dar la pata");
        },
    };
};

//ahora podemos hacer muchos perros!
const perro1 = perro(1, true, ["marron", "marron"])

perro1.darPata()
console.log(perro1.ojos);

const perro2 = perro(2, false, ["marron", "marron"])

perro2.darPata()
console.log(perro2.vacunado);