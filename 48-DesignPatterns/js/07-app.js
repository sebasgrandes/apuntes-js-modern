// namespaces: patron para la organizacion de codigo. ayuda a evitar colision con nombre en el scope global de js, util en aplicaciones grandes. la idea de namespaces es crear un objeto global en tu aplicacion y agregar todas las funciones dentro en lugar de crear multiples funciones y objetos que se puedan acceder de forma global

const restaurantApp = {};

restaurantApp.platillos = [
    {
        nombre: "Salchipapas",
        precio: 10,
    },
    {
        nombre: "Hamburguesa",
        precio: 20,
    },
    {
        nombre: "Alitas",
        precio: 30,
    },
    {
        nombre: "Broaster",
        precio: 40,
    },
    {
        nombre: "Pollo a la brasa",
        precio: 50,
    },
];

// mostrarPlatillos, preparandoPlatillo, y agregarPlatillo son métodos del objeto funciones que es una propiedad del objeto restaurantApp. Específicamente, son propiedades del objeto funciones, pero dado que los valores de estas propiedades son funciones, se les puede considerar "métodos" en el contexto de la programación orientada a objetos. En la OOP, un "método" es básicamente una función que es propiedad de un objeto.

// todas las siguientes son formas validas de definir metodos en un objeto
restaurantApp.funciones = {
    // funcion nombrada
    mostrarPlatillos: function aaa(platillos) {
        console.log(
            "Bienvenidos a nuestro restaurant, contamos con los siguientes platillos:"
        );
        platillos.forEach((platillo, index) => {
            console.log(`N° ${index}: ${platillo.nombre}`);
        });
    },
    // funcion anonima
    // funcion (anonima) de flecha
    preparandoPlatillo: (id) => {
        console.log(`Preparando ${restaurantApp.platillos[id].nombre}...`);
    },
    // Shorthand Method
    agregarPlatillo(nombre, precio) {
        restaurantApp.platillos.push({ nombre, precio });
        console.log("Platillo agregado...");
    },
    // forma incorrecta no valida: // function mostrarPla(platillos) { } // esta sintaxis no es válida dentro de la notación literal de un objeto porque no se está asignando la función a ninguna propiedad del objeto
};

console.log(restaurantApp);
restaurantApp.funciones.agregarPlatillo("Salchipollipapex", 60);
restaurantApp.funciones.mostrarPlatillos(restaurantApp.platillos);
restaurantApp.funciones.preparandoPlatillo(2);
