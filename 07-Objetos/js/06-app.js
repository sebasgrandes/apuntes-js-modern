const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 200,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m",
        },
        fabricacion: {
            pais: "China",
        },
    },
};

const {
    nombre,
    informacion: {
        fabricacion,
        fabricacion: { pais },
    },
} = producto;

console.log(nombre);
// console.log(informacion); // * no existe
console.log(fabricacion); // esta si existe
console.log(pais); // si existe
