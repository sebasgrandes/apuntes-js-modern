// un JSON es bastante similar a un objeto en JS. la unica diferencia es que las llaves van entre comillas ""
// JSON es una tecnologia de transporte: si tienes un proyeco en node, django, rubyonrails y consultas una base de datos para mostrar algunos clientes y quieres agregar algo de JS, lo ideal seria que la respuesta no se imprima con las funciones de esas tecnologias, sino que se tenga una respuesta como JSON para que la podamos consumir. porque por si solo JS, en la forma en la que lo estamos viendo no puede ocnsultar una base de datos.
// significa que JSON es un lenguaje de transporte con el que comunicamos un BACKEND hecho en JAVA con un FRONTED hecho en JS, etc etc
// un lenguaje que entiende bien JS es JSON. JSON permite que conectes tus apps hecha en php, django
// no importa el lenguaje que uses, JSON almacena los datos con una sintaxis similar

const btnCargar = document.querySelector("#cargarJSON");

btnCargar.addEventListener("click", cargarJSON);

function cargarJSON() {
    const url = "data/empleado.json";
    fetch(url)
        .then((resultado) => resultado.json())
        .then((datos) => {
            console.log(datos); // JS convierte el JSON en objeto (en este caso)

            imprimirHTML(datos);
        });
}

function imprimirHTML({ id, nombre, empresa, trabajo }) {
    const contenido = document.querySelector(".contenido");
    contenido.innerHTML = `
        <p>ID: ${id}</p>
        <p>nombre: ${nombre}</p>
        <p>empresa: ${empresa}</p>
        <p>trabajo: ${trabajo}</p>
    `;
}
