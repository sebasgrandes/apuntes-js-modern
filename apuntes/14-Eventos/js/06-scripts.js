// event bubling: el evento se propaga... se va hacia el padre por ejemplo al clickar un hijo
// para evitar el event bubbling debes usar e.stopPropagation(); o sino el delegation

const card = document.querySelector(".card");
const info = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

card.addEventListener("click", (e) => {
    e.stopPropagation(); // evita el event bubbling
    console.log("click en card");
});
info.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("click en info");
});
titulo.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("click en titulo");
});
