// * .repeat
const producto = "Monitor 20 Pulgadas";
console.log(producto);

const texto = " en promoción".repeat(3);
console.log(texto);
const texto1 = " en descuento";
console.log(texto1);
const texto2 = texto1.repeat(5);
console.log(texto2);

console.log(`${producto}${texto1}`);

// ? al ponerle un decimal en repeat... este lo redondea hacia abajo
const pregunta = " pregunta".repeat(2.8);
console.log(pregunta);

// * .split divide un string
const hobbies =
    "estudiar programación, ver a mi novia, ver peliculas, ver series, escuchar musica, jugar futbol";
console.log(hobbies.split(", "));
