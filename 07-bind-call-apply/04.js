//*funciones parciales


// El siguiente uso simple de bind() es definir una función con argumentos predeterminados que precederán a los argumentos finales de la función ligada. Estos argumentos iniciales (en caso de haberlos) se definen a continuación de lo que será la referencia de this y son entonces enviados como argumentos de la función objetivo, seguidos por los argumentos enviados a la función ligada cada vez que dicha función sea llamada.

function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Crear funcion (sin referencia this) con argumento inicial predeterminado
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

console.log(list1, list2, list3)