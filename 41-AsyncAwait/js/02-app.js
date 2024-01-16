// creo mi funcion el cual devolverá una promesa
function funcionPromesa() {
    return new Promise((resolve, reject) => {
        const truefalse = false;
        setTimeout(() => {
            if (truefalse) {
                resolve("funcionPromesa resuelta");
            } else {
                reject("funcionPromesa rechazada");
            }
        }, 3000);
    });
}

// * el async se utiliza con 2 propositos: 1. Convertir una función en una que devuelve una promesa (pudiendo usar .then despues) (esto puede usarse solito, sin necesidad del await). 2. Permitir el uso de await dentro de la función. pero su proposito principal generalmente es trabajar junto al await... para facilitar la escritura y gestión de operaciones asincrónicas blabla
// asyn se debe usar en la funcion padre
async function funcionAsincrona() {
    // * el try detecta errores, también detecta (en el await) el reject() de una promesa (ya qye este rechazo es tratado como un error que es arrojado o "thrown")... transfiriendole el control al catch que captura y maneja ese error o rechazo
    try {
        console.log("Sebastian");
        // ! Cuando pones await delante de una promesa, le dices a JavaScript: "Espera a que esta promesa (funcionPromesa) se resuelva antes de continuar". // cuando se resuelva dame (o retorna) el valor resuelto de esa promesa
        const aweit = await funcionPromesa(); // * await detiene la ejecucion de mi funcion (sin bloquear mi hilo principal, es decir, el resto del codigo) HASTA que la promesa QUE LE PASAMOS (porque solo acepta promesas) se resuelva o rechace (su estado en si) (no es que le asignemos una promesa a await, solo es que esta espera que funcionPromesa se resuelva, o la funcion que este al costado se resuelva) (es decir, mi funcionPromesa() se resuelva o rechace, o en el caso de fetch, espera a que esa se resuelva). LUEGO async retorna el valor resuelto de la promesa o arroja el valor rechazado // si se resuelve, continua con la ejecucion de mi funcion. si se rechaza, entonces para la ejecucion de mi funcion y manda error al catch
        // Si solo invocas a una función que devuelve una promesa (ya sea resuelta o rechazada) sin usar await, simplemente obtendrás una instancia de esa promesa
        console.log(aweit);
        console.log("Grandes");
    } catch (error) {
        console.log(error);
    }
}

funcionAsincrona();
