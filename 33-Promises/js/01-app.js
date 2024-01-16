// callback: funcion que se va a ejecutar una vez que elpais se manda a llamar

// ! callback en .filter:
/* 
    ? ok La idea detrás del término "callback" es que tú, como desarrollador, estás diciendo: "Aquí tienes una función, método .filter(). Quiero que proceses cada elemento de mi array y, para cada uno de ellos, 'llames de vuelta' a esta función que te estoy dando para que decidas qué hacer con ese elemento".
    
    En el caso de .filter(), la "decisión" que la función callback toma es si un elemento debe ser incluido en el array resultante o no. Pero el concepto general de un callback es que es una función que entregas a otro código para que la ejecute en tu nombre en un momento determinado o bajo ciertas condiciones.

    En el contexto de programación, cuando decimos que una función "llama de vuelta", nos referimos a que esa función se ejecuta en respuesta a algún evento o condición, después de haber sido pasada como argumento a otra función o método.

    En otras palabras, tú proporcionas una función a otro método (como .filter()) y esperas que, en algún momento, ese método ejecute o "llame" a la función que proporcionaste. De ahí el nombre "función callback" o "función de llamada de vuelta".

    Por ejemplo, en el caso de .filter(), pasas una función callback que determina si un elemento debe ser incluido en el array resultante. El método .filter() "llama" o ejecuta esa función para cada elemento del array.
*/

// el callback funciona asi: mandamos a llamar una funcion, agrega un valor, y una vez es agregado el valor, dice, ya terminé asi que mandamos a llamar a la funcion x para mostrar ese nuevo elemento

const paises = ["Peru", "Chile", "Argentina", "Bolivia", "Ecuador"];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach((pais) => {
            console.log(pais);
        });
    }, 1000);
}

mostrarPaises();
nuevoPais("Alemanria", mostrarPaises);
