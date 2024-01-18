const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
};

// * los sgtes metodos los retorna en arrays

console.log(Object.keys(producto)); // retorna las llaves o propiedades del objeto

console.log(Object.values(producto)); // retorna los valores

console.log(Object.entries(producto)); // retorna todo en pares
