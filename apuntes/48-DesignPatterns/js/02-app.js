// Constructor Pattern
// estas son basicamente clases abstractas... basicamente significan que: no pueden instanciarse y solo sirven para hacerles un extends
// ... js no tiene soporte a estas clases por lo que lo de arriba se cumple en otros lenguajes de programacion

class Persona {
    constructor(nombre, email) {
        (this.nombre = nombre), (this.email = email);
    }
}

const persona = new Persona("Sebastian Grandes", "sebas@gmail.com");
console.log(persona);

class Cliente extends Persona {
    constructor(nombre, email, puesto) {
        super(nombre, email), (this.puesto = puesto);
    }
}

const cliente = new Cliente("Andre Grandes", "sean@gmail.com", "Developer");
console.log(cliente);
