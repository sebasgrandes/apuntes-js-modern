// try catch: sirve para que al ejecutar un codigo, y este de un error, la ejecucion de nuestro codigo posterior no se vea afectada y también podamos debuggear el error

console.log("Hola");

// mostrar() hace que se detenga nuestra ejecucion mostrando error y no imprime en console mi nombre
// mostrar();

// sigue con toda la ejecucion identificando el error
// solo utilizalo cuando sea realmente necesario, por ejemplo autenticar un usuario, etc
try {
    mostrar();
} catch (error) {
    console.log(error);
}

console.log("Sebastian Grandes");
