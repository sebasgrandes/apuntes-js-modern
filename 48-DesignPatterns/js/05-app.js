// los 1eros 4 fueron de creacion... este es de organizacion
// module pattern
const mostrarCliente = function () {
    console.log("oa");
};

export default oa;

// module pattern: forma antigua de hacerla antes de ES 2015...
const module1 = (function () {
    const nombre = "Sebas";
    function hi() {
        console.log("hi");
    }
    return { nombre, hola };
})();

// en el otro lado seria asi: console.log(module1.hi())
