document.addEventListener("visibilitychange", imprimirMensaje);

function imprimirMensaje() {
    if (document.visibilityState === "visible") {
        console.log("Continúa la reproduccion del video");
    } else {
        console.log("Para la reproducción del video");
    }
}
