// con get item lo obtienes
const producto2 = localStorage.getItem("producto"); // sigue siendo un string (lo obtienes como tal)
console.log(producto2);

// * La función JSON.parse() es una función nativa de JavaScript que se utiliza para convertir una cadena de texto que representa un objeto o valor en formato JSON (JavaScript Object Notation) en un objeto o valor de JavaScript.

// con JSON.parse lo conviertes (de la cadena de texto en formato json) a su representación original de JavaScript (puede ser objeto o array)
const productoObjeto = JSON.parse(localStorage.getItem("producto"));
console.log(productoObjeto);

const meses2 = localStorage.getItem("meses");
console.log(JSON.parse(meses2));
