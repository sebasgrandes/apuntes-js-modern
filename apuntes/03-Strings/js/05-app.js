const producto = "Monitor 20 Pulgadas";
console.log(producto);

// .replace para reemplazar
console.log(producto.replace("Pulgadas", '"'));
console.log(producto.replace("Monitor", "Monitor Curvo"));

// .slice para cortar
console.log(producto.slice(0, 1));
console.log(producto.slice(0, 2));
console.log(producto.slice(0, 3));
console.log(producto.slice(0, 10));
console.log(producto.slice(8));

// .substring para cortar y extraer
console.log(producto.substring(0, 10));

// ? diferencia entre slice y substring
console.log(producto.slice(2, 1)); // no realiza nada
console.log(producto.substring(2, 1)); // * funciona pero como que lo corrige, realizandolo al reves: substring(1, 2)

// mostrar mi inicial?

const usuario = "Sebastian";
console.log(usuario);
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0)); // otra forma,  cogemos o cortamos la 1er letra
