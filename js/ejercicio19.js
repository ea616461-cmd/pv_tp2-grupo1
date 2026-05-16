const verificarMayoria = (edad) => {
    if (edad >= 18) {
        console.log(`Con ${edad} años, la persona es mayor de edad.`);
    } else {
        console.log(`Con ${edad} años, la persona es menor de edad.`);
    }
};

verificarMayoria(20);