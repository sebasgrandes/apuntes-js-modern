const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 100 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

const producto = { nombre: "Disco Duro", precio: 300 };

// ! spread operator: es una base de la programacion funcional, la cual dice que evitemos modificar los arreglos (pej usando push en meses), y que en cambio creemos nuevos
// el orden importa

// * en un arreglo normal (o arreglo de indices)
const meses2 = ["Agosto", ...meses];
console.log(meses2);

// * en un arreglo de objetos
const carrito2 = [producto, ...carrito]; // recuerda que el que añades va sin "..."
console.log(carrito2);
