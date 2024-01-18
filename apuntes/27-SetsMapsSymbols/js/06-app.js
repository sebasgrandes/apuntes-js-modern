// cuando iteras ten en cuenta 2 cosas: 1 es el valor actual, lo 2do es conocer cuantos elementos vas a iterar

// funcion que retorna una funcion
function iterador(carrito) {
    let i = 0;
    return {
        // funcion que podre utilizar al llamar iterador
        siguiente: () => {
            const fin = i >= carrito.length; // si es igual a 3 significa que ya llegamos al final del carrito (donde no hay nada)
            const valor = !fin ? carrito[i++] : undefined; // [i++] como sufijo significa: devuelve el valor de su operando antes de agregar 1 (es decir i = 0) (luego ya establece i en 1)
            return {
                i,
                fin,
                valor,
            };
        },
    };
}

const carrito = ["Producto 1", "Producto 2", "Producto 3"];
console.log(carrito[0]);

// utilizando el iterador
const iterape = iterador(carrito); // aqui retorna la funcion de siguiente:

// por lo que la usamos
console.log(iterape.siguiente());
console.log(iterape.siguiente());
console.log(iterape.siguiente());
console.log(iterape.siguiente());
