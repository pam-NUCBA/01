//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/call

//*esto no me dejaría ahcerlo. Solo permite hacerlo con funcion:

/*call() permite que una función/método que pertenece a un objeto, ser asignada y llamada para un objeto diferente.

call() provee un nuevo valor de this a la función/método. Con call(), puedes escribir un método ona vez y heredarlo a otro objeto, sin tener que reescribir el método en el nuevo objeto. */

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;

  if (precio < 0)
    throw RangeError(
      'No se puede crear el producto "' + nombre + '" con un precio negativo'
    );
  return this;
}

function Comida(nombre, precio) {
  Producto.call(this, nombre, precio);
  this.categoria = "comida";
}
Comida.prototype = new Producto();

function Juguete(nombre, precio) {
  Producto.call(this, nombre, precio);
  this.categoria = "juguete";
}
Juguete.prototype = new Producto();

var queso = new Comida("feta", 5);
var diversion = new Juguete("robot", 40);

console.log(queso)
console.log(diversion)