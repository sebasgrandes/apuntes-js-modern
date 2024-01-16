// fetch API es nativo de JS, solo soporta texyo o JSON, no xml
// con fetch API puedes enviar o recibir datos
// antes se usaba AJAX, ahora se recomienda fetch

// ! NO HAGAS TANTO CASO A LOS COMENTARIOS DE ABAJO, ALGUNOS ESTAN MAL

const cargarTxt = document.querySelector("#cargarTxt");

cargarTxt.addEventListener("click", obtenerDatos);

function obtenerDatos() {
    // usualmente usamos el json o text. que es la informacion de la consulta que realizamos
    const url = "data/datos.txt";

    fetch(url)
        // fetch API funciona con promises: si el promise se cumple, entonces devuelve los datos. no tienes que escribir resolve o reject, ya automaticamente pasa la respuesta
        // ! realizamos, iniciamos nuestra solicitud HTTP GET a la URL especificada (para obtener datos de esta URL)
        // Una solicitud HTTP (Hypertext Transfer Protocol) es una solicitud que se realiza para obtener recursos, como documentos HTML, imágenes, archivos JSON, u otros tipos de datos, desde un servidor web
        // ! .fetch devuelve una promesa que resuelve en un objeto Response. El objeto Response contiene información sobre la respuesta HTTP, incluyendo el estado de la solicitud, los encabezados y los datos recibidos.
        // El argumento (o sea toda la funcion dentro...) de la función then es una función que se ejecutará cuando la promesa se resuelva con éxito.
        // ? ok cada .then() espera una promesa como resultado de la función anterior para poder funcionar correctamente. (es decir, espera que se resuelva - fullfilled)
        .then((respuesta) => {
            // respuesta toma mi Response de haber usado el fetch // respuesta es el objecto general
            // ! "respuesta" representa es una referencia al objeto de respuesta (respuesta HTTP) que devuelve la función fetch() cuando se completa la solicitud HTTP. Esta respuesta incluye información sobre la respuesta HTTP, como el estado de la respuesta, encabezados, y el cuerpo de la respuesta.
            // * El cuerpo de la respuesta (HTTP) es la parte de la respuesta que contiene los datos o recursos solicitados (en este caso, el archivo .txt con su contenido respectivo; en otros casos, será un archivo en formato .json con el contenido respectivo).
            // proto: son como las funciones que podemos aplicarle
            console.log(respuesta); // mostramos el objeto Response
            console.log(respuesta.status);
            // status: 200 -> se logró hacer la consulta, pudo encontrar el archivo y está todo listo para hacer el siguiente paso (que le diras)
            // status: 404 -> no lo encontró
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);
            // en este caso es texto, por lo que usamos .text()
            // ? ok devolvemos (return) la promesa - que devolvió la funcion (respuesta.text()) - al siguiente (encadenamiento) .then  (en donde se resolverá dicha promesa -> analisis txt y paso del objecto js como argumento en la 2da .then)

            return respuesta.text();

            // para .json en la app de clima: // ? ok llamamos .json() en la respuesta para extraer el cuerpo de la respuesta HTTP (el contenido .json) como un objeto JavaScript // * es decir, realiza el procesamiento necesario para convertir los datos JSON recibidos desde la API en un objeto JavaScript que se puede usar en mi aplicación

            // .text() es una función que se llama en la respuesta para extraer el cuerpo de la respuesta HTTP como un objeto JavaScript // ! es decir, realiza el procesamiento necesario para convertir los datos txt recibidos, en un objeto JavaScript
            // finalmente retornamos O DEVOLVEMOS dicho objeto (el valor de la 1era promesa encadenada con .then), el cual se pasara a la siguiente funcion .then
        })
        // ! este then se encarga de procesar los DATOS recibidos de la respuesta
        // ? ok este 2do .then se ejecutará cuando la promesa devuelta por la funcion resultado.json() se complete con éxito (fulfilled). En otras palabras, se ejecutará cuando el proceso de análisis del JSON en la respuesta HTTP se haya realizado correctamente.
        .then((datos) => {
            // * datos contiene el cuerpo de la respuesta como objecto en js.
            console.log(datos);
        })
        .catch((error) => {
            // es buena idea poner el .cath para poder saber donde está el error
            console.log(error);
        });
}
