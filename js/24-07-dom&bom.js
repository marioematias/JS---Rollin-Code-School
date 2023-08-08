//! DOM Y BOM
//DOM:DOCUMENT OBJECT MODEL => A través del DOM se puede acceder al html, o a todo lo visual de un proyecto.
//BOM: BROWSER OBJECT MODEL => A través del BOM se puede acceder a toda la información de la barra de navegación.
//!Funciones para manejar el tiempo
//todo setTimeout (Ejecuta una función pasado un determinado lampso de tiempo)
setTimeout(() => console.log('Buenas noches'), 6000);
//?Ejercicio: Crear un contador que pasado los 10 segundos me muestre un mensaje para el despegue (count down 10-0)
let contador = 10;
const contadorTiempo = setInterval(() => {
    console.log('despegue en ', + contador)
    contador--
}, 1000)
setTimeout(() => {
    clearInterval(contadorTiempo);
    console.log('Despegue!')
}, 10000)
//! DOM Y BOM - 26/07
//function cambiarTexto () {
    //document.getElementById('') Trae un elemnto a traves de su ID
    //document.getElementByClassName('') Trae los elemntos que tengas esa clase
    //document.querySelector('. o # + nombre') por selector
    //document.querySelectorAll('. o # + nombre') por selector
    //document.getElementByTagName('') por nombre de etiqueta/tag


function cambiarTexto(){
    const h2Cambio = document.getElementById('h2-cambiar');
    h2Cambio.innerText = 'El texto Cambió';
    h2Cambio.style.backgroundColor = 'red';
}
function cambiarTema(){
    const elementoCambiado = document.getElementById('probandoTema')
    if(elementoCambiado.classList.contains('light')){
        elementoCambiado.classList.add('dark');
        elementoCambiado.classList.remove('light');
    }else{ //REVISAR NO VUELVE EL CAMBIO
        elementoCambiado.classlist.add('light');
        elementoCambiado.classList.remove('dark');
    }
}
// function agregarElemento(){
//     const newElement = document.createElement('div')
//     newElement.classList.add('cuadrado')
//     newElement.innerText = 'Soy un cuadrado!' 
//     const padreElemento = document.querySelectorElement('.nuevo-elemtno')  
//     padreElemento.appendChild(newElement)
// }
function agregarElemento(){
    const newElement = document.createElement('div');//crear un elemtno
    newElement.classList.add('cuadrado');//Agregar info al elemento creado (clase)
    newElement.innerText = 'soy un cuadrado';//Agregar info al elemento creado (txt)
    const padreElemento = document.querySelector('.nuevo-elemento');//buscamos al padre para ubicarlo en el html 
    padreElemento.appendChild(newElement);//adoptamos al elemento hijo
}