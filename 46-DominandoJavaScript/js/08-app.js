// ! SELF: Puede referirse tanto al objeto global en la ventana principal como en un contexto de worker. También puede ser utilizado como una variable para mantener una referencia al contexto original en funciones y callbacks.
//  self se refiere a la ventana global... es igual a window pero self se utiliza mucho en los services workers... porque en estos no esta disponible la palabra window es por eso que se usa self

// * 1er uso: uso de metodos y funciones
// los desarrolladores utilizan self en lugar de this en métodos o funciones para mantener una referencia al contexto original del objeto, especialmente cuando se trabaja con funciones de callback o eventos en los que el contexto de this puede cambiar. Esto es una práctica común y "self" es simplemente una variable (podría tener cualquier nombre) que mantiene una referencia al contexto deseado.
const user = {
    nombre: "Sebastian Grandes",
    edad: 22,
    disponible: true,
    // * también puedo crear mi metodo asi: mostrarInfo() { ... }
    mostrarInfo: function () {
        const self = this; /* a veces se usa self como reemplazo de this */
        return `El usuario se llama ${this.nombre} y su edad es ${self.edad}`; /* pudiendolo usar aqui */
    },
};
console.log(user.mostrarInfo());

// * 2do uso: contexto global y workers
// self se refiere al objeto global y es utilizado comúnmente tanto en el contexto de la ventana principal del navegador (donde self es equivalente a window) como en Web Workers. En el caso de los Web Workers, donde no se tiene acceso al objeto window, self se refiere al objeto global del worker. Esto permite escribir código que puede funcionar tanto en el contexto del worker como en la ventana principal de manera intercambiable.
// En el contexto de un Service Worker, self es una referencia al objeto global del propio Service Worker, similar a cómo window es la referencia al objeto global en el contexto del hilo principal de ejecución de una página web. Sin embargo, los objetos globales entre páginas web y workers (como los Service Workers) no son los mismos y tienen disponibilidad a diferentes objetos y APIs.
self.nombre = "Andre Conqui";
const usuario = {
    nombre: "Sebastian Grandes",
    edad: 22,
    disponible: true,
    mostrarInfo: function () {
        return `El usuario se llama ${self.nombre} y su edad es ${this.edad}`; /* pudiendolo usar aqui */
    },
};
console.log(usuario.mostrarInfo());
