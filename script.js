const input = document.getElementById("input_text");
let textoCriptografado = "";
let textoDescriptografado = "";

const painel_1 = document.getElementById("painel__saida__tela__1");
const painel_2 = document.getElementById("painel__saida__tela__2");

const titulo_criptografado = document.getElementById("header__criptografado");
const titulo_descriptografado = document.getElementById(
    "header__descriptografado"
);

let input_painel_2 = document.getElementById("input_text__resultado");

let textoValidado = false;

function criptografar() {
    textoCriptografado = input.value;

    validarTexto(textoCriptografado);

    if (textoValidado == true) {
        alert("É permitido apenas letras minúsculas e sem acento.");
        textoValidado = false;
        location.reload();
    } else {
        if (textoCriptografado) {
            textoCriptografado = textoCriptografado.replaceAll("e", "enter");
            textoCriptografado = textoCriptografado.replaceAll("i", "imes");
            textoCriptografado = textoCriptografado.replaceAll("a", "ai");
            textoCriptografado = textoCriptografado.replaceAll("o", "ober");
            textoCriptografado = textoCriptografado.replaceAll("u", "ufat");

            input.value = "";

            displayCriptografar();
            input_painel_2.value = textoCriptografado;
        }
    }
}

function descriptografar() {
    textoDescriptografado = input.value;

    validarTexto(textoCriptografado);

    if (textoValidado == true) {
        alert("É permitido apenas letras minúsculas e sem acento.");
        textoValidado = false;
        location.reload();
    } else {
        if (textoDescriptografado) {
            textoDescriptografado = textoDescriptografado.replaceAll(
                "enter",
                "e"
            );
            textoDescriptografado = textoDescriptografado.replaceAll(
                "imes",
                "i"
            );
            textoDescriptografado = textoDescriptografado.replaceAll("ai", "a");
            textoDescriptografado = textoDescriptografado.replaceAll(
                "ober",
                "o"
            );
            textoDescriptografado = textoDescriptografado.replaceAll(
                "ufat",
                "u"
            );

            input.value = "";

            displayDescriptografar();
            input_painel_2.value = textoDescriptografado;
        }
    }
}

function copiar() {
    input_painel_2.select();
    document.execCommand("copy");
    input_painel_2.value = "";
    location.reload();
}

function displayCriptografar() {
    painel_1.style.display = "none";
    painel_2.style.display = "flex";
    titulo_criptografado.style.display = "flex";
    titulo_descriptografado.style.display = "none";
}

function displayDescriptografar() {
    painel_1.style.display = "none";
    painel_2.style.display = "flex";
    titulo_criptografado.style.display = "none";
    titulo_descriptografado.style.display = "flex";
}

function validarTexto(texto) {
    const regex = /[A-ZáàâãéèêíïóôõöúñÁÀÂÃÉÈÊÍÏÓÒÇÖÚÑ]/g;

    if (texto.match(regex)) {
        return (textoValidado = true);
    }
}
