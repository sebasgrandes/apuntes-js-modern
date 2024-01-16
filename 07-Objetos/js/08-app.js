"use strict";
const objetin = {
    producto: "tele",
    tienda: "plaza vea",
    precio: 457,
};

//  ! este metodo SOLO SE PUEDE USAR usando el "use strict" esta habilitado
Object.freeze(objetin); // congelo mi objeto para que no pueda agregarle, modificarle ni borrarle
// objetin.prueba = "prueba";
// delete objetin.tienda;
console.log(objetin);
console.log(Object.isFrozen(objetin));
