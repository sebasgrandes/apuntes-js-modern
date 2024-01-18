// ! para usar tus import y export no olvides colocarle al html type module

// ! recuerda colocar siempre tus import hasta arriba

// import, importa una variable // * solo no olvides ponerle type module
import mifuncionz, {
    nombres,
    direccion,
    misdatos,
    Cliente,
} from "./cliente.js"; // ! es necesario ponerle el .js
import { Empresa } from "./empresa.js";

mifuncionz();

console.log(nombres);
console.log(direccion);
misdatos("Andrea", "Adress");

const cliente = new Cliente("raaaa", "gaaaaa");
console.log(cliente);
console.log(cliente.miotrafunzion());

// importar empresa
const empresa = new Empresa("sebas", "dir", "nose");
console.log(empresa);
console.log(empresa.miotrafunzion());
