// en el set le puedes agregar cualquier valor

// ! en el weakSet le puedes agregar SOLO objetos
// supuestamente se llama set debil

const weka = new WeakSet();

const objetin = {
    nombre: "Sebastian",
    edad: 22,
};

weka.add(objetin);
console.log(weka);

// también se puede eliminar, y el .has

// no funciona el size y no son iterables
