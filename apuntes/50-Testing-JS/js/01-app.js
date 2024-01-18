// una forma de ahacer testing sin frameworks o herramientas es usando console.log

// basicamente asi es como funcionan los testings... tienen condiciones, valores esperados y demas

function sumar(a, b) {
    return a + b;
}

let resultadoSumar = sumar(2, 3);

let valorEsperado1 = 99;

if (resultadoSumar !== valorEsperado1) {
    console.error(
        `Incorrecto: El resultado ${resultadoSumar} es diferente del valor esperado`
    );
} else {
    console.log(
        `Correcto: El resultado ${resultadoSumar} es IGUAL al valor esperado`
    );
}
