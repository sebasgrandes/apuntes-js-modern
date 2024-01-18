// scope: alcance del valor de una variable
// existen 2 scopes: scope global (en todo el codigo) y scope en una funcion (en la misma funcion)
// también se tiene el scope por bloque: en un if

const cliente = "Sebastian"; /* scope global */

function imprimirCliente() {
    // console.log(cliente);
    const cliente = "Grandes"; /* scope en una funcion */
    console.log(cliente);
    if (true) {
        /* scope por bloque */
        const cliente = "Dev";
        console.log(cliente);
    }
}

imprimirCliente();

console.log(cliente);
