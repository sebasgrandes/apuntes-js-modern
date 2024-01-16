const numero1 = "20";
const numero2 = 20;
const numero3 = 20;

// comparador: compara solo el valor
console.log(numero1 == numero2); // true

// comparador ESTRICTO: compara el valor Y el tipo de dato
console.log(numero1 === numero2); // false
console.log(parseInt(numero1) === numero2); // true

console.log(numero1 != numero2); // no estricto
console.log(numero1 !== numero2); // estricto
console.log(parseInt(numero1) !== numero2); // estricto

const pass1 = "admin";
const pass2 = "Admin";

console.log(pass1 != pass2); // true
