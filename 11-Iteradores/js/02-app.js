// break y continue en un for loop

// haz un for loop que al detectar el numero 5 se detenga
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("¡Se encontró el número 5!");
        break; // ! TERMINA, detiene o rompe el for loop (evitando ejecutar las demas instancias)
    }
    console.log(`Número: ${i}`);
}

console.log("--------------------");

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("¡Se encontró el número 5!");
        continue; // ! termina la instancia (CICLO) de i===5 (omitiendo el clg de abajo). y continua con las demas instancias (CICLOS) (i 6 7 8 9)
    }
    console.log(`Número: ${i}`);
}

console.log("--------------------");

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 999, descuento: false },
    { nombre: "Celular", precio: 555, descuento: false },
    { nombre: "Tablet", precio: 654, descuento: true },
    { nombre: "Laptop", precio: 777, descuento: false },
];
for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento === true) {
        console.log(`${carrito[i].nombre} (¡TIENE UN MEGA DESCUENTO!)`);
        continue; // detiene el ciclo y continua con los demás
    }
    console.log(carrito[i].nombre);
}
