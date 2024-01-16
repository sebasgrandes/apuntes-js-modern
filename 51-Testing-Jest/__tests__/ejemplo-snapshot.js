// snapshots: permiten almacenar datos que se almacenan en otra carpeta para ser comparados con tu toMatchSnapshot
/* si modificaste tu objeto original y ahora quieres actualizar el snapshot... puedes reescribir tu snapshot anterior, por el actual, de 3 formas:
1. en la terminar al correr tu test lo haras asi: npm t -- -u
2. eliminas la carpeta de snapshots y vuelves a correr tu test con npm t
(NO LO HAGAS) 3. edita tu archivo dentro de tu carpeta de snapshots (NO LO HAGAS porque solo jest debe modificar este archivo)
*/

const objetox = {
    nombre: "Sebastian",
    apellido: "Grandes",
    edad: 22,
};

describe("Test de SnapShot", () => {
    test("Test objetonx", () => {
        expect(objetox).toMatchSnapshot();
    });
});
