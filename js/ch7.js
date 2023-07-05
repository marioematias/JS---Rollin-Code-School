
//!Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

//!Definir variables suma y contador, ya que son los datos que iremos recogiendo de los prompt;
//!Crear bucle con while donde se pida un número por prompt mientras se presione aceptar;
//!Cuando se precione cancelar (la función prompt devuelve valor null cuando se cancela), cortar el bucle utilizando la función break;
//!Convertir los números introducidos de String a Number para evitar que los tome como texto;
//!Establecer alerta si lo que se introduce no es un número (la función Not A Number sirve para eso), luego continuar el bucle utilizando la función continue;
//!Realizar la suma y actualizar el contador (el operador += suma el valor de la derecha al de la izquierda y asigna el resultado a la variable de la izquierda. Por ejemplo, suma += numero es equivalente a suma = suma + numero.)
//!devolver el resultado de la suma y el total de numeros intorducidos por console log

let suma = 0
let contador = 0

while (true) {
    let numero = prompt('Introduzca un número');
    if(numero==null) {
        break;
    }
    numero = Number(numero);
    if(isNaN(numero)){
        alert('introduzca un número válido');
        continue;
    }
    suma +=numero; contador++;
}
console.log('La suma de los números introducidos es ' + suma)
console.log('Has introducido ' + contador + ' números')

//!Challenge resuelto con ayuda