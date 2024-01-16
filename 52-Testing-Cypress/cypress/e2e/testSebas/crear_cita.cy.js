/// <reference types="cypress" />

describe("Llena los campos para crear una nueva cita y la muestra", () => {
    it("Campos nueva cita", () => {
        // ! se coloca esa url de abajo porque en tu cypress.config.js ya colocaste una URL base -> baseUrl: "http://127.0.0.1:5500/52-Testing-Cypress",
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
});
