// ! partials y currying: se utilizan para transformar funciones con múltiples argumentos en una serie de funciones que toman un solo argumento cada una
// partials: son funciones que ya tienen algunos de sus argumentos predefinidos
// currying: técnica que convierte una función de múltiples argumentos en una secuencia de funciones de un solo argumento (haciendo un solo o varios pasos, como en el ejemplo comentado y el descomentado)

const suma = (a) => (b) => (c) => a + b + c; // * parcials

// esto es igualito
// const parte1 = suma(1);
// const parte2 = parte1(2);
// const resultado = parte2(3);
// console.log(resultado);

const resultado = suma(1)(2)(3); // * currying
console.log(resultado);
