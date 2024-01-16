// el problema de no usar prototipes es que para cada objeto constructor se podran instanciar *varias* funciones, aunque no le pertenezca o no deban usarse con dichos objetos digamos.
// con los prototypes creamos funciones que se usen UNICA Y EXCLUSIVAMENTE para UN SOLO OBJETO CONSTRUCTOR EN ESPECÍFICO. por lo que asi evitamos que estas funciones se estén usando para otros objetos constructores distintos, cuando claramente no se crearon para estos. esto es util mayormente en proyectos grandes donde los demás por desconocimiento podrian tocar y usar funciones incorrectas con ciertos objetos incorrectos

// a manera de ejemplo, esto es lo que sucederia si no usas prototypes:

// ! el objeto de empresa podrias usarlo en la funcion formatearCliente... y el objeto de cliente con la funcion formatearEmpresa. LO CUAL NO DEBERIA PASAR. PERO TU ESCRIBISTE EL CODIGO, NO LOS DEMAS, POR LO QUE PODRÍAN ESTAR USANDOLO MAL. AQUI ES DONDE ENTRA A TALLAR Y ES UTIL EL CREAR PROTOTYPES

function Cliente(nombre, saldo) {
    (this.nombre = nombre), (this.saldo = saldo);
}

const cliente = new Cliente("Andrea", 621);

function formatoCliente(cliente) {
    const { nombre, saldo } = cliente;
    return `El nombre del cliente es ${nombre} y su saldo es ${saldo}`;
}

console.log(cliente);
console.log(formatoCliente(cliente));

function Empresa(nombre, saldo, categoria) {
    (this.nombre = nombre), (this.saldo = saldo), (this.categoria = categoria);
}
const empresa = new Empresa("Sebastian", 9797, "Dev");

function formatoEmpresa(empresa) {
    const { nombre, saldo, categoria } = empresa;
    return `El nombre del empresa es ${nombre}, su saldo es ${saldo} y su categoría es ${categoria}`;
}

console.log(empresa);
console.log(formatoEmpresa(empresa));
