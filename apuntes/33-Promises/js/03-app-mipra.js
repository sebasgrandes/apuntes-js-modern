const aplicarDescuento = new Promise((resolve, reject) => {
    const opcion = true;
    if (opcion) {
        resolve("esto es verdadero");
    } else {
        reject("promise falsa");
    }
});

aplicarDescuento
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((resultado) => {
        console.log(resultado);
    });

    