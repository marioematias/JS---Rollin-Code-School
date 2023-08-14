//! EJERECICO REPASO: Creamos una aplicación que tiene eun denso prompt que sólo lo podrá sacar alguien que sea rey y que se llame arturo

// let nameUser;
// let isKing = false;

// while (nameUser !== 'Arturo' && isKing !== true) {
//     nameUser = (prompt('Ingrese su nombre'));
//     if (nameUser == 'Arturo'){
//         isKing = confirm('Sos el Rey?')
//         if(isKing == false){
//             alert('No sos REY')
//         }
//         if(isKing == true){
//             alert('Hola REY!')
//         }
//     }
// }

//todo : EL USUSARIO INGRESA EL NUMERO DE LA TABLA QUE DESSEA OBTENER: Y LE DEVOLVEMOS LA TABLA QUE SOLICITÓ

let numeroTabla = prompt('Ingrese el número de tabla que desea obtener');

for(let i=1; i<=10; i++){
    console.log(`${numeroTabla} X ${i} = ${numeroTabla * i}`)
}