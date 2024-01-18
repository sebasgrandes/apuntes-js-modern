// ! getElementsByClassName (cada vez menos comun). selecciona varios o uno

const hero = document.getElementsByClassName("hero");
console.log(hero);

// puede seleccionar varios elementos con una misma clase existente
const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores); // hay 4

// si una clase no existe retorna el HTMLCollection vacio
const noExiste = document.getElementsByClassName("no-existe");
console.log(noExiste);
