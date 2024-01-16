const array = ["Sebastian", "Andrea", "Grandes"];
const miset = new Set(["Gaaa", "raaa", "taaaaa"]);
const mimap = new Map();

mimap.set("nombre", "Sebastian");
mimap.set("apellido", "Grandes");
mimap.set("numero", "957245687");

console.log(array);
console.log(miset);
console.log(mimap);

// * default
// cada uno de estos (array, set y map) tiene su propio iterador por defecto
for (let a1 of array) {
    console.log(a1);
}
for (let a2 of miset) {
    console.log(a2);
}
for (let a3 of mimap) {
    console.log(a3);
}

// * values iterator
// .values() itera las llaves
for (let values of array.values()) {
    console.log(values);
}
for (let values of miset.values()) {
    console.log(values);
}
for (let values of mimap.values()) {
    console.log(values);
}

// * keys iterator
// .keys() itera los valores
for (let keys of array.keys()) {
    console.log(keys);
}
for (let keys of miset.keys()) {
    console.log(keys);
}
for (let keys of mimap.keys()) {
    console.log(keys);
}

// * entries iterator
// .entries(), entrega llave y valor. agregará una llave si no existe, o nos devolverá el valor
for (let entry of array.entries()) {
    console.log(entry);
}
for (let entry of miset.entries()) {
    console.log(entry);
}
for (let entry of mimap.entries()) {
    console.log(entry);
}
