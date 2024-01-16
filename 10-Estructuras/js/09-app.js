// operador ternario
const autenticado = false;
const puedePagar = true;

console.log(autenticado || puedePagar ? "Sí puede pagar" : "No puede pagar");

// ternario anidado (if dentro de otro if). solo este ternario es posible meterlo dentro de un console.log (con el el que no es ternario no se puede)
console.log(autenticado ? puedePagar ? "Sí puede pagar" : "No puede pagar": "no está autenticado");
// esto es lo mismo:
// console.log(
//     autenticado
//         ? puedePagar
//             ? "Sí puede pagar"
//             : "No puede pagar"
//         : "no está autenticado"
// );

// asi no se puede hacer (con el if original):
// console.log(
//     if (autenticado) {
//         if (puedePagar) {
//             ("Sí puede pagar");
//         } else {
//             ("No puede pagar");
//         }
//     } else {
//         ("no está autenticado");
//     }
// );
