// ! recuerda que en js todos los numeros que se crean igual, no hay flotantes ni enteros

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;

//tipo de dato
console.log(typeof numero1);
console.log(typeof numero4);

// convirtiendo a entero
console.log(parseInt(numero1));
console.log(parseInt(numero2)); // lo convierte a entero

// convirtiendo a float (flotante)
console.log(parseFloat(numero2));

// revisar si un numero es entero o no
console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(parseFloat(numero2)));
