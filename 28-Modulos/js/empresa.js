import { Cliente } from "./cliente.js";

export class Empresa extends Cliente {
    constructor(nombre, direccion, categoria) {
        super(nombre, direccion);
        this.categoria = categoria;
    }
    miotrafunzion() {
        return `gaaaaaaaaaaaaa ${this.nombre} gaaaaaaaaaaa ${this.direccion} gaaaaaaaaaa ${this.categoria}`;
    }
}
