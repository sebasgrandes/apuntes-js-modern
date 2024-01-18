// Singleton: garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a esa instancia
// no permitira crear varias instancias de un objeto de una misma clase... siempre retornara el objeto instanciado

let instancia = null;

// Una clase en JavaScript es una plantilla para crear objetos
class Personaunique {
    /* sobre el constructor
    - El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase. Se ejecuta automáticamente cuando se crea una nueva instancia de la clase.
    - El constructor en una clase de JavaScript es un método especial que se llama automáticamente cuando se crea una nueva instancia de esa clase utilizando la palabra clave new. El constructor se utiliza para inicializar las propiedades y realizar cualquier otra configuración inicial necesaria en el objeto recién creado.
    - En este ejemplo, el constructor Personaunique toma dos argumentos (nombre y edad) y utiliza esos valores para inicializar las propiedades nombre y edad de la instancia que se crea.
    */
    constructor(nombre, email) {
        // El constructor de la clase "Personaunique" toma dos parámetros, "nombre" y "email", y verifica si ya existe una instancia de la clase utilizando la variable "instancia"...
        if (!instancia) {
            // Si no existe una instancia, se crea una nueva instancia con los valores proporcionados para "nombre" y "email"
            // ... y luego se asigna esa instancia a la variable "instancia" usando "this"
            (this.nombre = nombre), (this.email = email), (instancia = this);
            // * this hace hace referencia a la instancia actual de la clase
            // * "instancia de clase" === objeto que esta siendo creado a partir de una clase.
            // instancia = this: está asignando la instancia actual de la clase (this) a la variable instancia
        } else {
            return instancia;
        }
    }
}

const persona1 = new Personaunique("Sebastian Grandes", "sebas@gmail.com");

const persona2 = new Personaunique("Andre Grandes", "asdasd@gmail.com");

// imprimen lo mismo
console.log(persona1);
console.log(persona2);

console.log(instancia);
