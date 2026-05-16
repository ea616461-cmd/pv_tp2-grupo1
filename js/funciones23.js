export const cambiarTexto = (texto, elemento) => {

    elemento.textContent = texto;

    if(texto.length > 20){
        elemento.style.backgroundColor = "lightblue";
    }else{
        elemento.style.backgroundColor = "white";
    }

};