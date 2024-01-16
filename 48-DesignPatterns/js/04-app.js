// ! factory - crea objetos basados en ciertas condiciones

// * instanciamos la misma clase pero cada objeto será distinto basado en las condiciones que coloquemos
// Este patrón se utiliza cuando una clase no puede anticipar el tipo de objetos que debe crear y/o cuando una clase quiere que sus subclases especifiquen los objetos que deben ser creados.

class inputHTML {
    constructor(type, nombre) {
        (this.type = type), (this.nombre = nombre);
    }
    crearInput() {
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}"`;
    }
}

// aqui estoy creando una clase que creará un objeto sin propiedades, pero con un metodo dentro, lo cual es valido
class HTMLFactory {
    crearElemento(tipo, nombre) {
        switch (tipo) {
            case "text":
                return new inputHTML("text", nombre);
            case "email":
                return new inputHTML("email", nombre);
            case "tel":
                return new inputHTML("tel", nombre);

            default:
                break;
        }
    }
}

// instanciamos la misma clase una y otra vez...
const elemento = new HTMLFactory();
// pero cada objeto será distinto por las condiciones que colocamos
const inputText = elemento.crearElemento("text", "nombre-cliente");
console.log(inputText);
console.log(inputText.crearInput());

/* La creación de múltiples instancias de HTMLFactory (elemento, elemento2, elemento3) en tu código no es necesaria en este contexto, ya que HTMLFactory no mantiene estado y sus métodos no dependen de ninguna propiedad de instancia de la clase.
- No mantiene estado: Una clase u objeto mantiene estado cuando almacena valores o datos en propiedades que pueden cambiar durante la vida útil del objeto, afectando su comportamiento o los resultados de sus métodos.
- Métodos no dependen de ninguna propiedad de instancia: Cuando los métodos de una clase no usan ni modifican las propiedades de la instancia de esa clase, decimos que esos métodos "no dependen de ninguna propiedad de instancia".
*/

// const elemento2 = new HTMLFactory();
const inputText2 = elemento.crearElemento("email", "nombre-cliente");
console.log(inputText2.crearInput());

// const elemento3 = new HTMLFactory();
const inputText3 = elemento.crearElemento("tel", "nombre-cliente");
console.log(inputText3.crearInput());
