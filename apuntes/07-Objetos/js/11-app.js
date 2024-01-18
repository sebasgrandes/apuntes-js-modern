const nombre = "hola";
const precio = 20;

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function () {
        console.log(`el producto ${nombre} tiene un precio de ${precio}`);
    },
    showYeah: function () {
        console.log(
            `el producto ${this.nombre} tiene un precio de ${this.precio}`
        );
    },
};

producto.mostrarInfo();
// el this sirve para (referirse a un objeto en si mismo o en el cual fue declarado) buscar los valores que existen en el mismo objeto, en lugar de buscarlos a fuera
producto.showYeah();
