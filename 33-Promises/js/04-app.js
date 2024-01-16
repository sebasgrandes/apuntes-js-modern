// pasando el callbackhell a promises

const paises = [];

const nuevoPais = (pais) =>
    new Promise((resolve) => {
        setTimeout(() => {
            paises.push(pais);
            resolve(`País ${pais} agregado correctamente`);
        }, 1000);
    });

nuevoPais("Alemania")
    .then((resultado) => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais("Francia"); // retorno una nueva promesa
        // la promesa retornada en este primer bloque (nuevopais francia) se resuelve y pasa su resultado al segundo bloque .then
    })
    .then((resultado) => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais("Inglaterra");
        // la promesa retornada en este segundo bloque (nuevopais inglaterra) se resuelve y pasa su resultado al tercer bloque .then
    })
    .then((resultado) => {
        console.log(resultado);
    });
