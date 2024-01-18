// Implicit Binding: de manera implicita decimos donde encontrara valores... los valores del objecto por ejemplo usando la palabra reservada .this
// Binding" en JavaScript se refiere a la forma en que el contexto de this es ligado a una función. En diferentes situaciones, this puede referirse a diferentes objetos, dependiendo de cómo es llamada una función. "Explicit Binding" e "Implicit Binding" son dos de los varios métodos mediante los cuales puedes definir a qué objeto debe referirse this cuando se llama a una función o un método.

const usuario = {
    nombre: "Sebastian Andre Grandes Conqui",
    correo: "sebasgmail.com",
    edad: 22,
    mascota: {
        nombre: "Nala",
        edad: 4,
        showPet() {
            // ! usamos implicit binding al usar .this para llamar a la propiedad dentro de este mismo objeto
            // "Implicit Binding" se refiere a situaciones en las que el contexto de this se infiere o se determina implícitamente basándose en cómo la función es llamada. // * Cuando llamamos a una función precedida por un objeto (por ejemplo, usuario.showPet()), this se vincula automáticamente (o se "bind") al objeto que precede al punto (es decir, "usuario").
            console.log(
                `La mascota se llama ${this.nombre} y su edad es ${this.edad}`
            );
        },
    },
    showUser() {
        console.log(
            `El usuario se llama ${this.nombre} y su edad es ${this.edad}`
        );
    },
};

usuario.showUser();
usuario.mascota.showPet();
