const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 100 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

// ! verificar si una condicion se cumple EN TODOS LOS ELEMENTOS de mi arreglo
// * .every()
const resultado = carrito.every((producto) => producto.precio < 1000);
console.log(resultado); // true
const resultado2 = carrito.every((producto) => producto.precio < 500);
console.log(resultado2); // false (al menos 1 no cumple)

// si quieres verificar si una condicion se cumple en un solo elemento particular puedes usar .some()
