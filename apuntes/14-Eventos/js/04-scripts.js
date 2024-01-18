const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", validarFormulario); // puede ir sin parentesis pq el addEventListener ya sabe que ahi debe ir una funcion y que estas colocando una

function validarFormulario(e) {
    e.preventDefault(); // previene la accion por defecto: o sea previene que al darle click al boton de enviar, este me redirija a "/buscador" (de action) y que me envie el formulario (mediante el method="post")
    console.log("consultar una api");
    console.log(e.target.action);
}
