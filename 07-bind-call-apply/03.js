//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

// El método bind() crea una nueva función, que cuando es llamada, asigna a su operador  this el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.

// El valor de this es ignorado cuando la función es llamada con el operador new.

//*funcion ligada:

// El uso más simple de bind() es hacer que una función que, sin importar cómo es llamada, siempre apunte al mismo objeto con la referencia this. Un error común para nuevos programadores de JavaScript es que obtienen una referencia a un método de un objeto, posteriormente ejecutan ese método desde la referencia externa y esperan que la referencia de this siga apuntando al objeto original de donde se obtuvo el método (v.g. cuando se usa ese método en un callback). Sin el debido cuidado, el objeto original es comúnmente perdido. Creando una función ligada desde la función  empleando el objeto original, resuelve limpiamente este problema:
this.x = 9;
var module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, porque en este caso, "this" apunta al objeto global

// Crear una nueva función con 'this' asociado al objeto original 'module'
var boundGetX = getX.bind(module);
boundGetX(); // 81
