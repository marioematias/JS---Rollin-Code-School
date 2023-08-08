//Escribe un programa que cree un Objeto CUENTA con las siguientes propiedades:
//Propiedad Titular;
//Propiedad Saldo, teniendo como valor inicial 0;
//Método Ingresar() que me permita añadir dinero a la cuenta, pasando la cantidad como parámetro;
//Método extraer() que me pertira retirar dinero de la cuenta;
//Método informar() que retorne la información del estado de cuenta.

class Cuenta {
    constructor(titular){
        this.id = parseInt(Math.random()*100000);
        this.titular = titular;
        this.saldo = 0;
    }
    ingresar(monto){
        if(monto > 0){
            this.saldo = this.saldo+monto;
            console.log(`Tu saldo actual es: ${saldo}`)
        }else if(isNaN(monto)){
            console.log('Solo se admiten números')
        }else{
            console.log('ingrese un monto mayor a 0')
        }
    }
    extraer(monto){
        if(monto <= this.saldo && monto>0){
            this.saldo = this.saldo-monto;
            console.log(`Tu saldo actual es: ${this.saldo}`)
    }else if(isNaN(monto)){
        console.log('Solo se admiten números')
    }else{
        console.log('Saldo insuficiente ó monto inválido')
    }
    }
    informar(){
        console.log(`El saldo de la cuenta número ${this.id}, registrada a nombre de ${this.titular}, es de: $${this.saldo}`)
    }
}
const cuentaLautaro = new Cuenta('Lautaro')