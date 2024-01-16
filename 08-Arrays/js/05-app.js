// * esta forma de colocar (con unshift y push) a mi variable es imperativa, es decir, modifica la variable original, sobre ella misma trabaja, la reescribe y modifica los datos (cuando a mi variable carrito le agrego objetos con unshift y push)

// ! unshift y push sirven tanto para arrays como para objetos

const meses = ["enero", "febrero", "marzo", "abril", "mayo"];
console.log(meses);

// * agregando nuevo valor

// forma 1: meh
meses[5] = "mes agregado";
console.log(meses);

// * forma 2: usando metodos. BIEN

// agregando al final
meses.push("mes metodo");
meses.push("mes x2");
console.log(meses);

// ejemplo carrito vacio

const carrito = [];

const producto = {
    nombre: "nintendo switch",
    precio: 320,
};
const producto2 = {
    nombre: "celular",
    precio: 958,
};

carrito.push(producto);
carrito.push(producto2);
console.table(carrito);

const producto3 = {
    nombre: "teclado",
    precio: 150,
};
// agregando al inicio
carrito.unshift(producto3);
console.table(carrito);
