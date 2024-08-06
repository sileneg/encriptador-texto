function fnencriptar() {
    const texto = document.getElementById("texto").value.trim();
    const mensajeEncrip = document.getElementById("mensaje-encrip");
    const muneco = document.getElementById("muneco");
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const textoInicial = document.getElementById("texto-inicial");
    const copiarTextoBtn = document.querySelector(".copiar-texto");
    const textarea = document.getElementById("texto");

    if (texto === "") {
        textarea.placeholder = "Debe ingresar un texto para encriptar";
        return;
    }

    if (!/^[a-z ]+$/.test(texto)) {
        textarea.value = ""; 
        textarea.placeholder = "Solo se aceptan letras minúsculas sin acentos ni caracteres especiales.";
        return;
    }

    muneco.style.display = "none";
    mensajeEncrip.style.display = "flex";
    mensajeEncrip.style.alignItems = "flex-start"; 
    document.querySelector('.text-encriptado').style.justifyContent = 'flex-start';

    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    tituloMensaje.textContent = "Texto Encriptado con éxito";
    textoInicial.textContent = textoEncriptado;

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

    if (texto === "") {
        textarea.placeholder = "Debe ingresar un texto para desencriptar";
        return;
    }

    if (!/^[a-z ]+$/.test(texto)) {
        textarea.value = ""; 
        textarea.placeholder = "Solo se aceptan letras minúsculas sin acentos ni caracteres especiales.";
        return;
    }

    muneco.style.display = "none";
    mensajeEncrip.style.display = "flex";
    mensajeEncrip.style.alignItems = "flex-start";
    document.querySelector('.text-encriptado').style.justifyContent = 'flex-start';

    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    tituloMensaje.textContent = "Texto Desencriptado";
    textoInicial.textContent = textoDesencriptado;

    copiarTextoBtn.style.display = "block";
}

function fncopiar() {
    const textoInicial = document.getElementById("texto-inicial").textContent;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textoInicial).then(() => {
            alert("Texto copiado");
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = textoInicial;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            alert('Texto copiado');
        } catch (err) {
            console.error('Error al copiar el texto: ', err);
        }
        document.body.removeChild(textArea);
    }
}
