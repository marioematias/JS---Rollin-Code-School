//FUNCIONES - también conocidas como procedimientos o métodos.

//Una función es básciamente una caja negra que hace algo dentro de ella.
//Los argumentos son los datos de entrada que recibe, y puede devolver datos de salida
//La idea de las funciones es evitar repetir varias veces el mismo código
//Existen tres formas de escribir una función: declarativas, anonimas, arrow functions (las que más vamos a utilizar durante el cursado, porque se la utiliza en React)

//declarativa - realiza un Hoisting, la lleva al principio del código, pero queda exactamente donde la escribimos
//podríamos declarla al final y de igual forma sería trasladada al principio
// function hello1(){
//     console.log('Hola mundo declarativa');
// }
// //anonima
// const hello2 = function (){
//     console.log('Hola mundo anonima');
// }
// //arrow function
// const hello3 = () => {
//     console.log('Hola mundo arrowfn');
// }
// hello1();
// hello2();
// hello3();

//Funciones y arrays: Tengo una base de datos y quiero hacer dos tareas: eliminar un usuario y actualizar otro.

//Eliminar un objeto de un array

let dataBase = ['usuario1', 'usuario2', 'usuario3', 'usuario4']
console.log(dataBase)
const deleteUser = () => {
    let userName = prompt('ingrese el usuario que desea eliminar');
    let userPosition =  dataBase.indexOf(userName);
    if(dataBase.includes(userName)){
        dataBase.splice(userPosition,1);
        alert('usuario eliminado correctamente')
    }else{
        alert('usuario no encontrado')
    }
    console.log(dataBase)
}

//modificar un objeto de un array

const updateUser = () => {
    let userName = prompt('ingrese el usuario que desea modificar');
    let userUpdate = prompt('ingrese el nuevo usuario').toLocaleLowerCase();
    let userPosition =  dataBase.indexOf(userName);
    if (dataBase.includes(userName)){
        dataBase.splice(userPosition,1, userUpdate);
        alert('Usuario modificado correctamente')
    }else{
        alert('Usuario no encontrado')
    }
    console.log(dataBase)
}
//se pueden declarar variables iguales dentro de diferentes funciones