// ! forEach

// * en un array
const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar Javascript"];

pendientes.forEach((pendiente) => console.log(pendiente));

console.log("--------------");

// el forEach en un arreglo el indice se le pasa automaticamente
pendientes.forEach((pendiente, indice) =>
    console.log(`${indice} : ${pendiente}`)
);

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 999, descuento: false },
    { nombre: "Celular", precio: 555, descuento: false },
    { nombre: "Tablet", precio: 654, descuento: true },
    { nombre: "Laptop", precio: 777, descuento: false },
];

console.log("--------------");

// * en un array de objetos
carrito.forEach((producto) => console.log(producto.nombre));
