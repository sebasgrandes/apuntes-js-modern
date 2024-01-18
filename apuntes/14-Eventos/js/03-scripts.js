/* * eventos con el teclado
keydown, keyup
blur: entro y salgo al input y se ejecuta
copy, paste
input: se ejecuta cuando escribes, sueltas, copias, cortas, pegas, MENOS EL BLUR (o sea entrar y salir no se ejecuta)
*/

const busqueda = document.querySelector(".busqueda");
busqueda.addEventListener("input", (e) => {
    // e: es el evento que esta sucediendo (tiene varias propiedades a la que puedes acceder)
    console.log(e.target.value);
});
