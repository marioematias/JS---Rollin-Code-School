//Clase 17-07-23
//Array de objetos: películas o series

const series = [
    {
    name: 'Friends',
    temporadas: 10,
    descripton: 'Un grupo de amigos',
    mostrarDesc: function () {
        console.log(`La serie se llama ${this.name}, un resúmen breve es: ${this.descripton}`)
    }
},
{
    name: 'GOT',
    temporadas: 10,
    descripton: 'game of throne',
    mostrarDesc: function () {
        console.log(`La serie se llama ${this.name}, un resúmen breve es: ${this.descripton}`)
    }
}
]
//Cuando se utuliza "this", se hace referencia a la característica del objeto donde se define la función
//metodos para recorrer arrays: map (Recorrer y hacer "algo" con eso), forEach
series.forEach(series => series.mostrarDesc());