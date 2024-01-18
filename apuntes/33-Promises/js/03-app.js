// promise

const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;
    // resolve: se ejecuta cuando el promise se cumple o se ejecuta correctamente. por ejemplo descargar TODOS los datos de una db de una empresa
    // reject: se ejecuta cuando el promise da error. por ejemplo la db se cayo y no pude descargar todos los datos
    if (descuento) {
        resolve("Descuento aplicado"); // es un metodo que utilizamos dentro del constructor de mi Promise, cambiando su estado a fullfilled. y establece un valor que luego será recuperado por el metodo .then() (promesa resuelta). en este caso es el string "descuento aplicado"
    } else {
        reject("Falla en el descuento");
    }
});

// ! de esta manera accedes a la información... tanto de tu "resolve" como de tu "reject"
// .then: accion (FUNCION) que se realizará una vez se cumple el promise (exito)
// .catch: accion que se realizará una vez NO se cumple el promise (falla)
aplicarDescuento
    .then((resultado) => descuento(resultado))
    .catch((resultado) => console.log(resultado));

/*
Hay 3 valores posibles:
fulfilled - el promise se cumplió (operacion exitosa)
rejected - el promise no se cumplió (operacion fallida)
pending - no se ha cumplido y tampoco fue rechazado (estado inicial)
*/

function descuento(mensaje) {
    console.log(mensaje);
}
