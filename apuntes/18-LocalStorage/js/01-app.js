// almacenamiento en local

// ! localStorage solo almacena strings

localStorage.setItem("nombre", 1); //  el navegador automáticamente convertirá ese valor a su representación de cadena de texto antes de almacenarlo, el número 1 se convertirá automáticamente a la cadena de texto "1" antes de ser almacenado. // Después, si intentas recuperar ese valor con localStorage.getItem("nombre"), obtendrás la cadena de texto "1", no el número 1.

const producto = {
    nombre: "Taza",
    precio: 3000,
};

const productoString = JSON.stringify(producto); // conversion a string en formato json para que se pueda almacenar
localStorage.setItem("producto", productoString);

const meses = ["Enero", "Febrero", "Marzo"];
const mesesString = JSON.stringify(meses);
console.log(mesesString);
localStorage.setItem("meses", mesesString);

const numeros = [1, 2, 3, 4, 5];
sessionStorage.setItem("numeros", JSON.stringify(numeros));
