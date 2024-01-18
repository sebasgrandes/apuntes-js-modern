const entrar = document.querySelector("#microfono");
const salir = document.querySelector("#salida");

entrar.addEventListener("click", ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition; // creo una referencia a la clase webkitSpeechRecognition... que es la API de reconocimiento de voz (es una interfaz) específica de WebKit (webkit es el motor de renderizado detrás de navegadores como Safari) (utilizada en algunos otros navegadores basados en WebKit).
    const recognition = new SpeechRecognition(); // creas una instancia de SpeechRecognition y la asignas a la variable recognition. esta instancia sirve para configurar y controlar el reconocimiento de voz en tu aplicación web

    recognition.start();

    recognition.onstart = function () {
        salir.classList.add("mostrar");
        salir.textContent = "Escuchando...";
    };

    recognition.onspeechend = function () {
        salir.textContent = "Se dejó de grabar";
        recognition.stop();
    };

    recognition.onresult = function (e) {
        console.log(e.results[0][0]);
        const { confidence, transcript } = e.results[0][0];

        const speech = document.createElement("p");
        speech.innerHTML = `
            Grabado: ${transcript}.
            Confianza: ${confidence}
        `;

        salida.appendChild(speech);
    };
}
