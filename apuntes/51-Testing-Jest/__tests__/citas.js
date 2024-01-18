import { Citas } from "../js/classes/Citas.js";

/* aqui el objetivo de usar snapshot solo es tomar captura... no lo usas una 2da vez (en una segunda corrida npm t) para verificar si coincide */
describe("grupo de tests", () => {
    const citas = new Citas();
    const id = Date.now();
    test("Test de creación de cita", () => {
        const citaObj = {
            id,
            mascota: "Nala",
            propietario: "Sebastian Grandes",
            telefono: "957245687",
            fecha: "25/10/2023",
            hora: "19:31",
            sintomas: "Fiebre, tos, malestar",
        };

        citas.agregarCita(citaObj);
        expect(
            citas
        ).toMatchSnapshot(); /* esto sirve para tomar una captura de citas y guardarla a tu citas.js.snap */
    });

    test("Test de actualizacion/edicion de citas", () => {
        const citaActualizada = {
            id,
            mascota: "Negrita",
            propietario: "Andre Grandes",
            telefono: "922382421",
            fecha: "26/10/2023",
            hora: "20:31",
            sintomas: "malestar",
        };

        citas.editarCita(citaActualizada);
        expect(
            citas
        ).toMatchSnapshot(); /* tomo otra captura para ver los cambios que hice */
    });

    test("Test de eliminacion de citas", () => {
        citas.eliminarCita(id);
        expect(
            citas
        ).toMatchSnapshot(); /* tomo una ultima captura para ver los cambios */
    });
});
