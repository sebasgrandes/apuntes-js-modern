// ! encontrar valor (y asignarlo a una variable)

const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 100 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

// * con .forEach()
let resultado = "";
carrito.forEach((producto, indice) => {
    if (producto.nombre === "Audifonos") {
        resultado = carrito[indice]; // lo ultimo significa: el elemento de carrito en el indice tal
    }
});
console.log(resultado);

// * .find()
const resultado2 = carrito.find((producto) => producto.nombre === "Teclado");
console.log(resultado2);
const resultado3 = carrito.find((producto) => producto.precio === 100); // recuerda que solo retorna EL PRIMER VALOR encontrado, no varios
console.log(resultado3);
const resultado4 = carrito.find((producto) => producto.precio === 100000);
console.log(resultado4); // undefined
