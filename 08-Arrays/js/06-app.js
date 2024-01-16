// * aqui usaremos la forma declarativa, es decir, la que no modifica una variable (como la imperativa), sino que crea una nueva

const carrito = [];

const producto = {
    nombre: "nintendo switch",
    precio: 320,
};
const producto2 = {
    nombre: "celular",
    precio: 958,
};
const producto3 = {
    nombre: "teclado",
    precio: 150,
};

let resultado;
resultado = [...carrito, producto]; // * asi es la forma declarativa
console.table(resultado);
resultado = [...resultado, producto2]; // agregando al final
console.table(resultado);
resultado = [producto3, ...resultado]; // agregando al inicio
console.table(resultado);
