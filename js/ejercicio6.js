const edades=[8,29,32,61,72,25,40,22,29];
let suma = 0;
let cantidedad = 9;
for (let i = 0; i < cantidedad; i++ ) {
    suma = suma +   edades[i];
}
let promedio = suma/cantidedad;
console.log (`Edades: `, edades );
console.log (`promedio: `, promedio );