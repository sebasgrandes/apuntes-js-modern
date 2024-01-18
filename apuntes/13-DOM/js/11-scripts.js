const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultarfooter); // no es necesario los parentesis en la funcion

function mostrarOcultarfooter() {
    // ! al usar classList se entiende que usas clases, por lo que no es necesario agregar el punto (.)
    // .contains para ver si contiene o no la clase activo
    if (btnFlotante.classList.contains("activo")) {
        btnFlotante.classList.remove("activo");
        footer.classList.remove("activo");
        btnFlotante.textContent = "Idioma y Moneda";
    } else {
        btnFlotante.classList.add("activo");
        footer.classList.add("activo");
        btnFlotante.textContent = "X Cerrar";
    }
}
