// ! explicacion crack de event loop: https://youtu.be/8aGhZQkoFbQ

// ! event loop o loop de eventos: JavaScript poseé un modelo de concurrencia basado en un "loop de eventos".
/* notas profe juan
por que se desordena...? el codigo de js es de un solo hilo... es decir, se ejecuta una linea... solo sucede una cosa a la vez, cada que se complete una cosa, se ejecuta la siguiente y así sucesivamente
en js hay eventos que tienen mas prioridad que otros
las funciones y el codigo se colocan en el stack (pila), dependiendo su naturaleza (console.log) y mientras se van ejecutando... otras se colocan en el queue (settimeout, promise y mifuncion) // despues de que se termina de ejecutar todo del stack irá sacando elementos del queue (cola) y colocandolos en el stack lo siguiente que ejecutará... y los ordenará dependiendo de la prioridad de ejecución (mifuncion > promise > settimeout), por eso se ejecutan en ese orden
*/

/* 
! event loop
El "event loop" (bucle de eventos) en JavaScript es un mecanismo que permite a los desarrolladores escribir código asincrónico que puede ejecutar funciones en el futuro, sin bloquear el hilo principal del navegador o del entorno de ejecución de Node.js. Es crucial en JavaScript ya que éste utiliza un modelo de concurrencia basado en un "event loop" y es single-threaded (monohilo), lo cual significa que un solo hilo de ejecución realiza todas las operaciones, y es este bucle de eventos el que permite manejar múltiples tareas de una manera no bloqueante.

! como funciona:

* Pilas (stack) y Colas (queue)
JavaScript utiliza una pila de llamadas para gestionar las funciones y métodos que se están ejecutando en un momento dado. Cuando una función se completa, se saca de la pila (stack) y continua con la función que está en la parte superior de la pila (que podría ser la función que llamó a la función recién completada, es decir, su función "padre", o cualquier otra función que estaba en ejecución antes y quedó pendiente).
Además, hay una cola de mensajes (queue) que mantiene un registro de todos los mensajes (o eventos) que deben procesarse SOLO CUANDO LA PILA ESTÉ VACÍA. Un "mensaje" es un bloque de código que se ha programado para ejecutarse en algún momento en el futuro.

* Event Loop: Pasos Básicos
Paso 1: Ejecutar cualquier fragmento de código que esté en la pila.
-- una vez que se hayan completado todas las funciones del stack, es decir, este vacio el stack
*Paso 2: Verificar la cola de mensajes y ver si hay algún mensaje que se deba procesar (es decir, si la pila de llamadas está vacía y hay mensajes en la cola de mensajes).
Paso 3:
- Si hay un mensaje, desencolarlo y ejecutarlo (esto pone el mensaje en la pila de llamadas). (Paso 4: Repetir)
- Si no hay mensajes en la cola, el event loop continuará verificando hasta que haya uno. (espera activa)

! Asincronía y Callbacks
La verdadera magia del "event loop" radica en su habilidad para manejar funciones asincrónicas, como setTimeout, fetch, o eventos del DOM. Cuando se usa una función asincrónica, se proporciona un "callback" que será agregado a la cola de mensajes una vez que la función asincrónica haya terminado su ejecución, y será ejecutado en cuanto la pila de llamadas esté vacía.
*/
