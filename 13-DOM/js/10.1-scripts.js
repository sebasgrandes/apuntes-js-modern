// ! generar HTML con JS (pt 1)

// * creando elemento
const enlace = document.createElement("a"); // tmb puede ser en mayusculas

enlace.textContent = "New link"; // agregando texto
enlace.href = "/nuevo_enlace"; // agregando href
enlace.target = "_blank"; // agregando target
enlace.setAttribute("data-enlace", "nuevo-enlace"); // agregando un atributo
enlace.classList.add("nueva-clase"); // agregando una clase

enlace.onclick = miFuncion; // sin parentesis pq sino lo mandarias a llamar

console.log(enlace);

// * agregandolo al DOM

const navegacion = document.querySelector(".navegacion"); // seleccionando navegacion

// agregandolo AL FINAL
// navegacion.appendChild(enlace);

// agregandolo EN UN SITIO ESPECÍFICO
// console.log(navegacion.children); //viendo mis nodos para saber donde lo agregare
navegacion.insertBefore(enlace, navegacion.children[1]); // inserto ANTES del elemento de posicion 1 de mi navegacion

function miFuncion() {
    alert("diste clickkkkkkkkkk");
}
