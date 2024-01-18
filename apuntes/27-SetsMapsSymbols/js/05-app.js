// nunca un simbol es igual a otro

const sym1 = Symbol("1");
const sym2 = Symbol("1");
console.log(sym1 === sym2);

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

persona[nombre] = "Sebastiannnn"; // * así sí añades un Symbol
persona[apellido] = "Grandesssss";

persona.nombre = "Andreaaaa"; // así no añades un Symbol, solo un elemento al objeto
persona.apellidox = "Lwqeqwe";

console.log(persona);

// no es iterable
for (let i in persona) {
    console.log(i);
}

// asi se le añade una descripcion al Symbol
const edad = Symbol("Mi edad es 22");
persona[edad] = "Edadddd";
console.log(persona);
console.log(edad);
console.log(persona[edad]);
