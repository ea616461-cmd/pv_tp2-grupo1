import { cambiarTexto } from "./funciones23.js";

const inputTexto = document.getElementById("textoUsuario");

const resultado = document.getElementById("resultado");

inputTexto.addEventListener("input", () => {

    cambiarTexto(inputTexto.value, resultado);

});