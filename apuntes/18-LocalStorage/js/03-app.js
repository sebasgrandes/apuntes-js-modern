localStorage.removeItem("nombre"); // borra un item del localstorage

// para actualizar un elemento no hay una funcion en sí. por lo que eso se hace manualmente, como se muestra:

const mesesArray = JSON.parse(localStorage.getItem("meses"));
console.log(mesesArray);
mesesArray.push("gaaaaaaa", "taaaaaaaaa");
console.log(mesesArray);
localStorage.setItem("nombre", JSON.stringify(mesesArray)); // lo seteas nuevamente (y estara el valor agregado)

localStorage.clear(); // limpias el localStorage
