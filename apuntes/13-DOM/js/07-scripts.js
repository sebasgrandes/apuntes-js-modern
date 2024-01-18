const encabezado = document.querySelector("h1");
console.log(encabezado.style); // muestra todas los estilos de css que estan disponibles en javascript

// modificando el css
encabezado.style.backgroundColor = "red"; // backgroundColor -> background-color
encabezado.style.fontFamily = "Arial";
encabezado.style.textTransform = "uppercase";

// si bien se puede modificar el css desde js, es recomendable dejarselo a css

// ! MEJOR, en cambio, en js podrias agregar, modificar o eliminar clases
const card = document.querySelector(".card");
card.classList.add("nueva-clase", "segunda-clase");
card.classList.remove("card");
console.log(card.classList);
