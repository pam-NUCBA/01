//*Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.

//*https://developer.mozilla.org/es/docs/Web/JavaScript/Closures
//*https://www.freecodecamp.org/espanol/news/que-es-un-closure-en-javascript/

//Tienes una closure cuando una función cualquiera accede a una variable fuera de su contexto.

//sin closure:
function iniciar() {
  var nombre = "Chrome";  // La variable nombre es una variable local creada por iniciar.
  function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
    console.log(nombre);  // Usa una variable declarada en la función externa.
  }
  mostrarNombre();
}
iniciar();  

//con closure:

function creaFunc() {
  var nombre = "Mozilla";
  function muestraNombre() {
    console.log(nombre);
  }
  return muestraNombre;
}

var miFunc = creaFunc(); //miFunc se convirtió en un closure, un tipo de objeto que combina función y entorno

miFunc();
