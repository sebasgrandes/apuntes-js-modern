// ! eliminar elementos del DOM

// * 1er forma: eliminando directamente el elemento
// const primerEnlace = document.querySelector("a");
// primerEnlace.remove();
// console.log(primerEnlace);

// * 2da forma: eliminando el elemento DESDE EL PADRE
const navegacion = document.querySelector(".navegacion");
console.log(navegacion.children); // util para identificar (la referencia) el indice del elemento que quieres eliminar
navegacion.removeChild(navegacion.children[3]); // adentro va el nodo que eliminaras

