// ! Maps
// son listas ordenadas con LLAVES Y VALORES (ya no solo valores como el Set)
const mapex = new Map();

// * tanto la llave como el valor puede ser cualquier tipo de dato
// se añaden con...
mapex.set("nombres", "Sebastian Andre");
mapex.set("apellidos", "Grandes Conqui");
mapex.set("Edad", 22);

console.log(mapex);

// podemos obtener los valores que existen en un map
console.log(mapex.get("nombres"));
console.log(mapex.get("Edad"));

// funciona con: .delete, .has, .cleaR

// TAMBIÉN Funciona el .forEach, y como este si tiene un index, si le puedes colocar un segundo argumento al .forEach
mapex.forEach((datex, indexsa) => {
    console.log(`${datex} yyy ${indexsa}`);
});

// también puedes iniciar tu new Map(convalores)
// ejemplo const mapox = new Map([["nombre", "sebastian"], ["apellido", "grandes"]])

// también puedes reescribir los valores del map
mapex.set("nombres", "Andrea Xasd Yras");
console.log(mapex);
