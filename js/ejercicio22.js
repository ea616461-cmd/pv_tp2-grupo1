import { replicarTexto } from './funciones22.js';

const entrada = document.querySelector('#txtEntrada');
const visor = document.querySelector('#visorTexto');

entrada.addEventListener('input', () => {
    replicarTexto(visor, entrada.value);
});