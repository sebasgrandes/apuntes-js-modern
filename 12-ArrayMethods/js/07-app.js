const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
const meses2 = [
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];
const estaciones = ["Verano", "Invierno", "Otoño", "Primavera"];

// ! concatenar 2 o más arreglos
// el orden importa en ambos

// * .concat()
const resultado = meses.concat(meses2, estaciones, "otro mess");
console.log(resultado);

// * spread operator
const resultado2 = [...meses, ...meses2, ...estaciones, "otro mess 2"]; // si le pones "..." antes del string añadido se comporta distinto, ojo
console.log(resultado2);
