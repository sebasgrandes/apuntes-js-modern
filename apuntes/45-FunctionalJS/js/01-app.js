// ? First Class Functions
// first-class function" no se refiere a una característica específica o a una línea específica de código, sino a una serie de capacidades que el lenguaje otorga a las funciones
// * El concepto de "first-class functions" se refiere a la capacidad de un lenguaje de programación para tratar las funciones como valores "de primera clase", es decir, valores que pueden ser asignados a variables, pasados como argumentos y retornados desde otras funciones. (objetos de primera clase: entidades que pueden ser tratadas como valores. ejemplo: numeros, strings, arrays, objetos, funciones, promesas y más - casi cualquier entidad que se pueda comportar como valor -)

/*
En JavaScript, las funciones son consideradas "first-class citizens" o "first-class objects" (objetos de primera clase). Esto significa que las funciones en JavaScript pueden ser tratadas como cualquier otro (valor) objeto, como strings, números o arrays. En concreto, el hecho de que las funciones sean "first-class citizens" implica que pueden
1. Ser asignadas a una variable:
2. Ser pasadas como argumentos a otras funciones:
3. Retornar otras funciones:
4. Ser almacenadas en estructuras de datos:
*/
// bueno si..... cuando un lenguaje puede asignar una funcion como un string, boolean o numero... quiere decir que ese lenguaje soporta first class function

// * funcion tratada como first-class function porque se asigna a una variable o constante
const suma = function (a, b) {
    return a + b;
};

const resultado = suma(1, 2); // ! El aspecto de "first-class function" se manifiesta en:
/*
1. Tratando la función como un valor al invocarla: Cuando escribes suma(1, 2), estás invocando o llamando a la función referenciada por la constante suma. La capacidad de tratar y usar funciones como valores que puedes invocar es una característica de los "first-class functions".
2. Invocando una función a través de su referencia asignada: Originalmente, asignaste una función anónima a la constante suma. Esta capacidad de asignar una función a una constante (o variable) y luego usar esa constante para invocar la función es otro aspecto de las "first-class functions". Es decir, en JavaScript, puedes referenciar funciones a través de variables o constantes y luego usar esas referencias para llamar a las funciones.
*/

console.log(resultado);
