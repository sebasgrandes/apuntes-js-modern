// ! composition: alternativa popular a clases
// se usa cuando tienes funciones que se pueden compartir entre objetos (crear funciones que pueden usar los objetos). en vez de crear clases y heredarlas.
// * tu mismo creas tus funciones (Cliente y Empleado) que tu mismo vas armando y tu mismo defines que funciones son necesarias para cada objeto (las 3 primeras para ambos objetos, las 2 ultimas es 1 para cada 1)

// el "()" a la derecha del =>, es decir, el "cuerpo" de la funcion... es sinonimo de "devolver" lo que está dentro de esos parentesis: pueden ser objetos literales, con propiedades, o metodos... hasta un "clg" y demás cosas separadas por comas por ejemplo "clg(`asdasd${a}`), a*b"
// ! el "({...})" significa que la funcion devuelve un objeto literal
// Si deseas devolver un objeto literal usando una función de flecha sin cuerpo (sin usar la palabra clave return), debes envolver el objeto con paréntesis (). Si no lo haces, las llaves serán interpretadas como el bloque de la función en lugar de un objeto literal.
// esta es una funcion creada como function expresion
const obtenerNombre = (infope) => ({
    // ! colocamos un método llamado mostrarNombre dentro del objeto que se devuelve
    // también podríamos colocar propiedades (clave-valor) por ejemplo nombre: "Sebastian"
    mostrarNombre() {
        console.log(infope.nombre);
    },
});

const obtenerEmail = (infope) => ({
    mostrarEmail() {
        console.log(infope.correo);
    },
});

const crearEmail = (infope) => ({
    escribirEmail(email) {
        infope.correo = email;
    },
});

// * las 3 anteriores function expressions se añaden tanto a la funcion Empleado como a la de Empresa... mientras que las 2 de abajo se añade 1 a cada 1 (1 a Empleado y 1 a Empresa)

const obtenerEmpresa = (infope) => ({
    mostrarEmpresa() {
        console.log(infope.empresa);
    },
});

const obtenerPuesto = (infope) => ({
    mostrarPuesto() {
        console.log(infope.puesto);
    },
});

// ----------------------------------------------------------------------------------------------

// * esto es composition...

function Cliente(nombre, correo, empresa) {
    let info = {
        nombre,
        correo,
        empresa,
    };

    // al llamar la funcion... obtenerNombre(info)... estoy devolviendo o retornando el objeto dentro de ella
    // como argumentos de la mandada a llamar de mis funciones uso mi objeto de arriba
    return Object.assign(
        info,
        obtenerNombre(info),
        obtenerEmail(info),
        obtenerEmpresa(info),
        crearEmail(info)
    ); // ! Object.assign() es una función en JavaScript que se utiliza para copiar los valores de todas las propiedades enumerables, o metodos, de uno o más objetos fuente (obtenerNombre(info)) a un objeto destino (info). Y (Object.assign()) devuelve este objeto. (Si la propiedad ya existe en el objeto destino, su valor se sobrescribe.)...
    // * Y YA AL FINAL RETORNO ESTE mismo objeto CON "return"
}

function Empleado(nombre, correo, puesto) {
    let info = {
        nombre,
        correo,
        puesto,
    };

    return Object.assign(
        info,
        obtenerNombre(info),
        obtenerEmail(info),
        obtenerPuesto(info),
        crearEmail(info)
    );
}

// ----------------------------------------------------------------------------------------------

// ! eso significa que ahora "cliente" es una copia (del contenido) del objeto "info" (CONTIENE LAS PROPIEDADES nombre, correo y puesto... ADEMÁS DE LOS MÉTODOS)
const cliente = Cliente("Sebastian Grandes", null, "Desarrollador");
// ! por eso podemos llamar a su método .mostrarNombre()
cliente.mostrarNombre();
cliente.escribirEmail("sebas@gmail.com");
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log("--------------------------");

const empleado = Empleado("Andre Conqui", null, "Ambiental");
empleado.mostrarNombre();
empleado.escribirEmail("capacitaciones@ltaindustrial.com");
empleado.mostrarEmail();
empleado.mostrarPuesto();
