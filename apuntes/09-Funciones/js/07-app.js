iniciarApp(); // tengo una sola app conformada por varias funciones

function iniciarApp() {
    console.log("iniciando app espere...");
    segundaFuncion(); // se recomienda hacerlo de esta forma (colocar al final una funcion cuando la principal termine)
}

function segundaFuncion() {
    console.log("desde la 2da funcion");
    usuarioAtenticado("Sebastian123");
}

function usuarioAtenticado(usuario) {
    console.log(`Autenticando al usuario ${usuario}, por favor espere...`);
    console.log(`El usuario ${usuario} ha sido correctamente autenticado`);
}
