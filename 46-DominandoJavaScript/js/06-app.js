// ! new binding
// * El "New Binding" es uno de los cuatro métodos de binding en JavaScript para determinar el valor de this en una función (es decir, a cómo JavaScript establece a qué objeto se refiere this).
// Este método se utiliza cuando se crea una instancia de un objeto a partir de un constructor utilizando la palabra clave new. El constructor es simplemente una función que se utiliza para inicializar un objeto y establecer sus propiedades.

// * Cuando se utiliza new para crear una instancia de un objeto, se produce el "New Binding", lo que significa que this dentro de la función constructora se refiere a la nueva instancia que se está creando.

// El "New Binding" es una forma común de crear objetos personalizados en JavaScript, ya que permite la creación de múltiples instancias con propiedades individuales a partir de un constructor.

// constructor
function Auto(nombre, marca) {
    // *** 'this' se refiere a la nueva instancia que se está creando (miauto)
    (this.nombre = nombre), (this.marca = marca);
}

// Crear una nueva instancia de Persona usando 'new'
// * aqui sucede el new binding (metodo)
const miauto = new Auto("Carrito", "Corolla"); // * Es importante recordar que el uso de new con una función constructora es lo que activa el "New Binding". Si olvidas usar new, this dentro de la función constructora no se referirá a una nueva instancia y podrías encontrarte con errores o resultados inesperados.

console.log(miauto);

// ! window binding
// se crea en la ventana global
window.color = "Red";
function Hola() {
    console.log(color);
}

Hola();

// window binding
// El "Window Binding" es uno de los métodos para determinar el valor de this en JavaScript, y se utiliza cuando una función se llama en el contexto global, es decir, cuando no está contenida dentro de ningún objeto o contexto específico. En este caso, this se refiere al objeto global en el entorno en el que se está ejecutando el código. En un navegador web, el objeto global es window, mientras que en Node.js, es global.

// Por ejemplo, considera el siguiente código:

function mostrarMensaje() {
    console.log(this); // * 'this' se refiere al objeto global (window en un navegador)
    console.log("Hola desde la función mostrarMensaje!");
}

mostrarMensaje();
// En este caso, la función mostrarMensaje se llama en el contexto global, por lo que this dentro de la función se refiere al objeto global (window en un navegador web). Si ejecutas este código en un navegador, verás que this se refiere al objeto window.
