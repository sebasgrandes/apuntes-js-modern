// * nota chatgpt
/* 
    En JavaScript, la condición if (valor) se ejecutará si valor es "truthy". Los valores "truthy" son aquellos que se consideran equivalentes a true en un contexto booleano. Los valores "truthy" incluyen todos los valores excepto los siguientes:
        false
        null
        undefined
        0
        NaN
        "" (una cadena de texto vacía)
*/

const autenticado = true;

// ! mala practica (autenticado === true)
/* 
if (autenticado === true) {
    console.log("si puedes ver netflix");
} else {
    console.log("no puedes ver netflix");
}
*/

// * forma correcta. si es true cae en el if, si es false cae en el else.
if (autenticado) {
    console.log("si puedes ver netflix");
} else {
    console.log("no puedes ver netflix");
}

// con operador ternario
console.log(autenticado ? "entraleee" : "no puedess entrarle");
