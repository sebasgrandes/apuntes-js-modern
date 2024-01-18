const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 100 },
    { nombre: "Celular", precio: 100 },
];

// ! encontrar indice de un arreglo

// * con .forEach
// al i se le pasa automaticamente el indice
meses.forEach((mes, i) => {
    if (mes === "Abril") {
        console.log(`Ubicado en el indice: ${i}`);
    }
});

// * con .findIndex (en un arreglo)
const find1 = meses.findIndex((mes) => mes === "Abril");
console.log(find1); // 3
const find2 = meses.findIndex((mes) => mes === "Invierano");
console.log(find2); // -1 (no se encuentra)

// * con .findIndex (en un arreglo DE OBJETOS)
const fob1 = carrito.findIndex((producto) => producto.nombre === "Teclado");
console.log(fob1); // 4
const fob2 = carrito.findIndex((producto) => producto.precio === 100);
console.log(fob2); // ! a pesar de haber 3 con precio 100, SOLO TE RETORNA 1 UNA VEZ QUE LO ENCUENTRA
const fob3 = carrito.findIndex((producto) => producto.nombre === "Celarx");
console.log(fob3); // -1 (no se encuentra)
