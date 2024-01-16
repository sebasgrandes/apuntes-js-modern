// existen atributos privados: solo se puede acceder desde la clase (es decor los metodos dentro de la clase) NO DESDE EL OBJETO
// publicos: se puede acceder a las propiedades del objeto constructor (como this.nombre) desde la clase (mostrarInformacion()) o desde el objeto (sebastian)
// y protected

class Cliente {
    #nombre; // asi lo haces privado
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `El nombre del cliente es ${this.#nombre} y su saldo es de $${
            this.saldo
        }`; // recuerda acceder al privado con el "#"
    }

    #apellido;
    setDesarrollo(apellido) {
        this.#apellido = apellido;
    }

    getDesarrollo() {
        return this.#apellido;
    }
}

const sebastian = new Cliente("Sebastian", 5000);

console.log(sebastian);
// console.log(sebastian.#nombre); // no puedes acceder asi
console.log(sebastian.mostrarInformacion());
sebastian.setDesarrollo("Grandes");
console.log(sebastian.getDesarrollo());
