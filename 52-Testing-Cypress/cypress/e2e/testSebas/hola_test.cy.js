/// <reference types="cypress" />
// La línea /// <reference types="cypress" /> es una directiva para TypeScript. Le indica al editor y al compilador que este archivo depende de los tipos definidos en Cypress. Esto ayuda en el autocompletado y en las comprobaciones de tipos durante el desarrollo.

// * para ejecutar tu test solo basta con irte a la aplicacion de navegador de cypress y darle click a este archivo en el listado de spec que aparece
describe("Grupo de tests cypress", () => {
    it("Test cypress", () => {
        cy.visit(
            "/index.html"
        ); /* navega a la url especificada. necesario para que el codigo de abajo de busquedas los encuentren  en (o tomen como referencia a) esta url */ /* es un comando poderoso que te permite comenzar a interactuar con una página web en un entorno controlado y aislado para realizar pruebas de extremo a extremo. */ /* Es uno de los comandos más utilizados en las pruebas de extremo a extremo, ya que establece el punto de partida para una serie de interacciones en la página web que estás probando. */

        // verifica el elemento y su texto
        cy.contains(
            "[data-cy='titulo-proyecto']",
            "Administrador de Pacientes de Veterinaria"
        ); /* contains busca un elemneto en mi dom... que coincida con el selector "h1" y que contenga el content "Administrador..." */

        // solo verifica que el elemento exista
        /* get obtiene uno(s) elementos del DOM que coincidan con el selector "h1"... y should es un aserto que verifica si el elemento obtenido por get realmente existe en el DOM */
        // cy.get("h1").should("exist"); // no se recomienda solo colocar tu etiqueta asi sin más, ni con id porque corres riesgo de que se modifique
        // * sigue las buenas practicas de cypreess: siempre debes utilizar "data" como atributo para tus selectores: agregar data-cy="texto" a tu html. y luego usa el get con ello por ejemplo...
        cy.get("[data-cy='titulo-proyecto']").should("exist");

        // * una mejor forma de verificar elemento y texto... añadiendo opciones adicionales mediante el should
        // invoke("text") extrae el texto del elemento seleccionado
        // recuerda que al usar should... es case sensitive
        cy.get("[data-cy='titulo-proyecto']")
            .invoke("text")
            .should("not.equal", "Sebastian Grandes");

        cy.get("[data-cy='heading-citas']")
            .invoke("text")
            .should("not.equal", "GAaaaaaaaaaaaaa");

        // ------ formulario
        cy.get("[data-cy='formulario-cy']").submit(); // para darle click al boton del formulario

        // ------ alerta
        // una vez agregado el data.cy a tu divmensaje (alerta) creado con js...
        cy.get("[data-cy='cy-alerta']")
            .invoke("text")
            .should("equal", "Todos los campos son Obligatorios");

        cy.get("[data-cy='cy-alerta']").should(
            "have.class",
            "alert-danger"
        ); /* verifico si mi elemento tiene la clase de alert-danger */
    });
});
