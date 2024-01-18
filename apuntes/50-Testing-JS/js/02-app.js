function sumar(a, b) {
    return a + b;
}

let resultadoSumar = sumar(2, 3);

let valorEsperado1 = 99;

function expected(esperado) {
    return {
        toBe(resultado) {
            if (esperado !== resultado) {
                console.error(
                    `Incorrecto: El resultado ${resultado} es diferente del valor esperado`
                );
            } else {
                console.log(
                    `Correcto: El resultado ${resultado} es IGUAL al valor esperado`
                );
            }
        },
        toEqual(resultado) {
            if (esperado != resultado) {
                console.error(
                    `Incorrecto: El resultado ${resultado} no es igual al valor esperado`
                );
            } else {
                console.log(
                    `Correcto: El resultado ${resultado} es IGUAL al valor esperado`
                );
            }
        },
    };
}

// el valor esperado... debe ser igual a... resultado

expected(valorEsperado1).toBe(resultadoSumar);
expected(valorEsperado1).toEqual(resultadoSumar);
