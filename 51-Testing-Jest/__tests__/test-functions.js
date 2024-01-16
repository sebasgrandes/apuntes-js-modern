function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

describe("Grupo de test de funciones", () => {
    test("Test suma 10 y 20 da 30", () => {
        expect(suma(10, 20)).toBe(30);
    });
    test("Test resta 10 y 20 da -10", () => {
        expect(resta(10, 20)).not.toBe(5555);
    });
    test("Test suma 10 y 20 no da otra cosa", () => {
        expect(suma(10, 20)).toBe(30);
    });
    test("Test resta 10 y 20 no da otra cosa", () => {
        expect(resta(10, 20)).not.toBe(5555);
    });
});
