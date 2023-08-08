//HERENCIA -> Traer datos desde otro objeto/archivo. Lo creamos con clase

class Persona {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    saludar() { //en las clases no hace falta tipear "function"
        console.log('Hola soy ' + this.name);
    }
}
class Estudiante extends Persona {
    constructor(name, age, comision){
        super(name, age); //con super definimos las propiedads que queremos traer del objeto persona
        this.comision = comision;
    }
}
let ivan = new Estudiante('ivan', '30', 'comision 59i'); //INSTANCIA -> definimos el objeto con sus respectivos datos

class SuperHeroe extends Persona {
    constructor(name, age, power){
        super(name, age);
        this.power = power;
    }
}
let Superman = new SuperHeroe ('Superman', 40, 'Volar')
let Ironman = new SuperHeroe ('Ironman', 45, 'multimillonario')