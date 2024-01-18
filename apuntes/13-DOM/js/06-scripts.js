const encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado); // ! A VECES, en vez de mostrarte el elemento, TE MUESTRA MAS INFORMACION SOBRE ESE H1 Y TODAS LAS PROPIEDADES A LAS QUE PUEDES ACCEDER y modificar

// ? diferencia entre innerText y textContent
console.log(encabezado.innerText); // si en mi css uso     visibility: hidden; entonces no lo mostrara en consola

console.log(encabezado.textContent); // si en mi css uso     visibility: hidden; SÍ lo mostrara en consola
console.log(encabezado.innerHTML); // lo trae como HTML

const nuevoHeading = "Heading añadido con DOM";
encabezado.textContent = nuevoHeading;

// tambien puedes añadirle tipo chaining o encadenamiento el textContent
const encabezado2 = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado2);

// modificando imagenes
const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg";
