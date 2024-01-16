/// <reference types="cypress" />

describe("Llena los campos para crear una nueva cita y la muestra", () => {
    it("Campos nueva cita", () => {
        cy.visit("/index.html");

        cy.get("[data-cy='input-mascota']").type("Nala");
        cy.get("[data-cy='input-propietario']").type("Sebastian Grandes");
        cy.get("[data-cy='input-telefono']").type("957245687");
        // cypress te ayuda a saber que valor espera... por ejemplo de fecha hora etc
        cy.get("[data-cy='input-fecha']").type("2023-10-27");
        cy.get("[data-cy='input-hora']").type("12:27");
        cy.get("[data-cy='sintomas-textarea']").type("Fiebre, tos y gripe");
        // simulando el click
        cy.get("[data-cy='input-boton']").click();
        cy.get("[data-cy='heading-citas']")
            .invoke("text")
            .should("equal", "Administra tus Citas");
        cy.get("[data-cy='alerta']")
            .invoke("text")
            .should("equal", "Se agregó correctamente");
        cy.get("[data-cy='alerta']").should("have.class", "alert-success");
    });

    // * para que el estado anterior (del it anterior) no se borre... en tu cypress.config.js colocas -> testIsolation: false,

    it("Editar citas", () => {
        cy.get("[data-cy='boton-editar']").click();
        cy.get("[data-cy='input-mascota']").clear().type("Hook");
        cy.get("[data-cy='input-boton']").click();
        cy.get("[data-cy='alerta']")
            .invoke("text")
            .should("equal", "Guardado Correctamente");
        cy.get("[data-cy='alerta']").should("have.class", "alert-success");
    });
});
