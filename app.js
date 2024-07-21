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
    limpiarCaja();
    return;
}

function limpiarCaja() {
    document.querySelector("#inputArea").value = "";
}

function copiarTexto() {
    let textoCopiar = document.getElementById("convertido").textContent;  
    navigator.clipboard.writeText(textoCopiar);
}

function desencriptarTexto() {
    textoDesencriptado = textoEncriptado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    textoConvertido = document.querySelector("#convertido");
    textoConvertido.innerHTML = textoDesencriptado;
}