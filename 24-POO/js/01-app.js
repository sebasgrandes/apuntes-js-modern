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
}

// lo instancias
const sebastian = new Cliente("Sebastian", 5000);

console.log(sebastian);

// -------------------------------------------------------------------------------------------------------------------------

// * también puedes usar el class expression (poco usada)

// const cliente = Cliente {
//     constructor() {

//     }
// mostrarInformacion() {

// }
// }
