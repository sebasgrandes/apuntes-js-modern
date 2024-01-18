const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`País ${pais} agregado`);
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

// ! esto es el callbackhell, cuando tienes muchas funciones callbacks anidadas (dificil de leer y mantener). para evitar esto usamos promesas o async/await
function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais("Alemania", mostrarPaises);
        setTimeout(() => {
            nuevoPais("Francia", mostrarPaises);
            setTimeout(() => {
                nuevoPais("Ecuador", mostrarPaises);
            }, 1000);
        }, 1000);
    }, 1000);
}

iniciarCallbackHell();
