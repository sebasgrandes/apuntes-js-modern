const meses = ["enero", "febrero", "marzo", "abril", "mayo"];
console.log(meses);

// * (AUN ASI SEA CONST SE PUEDE MODIFICAR) modificando el valor de un array
meses[0] = "nuevo mex";
console.log(meses);
// ! no hay forma de congelar o sellar un arreglo así como lo hacíamos con los objetos

// * agregando nuevo valor

// forma 1: meh
meses[5] = "mes agregado";
console.log(meses);
