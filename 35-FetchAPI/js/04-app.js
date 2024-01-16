const botonCargar = document.querySelector("#cargarAPI");

botonCargar.addEventListener("click", obtenerDatos);

function obtenerDatos() {
    const url = "https://picsum.photos/list";

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => {
            console.log(resultado);
            imprimirHTML(resultado);
        });
}

function imprimirHTML(datos) {
    const contenido = document.querySelector(".contenido");
    let html = "";

    datos.forEach((dato) => {
        const { author, post_url } = dato;

        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver imagen</a>
        `;
    });

    contenido.innerHTML = html;
}
