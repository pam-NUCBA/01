//*con timeout
//  ??????

// De manera predeterminada, dentro de window.setTimeout() (en-US), la palabra reservada this será setteada al objeto window (o a global). Cuando se esté trabajando con métodos de clase que requieran que this se refiera a instancias de clase, usted puede explícitamente ligar this a la función callback para mantener la referencia de la instancia.

function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
  console.log(this.petalCount)
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};
