//Los array son listas ordenadas de elementos, los cuales pueden ser de cualquier tipo (number, string, booleano, arreglo)

// let array = ['nicole', true, 29, ['desarrolador']];
// console.log(array);

let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
//push sirve para agregar un elemnto en el arrray
console.log(dias.push('feriadito'));
//pop sirve para eliminar el ultimo elemento del array y puede devolverlo en caso de que se lo especifique
console.log(dias.pop());
//unshift agrega un elemento al principio del array
console.log(dias.unshift('feriao'))
//shift elimina el primer elemento del array
console.log(dias.shift())
//indexOf() devuelve la posición del elemento o parámetro que se le indique
console.log(dias.indexOf('viernes'))
//reverse invierte el orden del array  
console.log(dias.reverse())
//concat concatena 2 arreglos. El segundo arreglo debe ser insertado como parámetro
let diasDos = ['dias2, dias2.1']
console.log(concat(diasDos))
//includes Determina si contiene (true) el elemento declarado como parámetro
console.log(dias.includes('jueves'))
//join Devuelve todos los elementos con el separador indicado por parámetro
console.log(dias.join('\n'))
//splice(x,y,z)