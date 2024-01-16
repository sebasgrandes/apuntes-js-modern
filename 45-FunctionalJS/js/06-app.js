// funciones puras

/*
se caracterizan por cumplir 2 propiedades:
1. Transparencia referencial:
si su salida depende exclusivamente de sus entradas, sin generar efectos secundarios. Dado un input, el output siempre será el mismo, facilitando el razonamiento acerca del código y mejorando la previsibilidad y la testabilidad de la función.

2. No tiene efectos secundarios: No modifica ninguna variable externa, no escribe en la pantalla, no lee archivos, etc
Esto significa que no modifica ningún estado ni realiza acciones observables en el sistema, como modificar una variable global o realizar operaciones de entrada/salida (I/O). Su único efecto es computar el valor de retorno.
(por ejemplo no tienen dentro resultado += numero)
*/

const numero1 = 20;
const duplicar = (numero) =>
    numero *
    2; /* 1. los parametros que se les pasa son aquellos que debe retornar 1 solo valor */

const resultado =
    duplicar(numero1); /* 2. no modifican el valor original de las variables */
console.log(numero1);
console.log(resultado);
