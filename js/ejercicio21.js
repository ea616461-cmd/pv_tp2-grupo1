import { actualizarCapital, loguearSeleccion } from './funciones21.js';

const selectPais = document.querySelector('#selectPais');
const selectCapital = document.querySelector('#selectCapital');

selectPais.addEventListener('change', () => {
    actualizarCapital(selectPais, selectCapital);
    loguearSeleccion(selectPais, selectCapital);
});