// cada objeto que crees en js tiene un proto, y ese proto son las funciones que les puedes pasar a ese tipo de objeto

// object literal: no tan dinamico
const yoni = {
    nombre: "sebastian",
    saldo: 500,
};

console.log(yoni);

// object constructor: dinamico y reutilizable. porque con el new nada mas puedes crear uno y otro y otro objeto con sus propiedades

// recuerda que este es un constructor, el cual estará dentro del proto del objeto que crees con este
function Amor(nombre, saldo) {
    (this.nombre = nombre), (this.saldo = saldo);
}

// esta es la isntancia creada, dentro del proto está el constructor con el que lo creaste
const bebe = new Amor("Andrea", 621);

console.log(bebe);

const bocho = new Amor("Yras", 64654654);
console.log(bocho);
