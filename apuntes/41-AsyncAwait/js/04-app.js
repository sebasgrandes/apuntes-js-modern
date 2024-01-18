// consumir 2 awaits

function descargarNuevosClientes() {
    return new Promise((resolve) => {
        console.log("Descargando clientes...");
        setTimeout(() => {
            resolve("Clientes correctamente descargados después de 5 segundos");
        }, 5000);
    });
}
function descargarNuevosPedidos() {
    return new Promise((resolve) => {
        console.log("Descargando pedidos...");
        setTimeout(() => {
            resolve("PEDIDOS correctamente descargados después de 3 segundos");
        }, 3000);
    });
}

// * forma "correcta" de hacerlo. porque estás ejecutando ambas peticiones en SIMULTANEO
const app = async () => {
    try {
        // ! aqui se espera que todas las promesas se resuelvan (comienzan en simultaneo, sin que una esperer detenga el inicio de la otra)
        // Promise.all() es un método que toma un arreglo de promesas y devuelve una nueva promesa. Esta promesa resultante se resuelve cuando todas las promesas en el arreglo se han resuelto o se rechaza tan pronto como una de las promesas en el arreglo se rechaza (Las demás promesas aún continúan en segundo plano, pero sus resultados o rechazos no afectan el resultado de Promise.all())
        const peticion = await Promise.all([
            descargarNuevosClientes(),
            descargarNuevosPedidos(),
        ]);
        console.log(peticion);
    } catch (error) {
        console.log(error);
    }
};

// forma "incorrecta" de hacerlo. porque estas deteniendo una peticion por ejecutar otra
// const app = async () => {
//     try {
// ! ESTE AWAIT BLOQUEA LA EJECUCIÓN DE TODA LA FUNCION (ES DECIR, TAMBIÉN DEL AWAIT DE ABAJO)
//         const peticion = await descargarNuevosClientes();
//         console.log(peticion);

//         const peticion2 = await descargarNuevosPedidos();
//         console.log(peticion2);
//     } catch (error) {
//         console.log(error);
//     }
// };

app();
