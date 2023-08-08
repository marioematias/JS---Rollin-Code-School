// Ejercicio 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

let meses = [".Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// alert(meses.join("\n."))

//Ejercicio 2 -Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones: Mostrar la longitud del arreglo; mostrar los ítems de las posiciones primera, tercera y última;



let ciudades = []
let preguntaCiudad
let salir
while (salir !== false) {
    preguntaCiudad = prompt("ingrese el nombre de una ciudad");
    ciudades.push(preguntaCiudad)
    salir = confirm("queres ingresar otra ciudad?")
}
console.log(ciudades);
console.log(`la cantidad de ciudades que pusiste es ${ciudades.length}`);
// let posiciones = ciudades.filter(x => x[0])
// console.log(posiciones)
console.log(ciudades[0]);
console.log(ciudades[2]);
let ultimo = ciudades[ciudades.length - 1];
//NOTA: línea 20 -> devuelve la última posición
console.log(ultimo)