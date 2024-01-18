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

// Herencia
class Empresa extends Cliente {}

// Herencia 2, también podemos reescribir
class Corporacion extends Cliente {
    constructor(nombre, saldo, categoria, estado) {
        super(nombre, saldo); // el super va hacia la clase padre y busca los atributos que le pasas (hereda esos atributos)
        this.categoria = categoria;
        this.estado = estado;
    }
    // si reescribes un metodo en la clase hijo, lo sobre escribes unicamente en esta clase hijo
    static estatica() {
        return `Esta es una estatica pero creada gracias a la clase Corporacion, la cual unicamente se sobreescribe en esta clase hijo, no en la clase padre.`;
    }
    mostrarInformacion() {
        return `El ASFDASD del cliente es ${this.nombre} y su ASFASDFAS es de $${this.saldo}`;
    }
}

const sebastian = new Cliente("Sebastian", 5000);
const andrea = new Empresa("Andrea", 250000); // lo puedes crear gracias a que heredaste la clase de Cliente
const julio = new Corporacion("Julio", 999999999);

console.log(sebastian);
console.log(sebastian.mostrarInformacion());
console.log(Cliente.estatica());
console.log(andrea);
console.log(Empresa.estatica());
console.log(julio);
console.log(julio.mostrarInformacion()); // lo puedes usar gracias a que heredaste la clase de Cliente
console.log(Corporacion.estatica());
