// ! for ...of: ITERA SOBRE ARREGLOS. (version mas simplificada del for y forEach)

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar Javascript"];

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 999, descuento: false },
    { nombre: "Celular", precio: 555, descuento: false },
    { nombre: "Tablet", precio: 654, descuento: true },
    { nombre: "Laptop", precio: 777, descuento: false },
];

for (let pendiente of pendientes) {
    console.log(pendiente);
}
console.log("--------");
for (let producto of carrito) {
    console.log(`${producto.nombre} tiene un precio de ${producto.precio}`);
}
