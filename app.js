let textoEncriptado = "";
let textoDesencriptado = "";

function encriptarTexto() {
    let inputTexto = ((document.getElementById("inputArea").value)).toLowerCase();
    textoEncriptado = inputTexto.replace(/[aeiou]/g, function (match) {
        switch (match) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
        }
    });
    let textoConvertido = document.querySelector("#convertido");
    textoConvertido.innerHTML = textoEncriptado;
    mostrarResultado();
    return;
}

function desencriptarTexto() {
    let inputTexto = ((document.getElementById("inputArea").value)).toLowerCase();
    textoDesencriptado = inputTexto.replace(/enter/g, "e")
                                   .replace(/imes/g, "i")
                                   .replace(/ai/g, "a")
                                   .replace(/ober/g, "o")
                                   .replace(/ufat/g, "u");
    let textoConvertido = document.querySelector("#convertido");
    textoConvertido.innerHTML = textoDesencriptado;
    mostrarResultado();
}

function copiarTexto() {
    let textoCopiar = document.getElementById("convertido").textContent;  
    navigator.clipboard.writeText(textoCopiar);
}

function mostrarResultado() {
    document.querySelector(".ladoResultadoSinTexto").style.display = "none";
    document.querySelector(".ladoResultado").style.display = "block";
}

function inicializarPagina() {
    document.querySelector(".ladoResultadoSinTexto").style.display = "block";
    document.querySelector(".ladoResultado").style.display = "none";
}

// Inicializar la página cuando se carga
document.addEventListener("DOMContentLoaded", inicializarPagina);
