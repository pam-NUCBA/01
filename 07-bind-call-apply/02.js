var animales = [
  {especie: 'Leon', nombre: 'Rey'},
  {especie: 'Whale', nombre: 'Fail'}
];

for (var i = 0; i < animales.length; i++) {
  (function (i) {
    this.imprimir = function () {
      console.log('#' + i  + ' ' + this.especie + ': ' + this.nombre);
    }
    this.imprimir();
  }).call(animales[i], i);
}