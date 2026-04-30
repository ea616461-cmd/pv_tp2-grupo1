const notas = [1, 3, 5, 7, 8, 9, 2, 4, 3, 6];
let candapro = 0;
let suma =0;
let cantidad = 10;
let aprobado = notas[0];
let desaprobado = notas [0]; 
console.log (`las notas son: `, notas);
for (let i=0; i<10; i++ ){
    if (notas[i]>=6){
       candapro = candapro + 1; 
       console.log(`aprobados: `, notas[i] );
       
    
    }else{
        console.log(`desaprobados: `, notas[i] );
    }   
}
for (let i = 0; i < cantidad; i++ ) {
    suma = suma +   notas[i];
}
let promedio = suma/cantidad;
console.log (`el promedio general: `, promedio);
console.log(`la cantidad de aprobados: `, candapro );