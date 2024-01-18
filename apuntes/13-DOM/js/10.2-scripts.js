// ! generar HTML con JS (pt 2)

// generando un card de forma dinamica

const parrafo1 = document.createElement("p");
parrafo1.textContent = "¡NUEVO CONCIERTO!";
parrafo1.classList.add("categoria", "concierto"); // sin punto

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Dubstep w/ NIMDA";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "1$ por persona";
parrafo3.classList.add("precio");

const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

const card = document.createElement("div");
card.classList.add("card");
card.appendChild(imagen);
card.appendChild(info);

const contenedorCards = document.querySelector(".hacer .contenedor-cards"); // al seleccionar 2 clases lo realizo de forma más especifica (ademas pq abajo hay otra clase tmb llamada contenedor-cards, y se mesclaria)

// contenedorCards.appendChild(card); // para añadir al ultimo
contenedorCards.insertBefore(card, contenedorCards.children[1]); // para añadir antes de [1]

// console.log(card);
