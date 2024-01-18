const numero = "123456";

describe("Grupo de tests", () => {
    test("Longitud de 6 caracteres", () => {
        expect(numero).toHaveLength(6);
    });
    test("No Longitud de 0 caracteres", () => {
        expect(numero).not.toHaveLength(0);
    });
});
