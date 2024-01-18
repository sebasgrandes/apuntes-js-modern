// funciones que retornan funciones

const fun = () => () => console.log("Sebastian Grandes");
const f =
    fun(); /* llamamos la 1era funcion para que nos retorne la 2da y tener una referenciade esta a f */
f(); /* imprimimos */
