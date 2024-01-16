// ! pregunta para obtener un trabajo
// el set te permite crear una lista de valores sin duplicados
// es muy poco utilizado por desconocimiento, etc. en vez de esto usan arreglos... cosa que se hace muy sencillo con un set

// los sets solo son valores...
const nuevoSet = new Set();
nuevoSet.add(10);
nuevoSet.add(20);
nuevoSet.add(30);
nuevoSet.add(10);
nuevoSet.add(20);
nuevoSet.add("Disco 2");
nuevoSet.add("Disco 1");
nuevoSet.add("Disco 2");

// los sets no almacenan valores repetidos
console.log(nuevoSet);

// en los sets se utiliza size, no length
console.log(nuevoSet.size);

// comprueba si un valor existe en el set
console.log(nuevoSet.has("Disco 1"));
console.log(nuevoSet.has("Disco 4"));

// eliminar un elemento del set
nuevoSet.delete(30);
console.log(nuevoSet);

// borra todos los elementos
// nuevoSet.clear();
// console.log(nuevoSet);

// son iterables
nuevoSet.forEach((producto) => {
    console.log(producto);
});

// * ejercicio: del siguiente arreglo, eliminar los duplicados
// la mayoría se complica con arrays, hazlo con sets

const otroSet = [10, 20, 30, 40, 10, 20];
const reSet = new Set(otroSet);
console.log(reSet);
