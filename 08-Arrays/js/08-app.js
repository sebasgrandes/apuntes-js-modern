// * destructuring (sacar de la estructura) pero ahora PARA ARRAYS

// destructuring con arreglos

const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, , , quinto] = numeros;
console.log(primero);
console.log(segundo);
console.log(quinto);

const paises = ["Perú", "Panamá", "Puerto Rico", "Portugal"];
const [first, ...others] = paises;
console.log(first);
console.log(others);
