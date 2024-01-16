// los eventos suceden en la ventana global (scroll, etc. puedes verla dandole clg window creo)

window.addEventListener("scroll", () => {
    const premium = document.querySelector(".premium");
    const ubicacion = premium.getBoundingClientRect(); // getBoundingClientRect: te da informacion sobre la posicion a la que te encuentras respecto del ".premium"
    // console.log(ubicacion);
    // console.log(ubicacion.top);
    if (ubicacion.top < 784) {
        console.log("animacion activada...");
    } else {
        console.log("aun no se activa la animacion...");
    }
});
