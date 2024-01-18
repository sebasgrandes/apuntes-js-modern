// ahora importaremos un JSON que es un arreglo que tiene variso objectos

const botonJSON = document.querySelector("#cargarJSONArray");

botonJSON.addEventListener("click", consultarJSON);

function consultarJSON() {
    const url = "data/empleados.json";

    fetch(url)
        .then((resultado) => resultado.json())
        .then((datos) => {
            console.log(datos);
            imprimirHTML(datos);
        });

    // console.log("consultado");
}

function imprimirHTML(datox) {
    const contenido = document.querySelector(".contenido");
    let html = "";
    datox.forEach((objetin) => {
        const { id, nombre, empresa, trabajo } = objetin;
        html += `
            <p>ID: ${id}</p>
            <p>nombre: ${nombre}</p>
            <p>empresa: ${empresa}</p>
            <p>trabajo: ${trabajo}</p>
        `;
        console.log(html);
    });
    contenido.innerHTML = html;
}
