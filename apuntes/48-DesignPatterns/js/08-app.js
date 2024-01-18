// mediator  o intermediario
// patron de diseño que se comunica con diferentes objetos a la vez. el mediador define objetos ya localizdaos para objetivos especificos
// En otras palabras, cuando los objetos interactúan con muchos otros objetos, en lugar de comunicarse directamente entre sí, envían mensajes a un objeto mediador, y este objeto maneja la comunicación con los objetos destino.

// comunica todos estos objetos al mismo tiempo

// * esta es una funcion constructora (forma antigua, ahora se usan clases)
/* en el codigo de abajito:
Estás definiendo una función constructora llamada Vendedor. La función constructora es una forma en JavaScript para crear un tipo de objeto y realizar alguna inicialización. La palabra clave this dentro de la función constructora hace referencia al objeto que está siendo creado.
Cuando invocas esta función con la palabra clave new: Un nuevo objeto es creado y el constructor (Vendedor) es llamado con this vinculado al nuevo objeto. Las propiedades dentro del constructor (nombre y sala) se asignan al nuevo objeto.

Ambas, la función constructora y la clase, son válidas y el uso de una sobre la otra a menudo dependerá de tus preferencias o requerimientos específicos del proyecto. Si estás trabajando en un código moderno y prefieres una sintaxis más limpia y concisa, las clases pueden ser una excelente opción. Si deseas una mayor compatibilidad con versiones antiguas de JavaScript o prefieres trabajar directamente con prototipos, las funciones constructoras pueden ser el camino a seguir.

*/

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
// ponemos sala = null porque una vez que se cree Subasta, se establecerán ambos

// Vendedor.prototype para que sean funciones exclusivas del Vendedor
/* 
Uso de prototype en JavaScript
En JavaScript, prototype es un mecanismo que permite a los objetos heredar características (propiedades y métodos) de otros objetos. Es fundamental para el sistema de prototipos de JavaScript y es lo que permite la implementación de la herencia basada en prototipos.

* ¿Por qué usar prototype?
Cuando creas funciones (o métodos) utilizando el prototype, estás haciendo que esos métodos se compartan entre todas las instancias del objeto, en lugar de crear una copia de la función para cada instancia. Veamos algunos puntos clave sobre por qué y cómo se usa prototype:
*/

/* En este código:

Al definir oferta y vendido en Vendedor.prototype, estás asegurando que cada instancia de Vendedor pueda llamar estos métodos, pero las funciones mismas no se duplican en memoria para cada instancia. Todas las instancias compartirán las mismas funciones a través de su cadena de prototipos.

Si creas dos instancias de Vendedor, ambas tendrán acceso a oferta y vendido, pero no habrá dos copias separadas de esas funciones en memoria.
*/
Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(
            `Tenemos el siguiente artículo: ${articulo} al siguiente precio: ${precio}`
        );
    },
    vendido: (comprador) => {
        console.log(`Vendido a ${comprador}`);
    },
};

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador}: ${cantidad}`);
    },
};

// Subasta es el mediator
function Subasta() {
    let compradores = {};
    return {
        registrar: (usuario) => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        },
    };
}

/* 
En mi código:

Comprador y Vendedor actúan como colegas. Ellos no se comunican directamente entre sí, pero ambos necesitan comunicarse para realizar transacciones.

Subasta actúa como el mediador, al que tanto los compradores como los vendedores se registran para poder participar en la comunicación (en este caso, ofertar y vender).

Observación:
En el código proporcionado, aunque se esboza un patrón de mediador, es importante mencionar que la implementación no lo sigue estrictamente. Por ejemplo, los compradores y vendedores parecen intentar comunicarse directamente, y la subasta (mediador) no está mediando activamente en estas comunicaciones, simplemente está registrando a los usuarios.

Para un patrón de mediador más característico, los objetos Comprador y Vendedor deberían comunicar sus ofertas y demás mensajes al objeto Subasta (mediador), y este a su vez decidir cómo y cuándo comunicar estos mensajes a otros Comprador o Vendedor registrados.
*/

const sebastian = new Comprador("Sebastian");
const andre = new Comprador("Andre");

const vendedor = new Vendedor("Vendedor de Autos");

const subasta = new Subasta();
// Registrandolos
subasta.registrar(sebastian);
subasta.registrar(andre);

// el vendedor lanza su oferta
vendedor.oferta("Mustan 66", 300);
// el comprador responde con su oferta
sebastian.oferta(200);
andre.oferta(300);
sebastian.oferta(400);
andre.oferta(500);

vendedor.vendido("Sebax");
