# Programacion Web I Sockets
## Descripcion
El proyecto está desarrollado con una arquitectura cliente - servidor, con un proyecto para cada uno de estos.
El cliente está desarrollado en React con Typescript y Redux, el servidor en Node con Typescript.
Al acceder al cliente se abre un socket que conecta con el servidor y y al iniciar sesion con un nombre de usuario el par usuario-socket queda almacenado en el servidor por el resto de la sesión.
Al pulsar el botón de cerrar sesión, cerrar o recargar la ventana el servidor eliminará la información referente a la sesión.
El cliente almacenará la información referente a la sesión así como los mensajes del chat general enviados desde que se inició la conexión en Redux.
Adicionalmente este almacenará a todos los usuarios online proveeídos por el servidor así como las conversaciones con estos, incluso luego de que estos se hayan desconectado.

## Como ejcutar
#### Servidor
El único requisito es situarse en el directorio `/back/` e instalar las dependencias `npm install`, posteriormente ejecutar el comando `npm run dev`, el servidor iniciará por default en el puerto `5000`

#### Cliente
Igualmente situarse en el directorio `/front/` e instalar las dependencias `npm install`, posteriormente ejecutar el comando `npm start`, el cliente iniciará por default en el puerto 3000 en la ruta `/login`