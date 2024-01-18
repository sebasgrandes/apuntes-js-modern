document.addEventListener("DOMContentLoaded", () => {
    crmDB();
    setTimeout(() => {
        crearCliente();
    }, 5000);
});

let DB;
function crmDB() {
    // * creamos la base de datos version 1.0
    let crmDB = window.indexedDB.open("crm", 1);

    // * onerror y onsucces me diran si se creó bien mi base de datos
    // si hay un error
    crmDB.onerror = function () {
        console.log("Hubo un error al recepcionar la base de datos");
    };
    // si se creó bien
    crmDB.onsuccess = function () {
        console.log("Base de datos conectada correctamente");
        DB = crmDB.result; // la referencia de mi base de datos (esta es mi base de datos)
    };
    // configuracion de la base de datos // * onupgradeneeded solo se ejecuta una vez
    crmDB.onupgradeneeded = function (e) {
        // ! console.log("Este metodo solo se ejecuta una sola vez cuando se crea la base de datos");

        // así muestro o tengo la referencia de mi base de datos (esta es mi base de datos)
        const db = e.target.result; // * me devuelve mi base de datos que creé

        // * definimos el objectStore
        // el object store interactuará mucho con la base de datos. Este nos permite crear las columnas de nuestra base de datos
        const objectStore = db.createObjectStore("crm", {
            // colocamos nuestra db "crm" y creamos el objeto de configuracion de como va a ser nuestra db
            keypath: "crm", // el icono de tabla dentro de tu db es el keypath, esto de aca
            autoIncrement: true,
        });

        // en este espacio de onupgradeneeded es un buen metodo para definir las columnas
        // ! definir las columnas
        // ? ok .createIndex() se utiliza para crear un índice en un almacén de objetos (object store) dentro de una base de datos IndexedDB. // Supongamos que tienes una base de datos de IndexedDB llamada "MiBaseDeDatos" y un almacén de objetos llamado "Personas" con objetos que tienen propiedades como "nombre," "edad," y "ciudad." Queremos crear un índice en la propiedad "nombre" para permitir búsquedas rápidas por nombres.
        objectStore.createIndex("nombre", "nombre", { unique: false });
        // ? ok segun chatgpt: en resumen está creando un índice llamado "nombre" que se basa en la propiedad "nombre" de los objetos almacenados en el almacén de objetos "personasStore".
        //  ? la opción { unique: false } indica que los valores del índice no tienen que ser únicos, lo que significa que puede haber objetos con el mismo valor en la propiedad "nombre" en el almacén de objetos
        // El primer "nombre": Este es el primer argumento y se refiere al nombre que se le dará al índice que se está creando. En este caso, se está nombrando el índice como "nombre". Este nombre se utilizará para hacer referencia al índice en futuras consultas o operaciones relacionadas con el índice. El segundo "nombre": Este es el segundo argumento y se refiere al nombre de la propiedad del objeto que se va a indexar en el almacén de objetos. En este caso, se especifica "nombre" como el nombre de la propiedad que se indexará. Esto significa que el índice se construirá utilizando los valores de la propiedad "nombre" de los objetos almacenados en el almacén de objetos.

        // * segun el profe: el keypath (el 2do) es como vamos a hacer referencia para consultar la tabla de nombre (y a los demás campos también, por ejemplo telefono e email...)
        objectStore.createIndex("email", "email", { unique: true }); // el email si será unico, mientras el nombre no pq pueden ser varios
        objectStore.createIndex("telefono", "telefono", { unique: false });

        console.log("Columnas creadas");
    };
}

// ! para poder trabajar con las operaciones de indexDB (obtener registros, eliminarlos, actualizarlos, agregarlos) utilizas las transacciones siempre
// transacciones: cuando se completan correctamente los pasos de un proceso (por ejemplo sacar dinero del cajero)
function crearCliente() {
    // transaccion creada para leer y escribir en mi DB
    let transaction = DB.transaction(["crm"], "readwrite"); // la transaccion será en la db de crm // el siguiente es el modo: en este caso readwrite
    transaction.oncomplete = function () {
        console.log("Transacción completada");
    };
    transaction.onerror = function () {
        console.log("Hubo un error en la transacción");
    };

    // vamos a escribir un objeto en nuestra db
    const objectStore = transaction.objectStore("crm"); // nuevamente nuestra db de crm

    const nuevoCliente = {
        nombre: "Sebastian Andre Grandes Conqui",
        email: "sebas@gmail.com",
        telefono: 957245687,
    };

    const peticion = objectStore.add(nuevoCliente); // utilizamos el metodo para "agregar" (también hay delete, y put (actualizar)) el registro n° 1
    console.log(peticion);
}
