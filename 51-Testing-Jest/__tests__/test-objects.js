const objetin = {
    nombre: "sebastian",
    saldo: 1200,
};

describe("Grupo de tests de objetos", () => {
    test("Test 1", () => {
        expect(objetin.saldo).toBeGreaterThan(1000);
    });
    // a veces es util realizar 2 tests: tanto de toBe como de not toBe al mismo tiempo. par asegurarse de tener una correcta validación
    test("Test 2", () => {
        expect(objetin.nombre).toBe("sebastian");
    });
    test("Test 3", () => {
        expect(objetin.nombre).not.toBe("andre");
    });
});
