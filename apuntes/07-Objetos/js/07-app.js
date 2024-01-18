const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 200,
    disponible: true,
};

// ! a pesar de ser un const. las propiedades de mi objeto SI SE PUEDEN MODIFICAR Y BORRAR

producto.disponible = false;
console.log(producto.disponible);

delete producto.precio;
console.log(producto);
