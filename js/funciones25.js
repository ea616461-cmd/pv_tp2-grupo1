export const obtenerColorAleatorio = () => {
    const paletaColores = [
        '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', 
        '#e67e22', '#e74c3c', '#fdcb6e', '#fd79a8', 
        '#485460', '#0be881', '#575fcf', '#ef5777'
    ];
    const indiceAzar = Math.floor(Math.random() * paletaColores.length);
    return paletaColores[indiceAzar];
};
export const cambiarFondoDocumento = (elementoBody, colorNuevo) => {
    elementoBody.style.backgroundColor = colorNuevo;
    console.log(`[Cambio de Color] El fondo del body cambió a: ${colorNuevo}`);
};