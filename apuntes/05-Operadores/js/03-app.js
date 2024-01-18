let numero1; // con const no se puede crear una variable vacia

console.log(numero1);
console.log(typeof numero1);

let numero2 = null;
console.log(numero2);
console.log(typeof numero2); // es de tipo objeto

// ! comparando
console.log(numero1 == numero2); // * true
console.log(numero1 === numero2); // * false // ! se recomienda usar siempre el operador estricto
