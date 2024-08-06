# Proyecto de Encriptación de Texto

## Descripción

Este proyecto es una aplicación web diseñada para encriptar y desencriptar textos utilizando una clave específica. El objetivo es proporcionar una herramienta sencilla y segura para proteger la información textual. La aplicación permite copiar el texto desencriptado para su uso posterior.

## Características

- **Encriptación de texto:** Convierte un texto normal en un texto encriptado utilizando una clave predefinida.
- **Desencriptación de texto:** Restaura el texto original a partir del texto encriptado y la clave utilizada.
- **Validación de entrada:** Asegura que el usuario ingrese un texto antes de intentar encriptar o desencriptar.
- **Copiar texto desencriptado:** Permite copiar el texto desencriptado al portapapeles para facilitar su uso.
- **Interfaz de usuario amigable:** Diseñada para ser intuitiva y fácil de usar.

## Requisitos

- Navegador web moderno (Google Chrome, Firefox, Safari, etc.)
- Conexión a internet para acceder a la página web

## Estructura del Proyecto

/proyecto-encriptacion
├── index.html
├── styles.css
├── script.js
├── README.md


## Instrucciones de Uso

1. **Abrir la aplicación:**
   - Abre el archivo `index.html` en tu navegador web.

2. **Encriptar texto:**
   - Escribe o pega el texto que deseas encriptar en el campo de texto.
   - Haz clic en el botón "Encriptar".
   - El texto encriptado aparecerá en la parte superior izquierda de la pantalla.

   ![Encriptar Texto](screenshots/encriptar.png)

3. **Desencriptar texto:**
   - Escribe o pega el texto encriptado en el campo de texto.
   - Haz clic en el botón "Desencriptar".
   - El texto desencriptado aparecerá en la parte superior izquierda de la pantalla.

   ![Desencriptar Texto](screenshots/desencriptar.png)

4. **Copiar texto desencriptado:**
   - Haz clic en el botón "Copiar" para copiar el texto desencriptado al portapapeles.

   ![Copiar Texto Desencriptado](screenshots/copiar.png)

## Desarrollo

### HTML

El archivo `index.html` contiene la estructura principal de la aplicación, incluyendo los campos de entrada y los botones para encriptar, desencriptar y copiar texto.

### CSS

El archivo `styles.css` define el estilo y la apariencia de la aplicación. Utiliza una paleta de colores armoniosa para asegurar una buena experiencia de usuario.

### JavaScript

El archivo `script.js` contiene la lógica de encriptación, desencriptación, validación de entradas y copia al portapapeles. Los eventos `onclick` están conectados a los botones para manejar estas funciones.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, por favor sigue los siguientes pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit de ellos (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a tu repositorio (`git push origin feature/nueva-funcionalidad`).
5. Abre una pull request en el repositorio principal.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

