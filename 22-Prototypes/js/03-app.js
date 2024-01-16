// la diferencia entre el function() {} y el () => {}. el 1ero busca en el objeto actual y el 2do busca en la ventana global

function Cliente(nombre, saldo) {
    (this.nombre = nombre), (this.saldo = saldo);
}

// con el .prototype accedes al proto del objeto Cliente (puedes verlo en la consola al expandir el objeto)
Cliente.prototype.tipoCliente = function () {
    let tipoCliente;
    if (this.saldo > 5000) {
        tipoCliente = "Gold";
    } else if (this.saldo > 2500) {
        tipoCliente = "Platinum";
    } else {
        tipoCliente = "Standar";
    }
    return tipoCliente; // no olvides el return
};

Cliente.prototype.retiraSaldo = function (cantidad) {
    this.saldo -= cantidad;
};

Cliente.prototype.mostrarSaldo = function () {
    return `El saldo del cliente ${this.nombre} es de ${
        this.saldo
    } y el tipo de cliente es ${this.tipoCliente()}`; // los prototypes y objetos estan asociados. por ello, aqui puedes usar las propiedades del objeto, y hasta acceder a otro prototype del mismo objeto
};

// instanciarlo
const andrea = new Cliente("Andrea", 2700);

// esto quiere decir .tipoCliente, .retiraSalgo y .mostrarSaldo están asociados unica y exclusivamente a los objetos creados con el cosntructor Cliente, en este caso el unico es el objeto andrea (puedes verlo en su proto)
andrea.retiraSaldo(700); // al prototype se accede tal y accedes a un método

console.log(andrea.mostrarSaldo());

console.log(andrea);
