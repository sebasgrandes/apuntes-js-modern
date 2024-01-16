function Cliente(nombre, saldo) {
    (this.nombre = nombre), (this.saldo = saldo);
}

Cliente.prototype.tipoCliente = function () {
    let tipoCliente;
    if (this.saldo > 5000) {
        tipoCliente = "Gold";
    } else if (this.saldo > 2500) {
        tipoCliente = "Platinum";
    } else {
        tipoCliente = "Standar";
    }
    return tipoCliente;
};

Cliente.prototype.retiraSaldo = function (cantidad) {
    this.saldo -= cantidad;
};

Cliente.prototype.mostrarSaldo = function () {
    return `El saldo del cliente ${this.nombre} es de ${
        this.saldo
    } y el tipo de cliente es ${this.tipoCliente()}`;
};

// recuerda que este es un constructor, el cual estará dentro del proto del objeto que crees con este
function Empresa(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); // .call manda a llamar una funcion // ! asi solo heredas el constructor, pero no las funciones de Cliente
    this.telefono = telefono;
}

// * heredando prototypes: recuerda que se debe hacer antes de instanciarlos
// Empresa hereda lo de Cliente: por lo que al reves no funciona

Empresa.prototype = Object.create(Cliente.prototype); // ! asi copias todo el proto de Cliente (es decir sus funciones exclusivas incluido el constructor) y lo pegas ***DENTRO*** del proto de Empresa (pero el constructor de Empresa se borra). es decir, metes el proto entero dentro del proto

Empresa.prototype.constructor = Cliente; // ! asi copias SOLO EL CONSTRUCTOR de Cliente al proto de Empresa (ya no el proto entero, sino como tal, como un constructor)

// instanciarlo
const andrea = new Cliente("Andrea", 2700);
const sebastian = new Empresa("Sebastian", 500, 957245687);

// * por lo tanto, ya puedes usar las heredadas
console.log(sebastian.mostrarSaldo());

console.log(andrea);
console.log(sebastian);

Empresa.prototype.mostrarTelefono = function () {
    return `El teléfono del sr. ${this.nombre} es ${this.telefono}`;
};

console.log(sebastian.mostrarTelefono());
