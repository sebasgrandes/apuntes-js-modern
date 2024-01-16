// IIFE es mi funcion que mantiene las variables en este mismo archivo, esto para que no se mezcle con otro
// el problema es que no podre utilizar funciones en otros archivos, salvo que lo hagas de otra forma... export

// export saca o exporta una variable...  // * solo no olvides ponerle type module
export const nombres = "Sebastian Andre Grandes Conqui";
export const direccion = "Calle 58";

export function misdatos(nombre, direccion) {
    console.log(`mi nombre es ${nombre} y mi direccion es ${direccion}`);
}
export class Cliente {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }

    miotrafunzion() {
        return `asdasdas ${this.nombre} yyyy ${this.direccion}`;
    }
}

// * export default. al importarlo no debe ir dentro de las llaves. los demas son exports normales que si van dentro de las llaves
// solo debe haber 1 por archivo

export default function mifuncionz() {
    console.log("desde mi funcion exportada por default");
}
