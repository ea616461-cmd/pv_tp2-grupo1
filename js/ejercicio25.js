import { obtenerColorAleatorio, cambiarFondoDocumento } from './funciones25.js';

const boton = document.querySelector('#btnGenerador');
const cuerpoPagina = document.body;

boton.addEventListener('click', () => {
    const colorElegido = obtenerColorAleatorio();
    cambiarFondoDocumento(cuerpoPagina, colorElegido);
});