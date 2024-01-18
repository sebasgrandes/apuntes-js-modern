// los prototypes evolucionarion en la POO a clases
// los prototypes evolucionaron en la POO a clases, veremos sus similitudes y diferencias
// ya vimos la POO pero con funciones (object constructor), ahora lo veremos con clases
// las clases sigue siendo lo mismo que los prototypes pero son mas sencillas de crear (con respecto a la sintaxis)

// * a esta forma de crear se le llama class declaration (ES LA MAS USADA)
class Cliente {
    // metodo de constructor, le pasamos los valores que tendrá el objeto una vez es instanciado
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    // similar al prototype, creas funciones que son especificas para esta clase
    mostrarInformacion() {
        return `El nombre del cliente es ${this.nombre} y su saldo es de $${this.saldo}`;
    }

    // esta pertenece a la clase, no al objeto (es decir, al proto, no se ubica dentro de el), por lo que no lo puedes llamar desde la clase
    static estatica() {
        return `Esta es una estática`;
    }
}

// lo instancias
const sebastian = new Cliente("Sebastian", 5000);

console.log(sebastian);
console.log(sebastian.mostrarInformacion());
console.log(Cliente.estatica());
// console.log(sebastian.estatica()); // no se puede