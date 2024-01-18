// Fases de Compilación y Ejecución de JavaScript: JavaScript tiene, en términos generales, una fase de compilación donde el código es procesado antes de ejecutarse (y en donde sucede el hoisting real) y una fase de ejecución donde el código que fue compilado se ejecuta.

/*
! 1. Fase de Compilación (Real)

* Hoisting:
- Variables (var): Se registran en el alcance correspondiente (función o global) y se inicializan con un valor de undefined.
- Variables con let y const: Tienen un comportamiento de hoisting ligeramente diferente al de var y las funciones, ya que no se inicializan con undefined y no son accesibles en el código antes de su declaración... hasta que se asigne un valor en codigo
- Funciones: Se registran en la memoria con toda su definición y se pueden usar antes de su declaración en el código.

Creación del Contexto de Ejecución:
- El motor crea un contexto de ejecución global y guarda la información sobre las variables y funciones en memoria.
*/

/* 
! 2. Fase de Ejecución (Real)

Ejecución del Código:
- Se ejecuta línea por línea desde el principio hasta el final.
* - Se accede a las variables y funciones registradas en la memoria durante la fase de compilación. (las funciones con toda su definición)

Asignación y Uso de Variables y Funciones:
* - Las variables y funciones ahora están listas para ser asignadas y utilizadas.
- Las variables declaradas con var que son usadas antes de su asignación retornarán undefined.
* - Las funciones pueden ser invocadas incluso antes de su declaración en el código, ya que se almacenaron completas durante la compilación.

Manejo de la Pila de Llamadas:
- Cada llamada a una función crea un nuevo contexto de ejecución, que se añade a la pila de llamadas.
- Cada contexto de ejecución tiene su propio espacio en memoria y al finalizar la ejecución de una función, su contexto se destruye (a menos que exista una clausura).

*/

/* 
! Conceptualización del Hoisting

Imaginando el “Movimiento” de Declaraciones:
* - Conceptualmente, podemos imaginar que las declaraciones de variables (usando var, const o let) y funciones son "movidas" o "elevadas" al inicio (de su contexto de *ejecución*) del ámbito en el que se declaran (función o global).
- Esto ayuda a visualizar y entender por qué las variables y funciones están disponibles antes de su declaración en el código fuente.

Visualizando el Comportamiento Durante la Ejecución:
- Aunque las variables y funciones no se mueven físicamente, entender el hoisting como un "movimiento conceptual" ayuda a prever cómo se comportará el código durante la ejecución.
- Ejemplo: Aunque llamemos a una función al inicio del código y la declaremos al final, el código funcionará porque conceptualizamos que la declaración de la función ha sido "movida" al inicio gracias al hoisting.
*/

miNombre(); // it works! -> 2. Fase de E: porque la función ya ha sido almacenada en memoria durante la compilación

function miNombre() {
    /* 1. Fase de C: la funcion se registra en memoria con toda su definición debido al hoisting. */
    console.log("Sebastian Grandes");
}

/* 1. Fase de C: se registra la variable miCorreo (pero en este caso de "const": no se inicializa con undefined en la etapa de compilacion y no pueden ser accedidas hasta que se les asigne un valor en el código) */
// 2. Fase de E: la función anónima es creada y asignada a la variable miCorreo.
// miCorreo() // ! don't works
const miCorreo = function () {
    console.log("sebas@gmail.com");
};

miCorreo(); // it works! -> miCorreo apunta a una función y puede ser invocada
