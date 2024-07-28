Proyecto de Encriptación de Texto
Descripción
Este proyecto es una aplicación web diseñada para encriptar y desencriptar textos utilizando una clave específica. El objetivo es proporcionar una herramienta sencilla y segura para proteger la información textual. La aplicación permite copiar el texto desencriptado para su uso posterior.

Características
Encriptación de texto: Convierte un texto normal en un texto encriptado utilizando una clave predefinida.
Desencriptación de texto: Restaura el texto original a partir del texto encriptado y la clave utilizada.
Validación de entrada: Asegura que el usuario ingrese un texto antes de intentar encriptar o desencriptar.
Copiar texto desencriptado: Permite copiar el texto desencriptado al portapapeles para facilitar su uso.
Interfaz de usuario amigable: Diseñada para ser intuitiva y fácil de usar.
Requisitos
Navegador web moderno (Google Chrome, Firefox, Safari, etc.)
Conexión a internet para acceder a la página web
Estructura del Proyecto
bash
Copiar código
/proyecto-encriptacion
├── index.html
├── styles.css
├── script.js
├── README.md
Instrucciones de Uso
Abrir la aplicación:

Abre el archivo index.html en tu navegador web.
Encriptar texto:

Escribe o pega el texto que deseas encriptar en el campo de texto.
Haz clic en el botón "Encriptar".
El texto encriptado aparecerá en la parte superior izquierda de la pantalla.
Desencriptar texto:

Escribe o pega el texto encriptado en el campo de texto.
Haz clic en el botón "Desencriptar".
El texto desencriptado aparecerá en la parte superior izquierda de la pantalla.
Copiar texto desencriptado:

Haz clic en el botón "Copiar" para copiar el texto desencriptado al portapapeles.
Desarrollo
HTML
El archivo index.html contiene la estructura principal de la aplicación, incluyendo los campos de entrada y los botones para encriptar, desencriptar y copiar texto.

CSS
El archivo styles.css define el estilo y la apariencia de la aplicación. Utiliza una paleta de colores armoniosa para asegurar una buena experiencia de usuario.

JavaScript
El archivo script.js contiene la lógica de encriptación, desencriptación, validación de entradas y copia al portapapeles. Los eventos onclick están conectados a los botones para manejar estas funciones.
