// Class patern
// es de un patron de categoria creacion

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const sebas = new Persona("Sebastian Grandes", "sebas@gmail.com");
console.log(sebas);
