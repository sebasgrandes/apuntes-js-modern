const producto =
    "                                           Monitor de 20 Pulgadas                         ";
console.log(producto);

// borrar espacios del inicio
console.log(producto.trimStart());
// borrar espacios del final
console.log(producto.trimEnd());

// borrar espacios del inicio y final
console.log(producto.trim());
// tambien se puede hace asi de forma encadenada
console.log(producto.trimStart().trimEnd());
