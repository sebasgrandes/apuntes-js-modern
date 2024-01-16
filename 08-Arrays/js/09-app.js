const carrito = [
    { nombre: "Tableta", precio: 50 },
    { nombre: "Televisión", precio: 500 },
    { nombre: "Celuar", precio: 100 },
    { nombre: "Laptop", precio: 400 },
    { nombre: "Computadora", precio: 800 },
];

for (let i = 0; i < carrito.length; i++) {
    console.log(
        `El producto ${carrito[i].nombre} tiene un precio de ${carrito[i].precio}`
    );
}

// hola(): esto es una funcion
// .hi(): esto es un metodo (por el punto)

// CASI LO MISMO QUE EL FOR loop
carrito.forEach(function (producto) {
    // producto toma cada elemento del array
    console.log(
        `THE PRODUCT ${producto.nombre} HAS PRICE OF ${producto.precio}`
    );
});
