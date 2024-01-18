// ! for ...IN: ITERA SOBRE OBJETOS. (version mas simplificada del for y forEach)

const automovil = {
    mode: "Camaro",
    year: 1969,
    motor: "6.0",
};

for (let propiedad in automovil) {
    console.log(propiedad + " - esta es mi propiedad");
}

console.log("-------");

for (let propiedad in automovil) {
    console.log(automovil[propiedad] + " - este es el valor de mi propiedad");
}

console.log("-------");

// ECMAS 7
for (let [llave, valor] of Object.entries(automovil)) {
    console.log(llave);
    console.log(valor);
}
