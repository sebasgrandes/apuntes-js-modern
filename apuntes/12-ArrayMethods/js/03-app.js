const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

// usando .forEach()
let total = 0;
carrito.forEach((producto) => (total += producto.precio));
console.log(total);

// ! .reduce() // toma una gran cantidad de datos, los une y te entrega un resultado
// aqui no creamos variables extra a comparacion con el .forEach(). es una solucion mas moderna
// toxtal es el valor previo, el que inicia y sobre el cual se va acumulando la suma. producto es el valor actual (u objeto actual)
// el valor que retorna solo debe ser la suma pq como se va acumulando en la funcion toxtal no necesitamos ponerle += pq ya sabe o mantiene el valor previo
// el 1000000 es el valor en el cual inicia el toxtal (valor inicial)
let resultado = carrito.reduce(
    (toxtal, producto) => toxtal + producto.precio,
    1000000
);
console.log(resultado);
