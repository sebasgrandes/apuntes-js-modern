// * "Explicit Binding" permite definir explícitamente a qué objeto (usuario por ejemplo) debe vincularse ("bind") this cuando se llama a una función (persona), usando los métodos call, apply, o bind.

function persona(gen1, gen2) {
    console.log(
        `El nombre del usuario es ${this.nombre} y sus generos favoritos son ${gen1} y ${gen2}`
    );
}

const usuario = {
    nombre: "Sebastian Grandes",
};

const generos = ["Dubstep", "Rock"];

// En cada uno de estos casos, this es vinculado explícitamente a un objeto específico mediante el uso de un método que acepta el objeto como un argumento, de ahí el término "Explicit Binding".

// con call le paso toods los elementos de forma individual
persona.call(usuario, generos[0], generos[1]);

// con apply le paso un arreglo completo
persona.apply(usuario, generos);

// con bind (es similar a call) pero esta devuelve una nueva funcion
const fun = persona.bind(usuario, generos[0], generos[1]);
fun();
