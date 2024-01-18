// intersection observer

document.addEventListener("DOMContentLoaded", () => {
    // entries representa el array de objectos de IntersectionObserverEntry.
    const observer = new IntersectionObserver((entries) => {
        // entries[0] -> Es el primer objeto IntersectionObserverEntry dentro del array entries. Representa la información de intersección (Contiene propiedades como isIntersecting, intersectionRatio, target, etc)
        if (entries[0].isIntersecting) {
            // .isIntersecting: Un booleano que indica si el elemento objetivo está intersectando con el elemento raíz o el viewport.
            console.log("Ya está visible");
            console.log(entries);
            console.log(entries[0]);
        }
    });

    // defino mi elemento observado (target). por defecto mi elemento raiz (o root) es el viewport del navegador
    const div = document.querySelector(".premium");
    observer.observe(div); // instrucción que le dice al objeto observer (una instancia de IntersectionObserver) que comience a observar el elemento especificado (para ver si intersecta con el viewport) (o para las intersecciones con el viewport) // * cualquier cambio en el estado de interseccion (si div sale o entra al viewport) activará el callback (el que definí cuando creé el "observer", mi if)
});
