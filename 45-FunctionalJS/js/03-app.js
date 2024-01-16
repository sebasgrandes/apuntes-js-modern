// ! higher order functions: funciones que toman una o más funciones como argumentos, retornan una función, o ambas cosas. Es decir, operan sobre otras funciones.
/*
ejemplo:
* 1. Funciones que toman otras funciones como argumentos:
map, filter, foreach... porque usan callbacks adentro de ellas 
const cuadrados = numeros.map(num => num * num); // [1, 4, 9, 16] // * toman una funcion (callback) y la aplica a cada elemento de un array...

* 2. Funciones que retornan otras funciones:
function crearSaludo(saludo) {
  return function(nombre) {
    return `${saludo}, ${nombre}!`;
  };
}

* 3. Funciones que hacen ambas cosas (toman funciones como argumentos y retornan funciones):
function componer(fn1, fn2) {
  return function(valor) {
    return fn1(fn2(valor));
  };
}
*/

const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 500 },
    { nombre: "Televisión 50 Pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 },
];

const resultado = carrito.filter((producto) => producto.precio >= 500); // el filter es una hof porque le estoy pasando una funcion
console.log(resultado);

// también puedo pasarselo de esta forma
const fun = (prod) => prod.precio >= 500;
const resul = carrito.filter(fun);
console.log(resul);
