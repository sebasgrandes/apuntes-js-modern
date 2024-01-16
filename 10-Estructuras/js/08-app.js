const puntaje = 450;

function revisarPuntaje() {
    if (puntaje > 400) {
        console.log("Excelente");
        return; // se sale de la ejecucion del codigo (termina la funcion). evitando la ejecucion del siguiente if
    }
    if (puntaje > 300) {
        console.log("Bien hecho");
        return;
    }
}

revisarPuntaje(puntaje);
