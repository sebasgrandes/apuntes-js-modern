// un generador es una funcion que retorna un iterador

function* miGenerador() {
    // los yield son los valores que se pueden iterar
    yield "1";
    yield 2 + 2;
    yield "Sebastian Grandes";
    yield true;
}

const iterador = miGenerador();

// el generador se queda dormido (suspended) porque no lo estamos utilizando
console.log(iterador);
// el next nos sirve para iterar en el generador
// en cada next, se va al siguiente elemento del generador
// una vez que usas next, el generador despierta y puedes acceder a los valores
console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador); // luego de usado el next, solito se vuelve a suspended
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next());

// * generador para carrito de compras

function* carritoGenerador(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ["Producto 1", "Producto 2", "Producto 3"];

const carritoGen = carritoGenerador(carrito);

console.log(carritoGen.next());
console.log(carritoGen.next().value);
console.log(carritoGen.next());
