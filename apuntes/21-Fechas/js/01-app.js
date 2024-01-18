const fecha = new Date();
// const fecha = new Date("11-18-2000");
let valor;

// valor = fecha;
// valor = fecha.getDay();
// valor = fecha.getFullYear();
// valor = fecha.getTime();
valor = fecha.setFullYear(2010);

console.log(fecha);
console.log(valor);

// console.log(Date.getFullYear()); // esto no funcion. el date se tiene que instanciar para usar los get. como en la primera linea de codigo
