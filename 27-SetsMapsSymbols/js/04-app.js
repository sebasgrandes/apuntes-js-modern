// ! ningun weak es iterable, tampoco puedes saber el size.
// ! recuerda que solo puedes añadirles objetos a los weaks

const nuevowe = new WeakMap();

const objetino = {
    nombre: "Sebastian Grandes",
    direccion:
        "Calle 58",
};

nuevowe.set(objetino, "moniorrrrr");

console.log(nuevowe.get(objetino));
console.log(nuevowe);
// no funciona el .size, no son iterables

// si funciona el .delete
