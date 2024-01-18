window.addEventListener("online", imprimirMensaje);
window.addEventListener("offline", imprimirMensaje);

function imprimirMensaje() {
    if (navigator.onLine) {
        console.log("Estás conectado a internet");
        console.log(navigator);
        console.log(navigator.onLine);
    } else {
        console.log("NOOOOO Estás conectado a internet");
        console.log(navigator);
        console.log(navigator.onLine);
    }
}

console.log("No sé si estás conectado a internet");
console.log(navigator);
console.log(navigator.onLine);

// console.log(window);
// console.log(window.document);
// console.log(document);
