const arrays = ["Sebastian", "Andre", "Andrea"];

describe("Grupo de tests de arrays", () => {
    test("Long 3 caracteres", () => {
        expect(arrays).toHaveLength(3);
    });
    test("no Long 0 caracteres", () => {
        expect(arrays).not.toHaveLength(0);
    });
});
