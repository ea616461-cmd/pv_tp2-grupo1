const nombres=[`walter`, `fernando`, `maria`, `sofia`, `ana`, `lucas`];
let nombmaslargo = nombres [0];

for (let i=0; i < 6; i++ ){
    if (nombres[i].length > nombmaslargo.length) {
    nombmaslargo=nombres[i];
    }
}
console.log (`el nombre mas largo es: `+ nombmaslargo);
console.log (`lista de nombres: `+ nombres);
//fin del ejercicio 7
