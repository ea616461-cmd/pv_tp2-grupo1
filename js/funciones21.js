// Función para vincular la capital según el país seleccionado
export const actualizarCapital = (comboPais, comboCapital) => {
    const valorPais = comboPais.value;
    
    if (valorPais === "") {
        comboCapital.value = "";
        comboCapital.disabled = true;
    } else {
        comboCapital.disabled = false;
        comboCapital.value = valorPais; // Vincula usando el mismo value ('arg', 'bra', etc.)
    }
};

// Función para mostrar por consola qué país y capital están seleccionados
export const loguearSeleccion = (comboPais, comboCapital) => {
    if (comboPais.value !== "") {
        // Obtenemos el texto visible dentro del <option> seleccionado
        const textoPais = comboPais.options[comboPais.selectedIndex].text;
        const textoCapital = comboCapital.options[comboCapital.selectedIndex].text;
        
        console.log(`País seleccionado: ${textoPais} | Capital: ${textoCapital}`);
    }
};