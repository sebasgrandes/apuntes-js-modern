function sumar(a, b) {
    return a + b;
}

let resultadoSumar = sumar(2, 3);

let valorEsperado1 = 99;

// async
function sumarAsync(a, b) {
    return Promise.resolve(sumar(a, b));
}

// test("Suma 2 + 4 y el resultado debe ser 6", async () => {
//     const esperado = 6;
//     const resultado = await sumarAsync(2, 4);
//     expected(esperado).toBe(resultado);
// });

test("Suma 25 y 60 el resultado debe ser 85", async () => {
    const esperado = 99;
    const resultado = await sumarAsync(25, 60);
    expected(esperado).toBe(resultado);
});

async function test(mensaje, callback) {
    try {
        await callback(); /* "await" espera la promesa implicita devuelta por la funcion callback se resuelva... la promesa implicita se resuelve cuando la funcion callback se ha completado en su totalidad (porque esta no retorna ninguna promesa ni algún valor como valor de la promesa) */

        console.log(`El Test: ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.error("Error", error);
    }
}

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

// expected(valorEsperado1).toBe(resultadoSumar);
// expected(valorEsperado1).toEqual(resultadoSumar);
