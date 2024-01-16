// igualito, solo con la forma de escribir la funcion
// ! ahora con function expresion

function funcionPromesa() {
    return new Promise((resolve, reject) => {
        const truefalse = false;
        setTimeout(() => {
            if (truefalse) {
                resolve("funcionPromesa resuelta");
            } else {
                reject("funcionPromesa rechazada");
            }
        }, 3000);
    });
}

const funcionAsincrona = async () => {
    try {
        console.log("Sebastian");
        const aweit = await funcionPromesa();
        console.log(aweit);
        console.log("Grandes");
    } catch (error) {
        console.log(error);
    }
};

funcionAsincrona();
