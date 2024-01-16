const contador = () => {
    let numero = 0;
    // tiene acceso a la variable numero, que está definida en el ámbito de la función contador. A pesar de que la función contador ha terminado su ejecución, el cierre (closure) incrementar "recuerda" y retiene acceso a la variable numero, lo que le permite modificarla y mostrar su valor en cada llamada a contador1().
    return function incrementar() {
        // ! la funcion incrementar es mi closure
        numero++;
        return console.log(numero);
    };
};

const mifun = contador();
mifun();
mifun();
