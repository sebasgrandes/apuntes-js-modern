const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

// ! comprobar si un valor existe en un arreglo

// .forEach
meses.forEach((mes) => {
    if (mes === "Enero") {
        console.log("Enero sí existe");
    }
});

// .includes: SOLO en un arreglo normal
const resultado = meses.includes("Marzo");
console.log(resultado); // true
const resultado2 = meses.includes("Diciembre");
console.log(resultado2); // false

// .some: en un arreglo de objetos
const existe = carrito.some((producto) => producto.nombre === "Celular");
console.log(existe); // true
const noexiste = carrito.some((producto) => producto.nombre === "MacOS");
console.log(noexiste); // true

// .some tambien funciona en un arreglo normal
const existe2 = meses.some((mes) => mes === "Febrero");
console.log(existe2); // true
const noexiste2 = meses.some((mes) => mes === "Invierano");
console.log(noexiste2); // false
