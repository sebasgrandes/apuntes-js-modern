// Evitar la propagación con contenido creado...
const parrafo1 = document.createElement("P");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria");
parrafo1.classList.add("concierto");

// Segundo parrafo
const parrafo2 = document.createElement("P");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

// 3er parrafo...
const parrafo3 = document.createElement("p");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");
// ! clase: este metodo de agregar funciones es especial cuando generas el contenido en html y le quieres agregar funciones conforme el contenido se va generando
// * si no usas argumentos puedes colocar tu funcion de la sgte manera:
// parrafo3.onclick = nuevaFuncion; // no coloques parentesis o mandaras a llamar tu funcion automaticamente
// * si usaras argumentos coloca tu funcion de la sgte manera: como funcion anonima
parrafo3.onclick = function () {
    // no coloques tu funcion como el anterior pq tmb mandaras a llamar tu funcion
    nuevaFuncion(1);
};

// crear el div...
const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

// Crear el Card..
const contenedorCard = document.createElement("div");
contenedorCard.classList.add("contenedorCard");

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(contenedorCard); // al inicio info

// ! esta tecnica funciona bien cuando generas contenido con HTML
function nuevaFuncion(id) {
    console.log("diste click en el precio", id);
}
