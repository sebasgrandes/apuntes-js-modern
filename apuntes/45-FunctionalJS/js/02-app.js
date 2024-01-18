// ? First Class Functions

const sumar = (a, b) => a + b;
const multiplicar = (x, y) => x * y;

const sumarOmultiplicar = (fn) => fn(1, 2);

// * pasando mis funciones como argumentos, otra caracteristica de firstclassfunctiosn porque estoy tratando mis funciones como valores... valores que se pueden pasar como argumentos
console.log(sumarOmultiplicar(sumar));
console.log(sumarOmultiplicar(multiplicar));
