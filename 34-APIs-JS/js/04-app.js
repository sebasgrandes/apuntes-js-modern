const btnEntrar = document.querySelector("#abrir-pantalla-completa");
const btnSalir = document.querySelector("#salir-pantalla-completa");

btnEntrar.addEventListener("click", abrirpantallaCompleta);
btnSalir.addEventListener("click", cerrarpantallaCompleta);

function abrirpantallaCompleta() {
    document.documentElement.requestFullscreen(); // selecciono que el del document, la parte de documentElement (todo el html) se ponga en fullscreen, y no solo un elemento en especifico
    // console.log(document);
    console.log(document.documentElement);
}

function cerrarpantallaCompleta() {
    document.exitFullscreen();
}
