// mixins: forma de agregar funciones a una clase una vez que ya ha sido creada

class Prueba {
    constructor(a, b) {
        (this.a = a), (this.b = b);
    }

    muestraA() {
        console.log(`mi A es ${this.a}`);
    }
}

class Persona {
    constructor(nombre, email) {
        (this.nombre = nombre), (this.email = email);
    }
}

const persona1 = new Persona("Sebastian Grandes", "sebas@gmail.com");

const funcionesPersona = {
    mostrarNombre() {
        console.log(`El nombre de la persona es ${this.nombre}`);
    },
    mostrarEmail() {
        console.log(`El email de la persona es ${this.email}`);
    },
};

// * Añadir funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);
// Object.assign(target, ...sources) es un método en JavaScript que se utiliza para copiar los valores de todas las propiedades enumerables de uno o más objetos fuente (sources -> funcionesPersona) a un objeto destino (target -> prototipo del constructor Persona). Retorna el objeto destino.
// * Por lo tanto, todas las propiedades (que son funciones en este caso) del objeto funcionesPersona se copian al prototipo del constructor Persona. (el prototype es el lugar donde están los metodos propios de cada objeto... bueno en realidad de una clase, cuyos metodos están disponibles para todas las instancias de ese constructor o clase.)
// Persona.prototype se refiere al prototipo del constructor Persona. En JavaScript, cada función tiene un objeto prototype que es utilizado cuando nuevas instancias son creadas con esa función como constructor. Los métodos y propiedades añadidos al objeto prototype estarán disponibles para todas las instancias creadas con ese constructor.
// Persona.prototype es el prototipo de la clase Persona. Todas las instancias de una clase comparten el mismo prototipo. Si añades un método o propiedad al prototipo, todas las instancias de esa clase tendrán acceso a ese método o propiedad.

persona1.mostrarNombre();
persona1.mostrarEmail();
console.log(new Persona()); // verás que en el proto están las funciones añadidas (lo cual es lo normal)
console.log(funcionesPersona);

console.log(new Prueba()); // * es comun que en el prototype siempre estén los métodos de un objeto

/* sobre el prototype
- En JavaScript, el prototype es un mecanismo fundamental que permite a los objetos heredar métodos y propiedades de otros objetos. Es una propiedad especial que es un objeto por defecto, aunque puede ser sobrescrito, y se utiliza en el proceso de la cadena de prototipos (prototype chain) para permitir la herencia basada en prototipos.
- En resumen, el prototype es esencial para implementar la herencia basada en prototipos en JavaScript, permitiendo que los objetos hereden propiedades y métodos de otros y permitiendo la reutilización del código y el uso eficiente de la memoria.

Algunos puntos clave sobre el prototype en JavaScript:
- Herencia de Propiedades y Métodos: Cada función que creas en JavaScript tiene una propiedad prototype que es un objeto. Este objeto prototype tiene una propiedad constructor que apunta de nuevo a la función. Cuando utilizamos el constructor para crear instancias, las instancias tienen acceso a las propiedades y métodos definidos en el prototipo de la constructora.
- Cadena de Prototipos (Prototype Chain): Si intentas acceder a una propiedad o método de un objeto, JavaScript buscará esa propiedad o método no solo en el propio objeto, sino también a lo largo de la cadena de prototipos del objeto, subiendo nivel por nivel hasta que la propiedad o método se encuentre o hasta que se llegue al final de la cadena. Es así como los objetos pueden "heredar" propiedades y métodos de su prototipo.
*/

/* 
En la programación orientada a objetos, un constructor es una subrutina (un tipo especial de método) cuya misión es inicializar un objeto de una clase. En el caso de JavaScript, el constructor es una función especial que se utiliza para instanciar un objeto y se ejecuta automáticamente cuando se crea un objeto.

Uso básico de un constructor en JavaScript:
javascript
Copy code
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// o usando la sintaxis de clase (introducida en ES6):

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

En ambos casos, cuando invocas a Car con la palabra clave new:

javascript
Copy code
const myCar = new Car('Toyota', 'Corolla');

Se realizan los siguientes pasos:
- Crear un Nuevo Objeto: JavaScript crea un nuevo objeto vacío.
- Configurar el Prototipo: El prototipo del nuevo objeto se establece apuntando al objeto que está en la propiedad prototype de la función constructora (Car.prototype).
- Ejecutar el Constructor: La función constructora (Car en este caso) se ejecuta en el contexto del nuevo objeto creado. Es decir, this dentro de la función constructora apunta al nuevo objeto. Las propiedades asignadas a this se añaden al nuevo objeto.
Retornar el Objeto: Finalmente, el nuevo objeto se retorna automáticamente (a menos que el constructor explícitamente retorne otro objeto).

Puntos clave sobre los constructores:
- Inicialización: Permite establecer valores iniciales para las propiedades del objeto y hacer cualquier preparación inicial (como abrir una conexión a una base de datos, por ejemplo).
- Crear Instancias: Un constructor permite crear múltiples instancias de una clase, cada una con sus propios valores de propiedades y métodos, a través del operador new.
- Identidad de Clase: Aunque JavaScript es débilmente tipado y no requiere que especifiques el tipo de clase al instanciar un objeto, los objetos creados a partir de una función constructora particular tienen una relación con esa función constructora (a través de la propiedad constructor de su prototipo).

Los constructores proporcionan una forma eficiente y estandarizada de crear objetos y encapsular la lógica de inicialización, permitiendo la creación de múltiples instancias con características similares pero con valores de propiedades propios.
*/
