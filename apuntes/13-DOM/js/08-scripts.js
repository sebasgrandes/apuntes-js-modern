// ! traversing the DOM: navegar sobre los distintos NODOS o elementos HTML de tu sitio o aplicacion web

const navegacion = document.querySelector(".navegacion");

console.log(navegacion);
console.log(navegacion.firstElementChild); // trae el primer elemento
console.log(navegacion.lastElementChild); // trae el ultimo elemento

// ! mostrando los elementos como nodos (TRAVERSING THE DOM: padre a hijo)
// al mostrarlos como nodos se muestran sus demas propiedades disponibles
// console.log(navegacion.childNodes); // SÍ considera los espacios en blanco (saltos de linea del editor de codigo)
// console.log(navegacion.children); // NO considera los espacios en blanco (lista solo elementos reales) (MEJOR)

// console.log(navegacion.children[0]);
// console.log(navegacion.children[0].nodeName); // etiqueta
// console.log(navegacion.children[0].nodeType); // nodo de tipo 1 (enlace). hay hasta el 12, buscalo en la documentacion

const card = document.querySelector(".card");
// console.log(card);

// card.children[1].children[1].textContent =
//     "Nuevo heading desde traversing the DOM";
// console.log(card.children[1].children[1].textContent);

// card.children[0].src = "img/hacer3.jpg";
// console.log(card.children[0]);

// ! TRAVERSING THE DOM: hijo a padre

// console.log(card.parentNode); // SÍ considera los espacios en blanco
// console.log(card.parentElement.parentElement); // NO considera los espacios en blanco (MEJOR) // puedes usarlo varias veces

// ! TRAVERSING THE DOM: hermano a hermano
// console.log(card);
// * recorrer al siguiente
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling); // puedes usarlo varias veces

// * recorrer al previo
// const ultimoCard = document.querySelector(".card:nth-child(4)");
// console.log(ultimoCard);
// console.log(ultimoCard.previousElementSibling);
// console.log(ultimoCard.previousElementSibling.previousElementSibling); // puedes usarlo varias veces
