document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById("texto");
    const initialPlaceholder = "Digite el texto a encriptar o desencriptar";

    textarea.addEventListener("focus", function() {
        textarea.placeholder = initialPlaceholder;
    });
});

function fnencriptar() {
    const texto = document.getElementById("texto").value.trim();
    const mensajeEncrip = document.getElementById("mensaje-encrip");
    const muneco = document.getElementById("muneco");
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const textoInicial = document.getElementById("texto-inicial");
    const copiarTextoBtn = document.querySelector(".copiar-texto");
    const textarea = document.getElementById("texto");

    // Validar entrada de texto
    if (texto === "") {
        textarea.placeholder = "Debe ingresar un texto para encriptar";
        return;
    }

    if (!/^[a-z ]+$/.test(texto)) {
        textarea.value = ""; // Borrar el texto
        textarea.placeholder = "Solo se aceptan letras minúsculas sin acentos ni caracteres especiales.";
        return;
    }

    // Ocultar imagen
    muneco.style.display = "none";
    mensajeEncrip.style.display = "flex";
    mensajeEncrip.style.alignItems = "center";

    // Mostrar texto encriptado
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    tituloMensaje.textContent = "Texto Encriptado con éxito";
    textoInicial.textContent = textoEncriptado;

    // Mostrar botón de copiar
    copiarTextoBtn.style.display = "block";
}

function fndesencriptar() {
    const texto = document.getElementById("texto").value.trim();
    const mensajeEncrip = document.getElementById("mensaje-encrip");
    const muneco = document.getElementById("muneco");
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const textoInicial = document.getElementById("texto-inicial");
    const copiarTextoBtn = document.querySelector(".copiar-texto");
    const textarea = document.getElementById("texto");

    // Validar entrada de texto
    if (texto === "") {
        textarea.placeholder = "Debe ingresar un texto para desencriptar";
        return;
    }

    if (!/^[a-z ]+$/.test(texto)) {
        textarea.value = ""; // Borrar el texto
        textarea.placeholder = "Solo se aceptan letras minúsculas sin acentos ni caracteres especiales.";
        return;
    }

    // Ocultar imagen
    muneco.style.display = "none";
    mensajeEncrip.style.display = "flex";
    mensajeEncrip.style.alignItems = "center";

    // Mostrar texto desencriptado
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    tituloMensaje.textContent = "Texto Desencriptado";
    textoInicial.textContent = textoDesencriptado;

    // Mostrar botón de copiar
    copiarTextoBtn.style.display = "block";
}

function fncopiar() {
    const textoInicial = document.getElementById("texto-inicial").textContent;
    navigator.clipboard.writeText(textoInicial).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
