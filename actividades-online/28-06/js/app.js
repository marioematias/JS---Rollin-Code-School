//! Clase 28-06-23

const nota1 = Number(prompt('Ingrese la nota del 1er trimestre'));
const nota2 = Number(prompt('Ingrese la nota del 2do trimestre'));
const nota3 = Number(prompt('Ingrese la nota del 3er trimestre'));

let promedio = (nota1 + nota2 + nota3) /3
console.log = promedio

if(isNaN)(nota1) || if(isNaN)(nota2) || if(isNaN)(nota3) {
    alert('SOLO NUMEROS')
}slse{
    if(promedio >= 6) {
        alert('Aprobado')
}
    else {
        alert('Desaprobado')
    }
}

//!Qué día es hoy?

let day = new Date().getDay();

switch (day) {
    case 1:
        console.log('Hoy es lunes')
        break;
    case 2:
        console.log('Hoy es Martes')
        break;
    case 2:
        console.log('Hoy es Miercols')
        break;
}