// ! Notification API

const notificar = document.querySelector("#notificar");

notificar.addEventListener("click", () => {
    // corremos la api de notificaciones
    // preguntamos si desea recibir notificaciones
    // * la tendencia es que todas las apis usen promises
    Notification.requestPermission().then((resultado) => {
        console.log("El resultado de la notificación es: ", resultado);
        console.log(new Notification("asd"));
        console.log(Notification.requestPermission());
        console.log(Notification.permission);
    });
});

const verNotificacion = document.querySelector("#verNotificacion");
verNotificacion.addEventListener("click", () => {
    if (Notification.permission === "granted") {
        const notificacion = new Notification("Nueva notificacion", {
            icon: "img/ccj.png",
            body: "Aprende JS en Codigo Con Juan",
        });
        notificacion.onclick = function () {
            window.open("https://www.sebastiangrandes.com");
        };
    }
});
