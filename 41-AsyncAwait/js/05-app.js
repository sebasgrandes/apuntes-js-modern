const url = "https://picsum.photos/list";

document.addEventListener("DOMContentLoaded", app);

// function app() {
// * consumir api con fetch
// fetch(url)
//     .then((respuesta) => respuesta.json())
//     .then((resultado) => console.log(resultado));
// }

// * consumir api con async await
async function app() {
    try {
        // ! aqui si debemos primero esperar a que se termine la consulta para despues convertirla a json
        const respuesta = await fetch(url); // el fetch devuelve un objeto Promise (promesa)... el cual resuelve en un objeto Response que tiene detalles sobre la respuesta http
        const resultado = await respuesta.json(); // similar aqui... se devuelve un objeto Promise... el cual se resuelve con el cuerpo de la respuesta (Response) en formato json una vez que se haya finalizado
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
