//todo 1)Crear una clase Libros con : Num de libros ya leídos, libros sin leer, siguiente libro, libro actual, ultimo libro, array con todos los libros
class listaLibros {
    constructor(propietario){
        this.propietario = propietario;
        this.libros = [];
        this.librosLeidos = [];
        this.librosNoLeidos = [];
        this.libroActual = null;
        this.ultimoLibro = null;
        this.siguienteLibro = null;
    }
    //todo 3)Crear un metodo para añadir libros a la lista delibros.
    agregarLibros(libro){ //para agregar por consola : libroMario.agregarLibros('libro')
        this.libros.push(libro);
        if(libro.leido==true){
            this.librosLeidos.push(libro)
        }else{
            this.librosNoLeidos.push(libro)
        };
    }
    //todo 4)colocar un libro en leído actual.
    empezarLibro(libro){ //para agregar por consola : libroMario.libroActual('libro')
        this.libroActual = libro;
    }
    //todo 5)crear una función para finalizar libro.
    finalizarLibro(libro){
        this.ultimoLibro = this.libroActual;
        this.librosLeidos.push(libro);
        this.librosNoLeidos = this.librosNoLeidos.filter(
            libroNL => 
            libroNL.titulo !==
            this.libroActual.titulo
        );
        this.libroActual = null;
    }
    //todo 6)crear una función para siguienteLibro.
    siguienteLibro(){
        if (this.librosNoLeidos.length > 0) { //si libros no leidos es mayor a cero
            this.siguienteLibro = this.siguienteLibro[0] //devuelve el primer objeto del array
        }else{
            this.siguienteLibro = null //si no hay libros no leídos
        }
    }
}//Ultimo método sacado de BING (siguienteLibro)
//todo 2)Crear una clase libro con: Titulo, genero, autor, booleano: si ya está leído (leído=true; noLeido=false).
class Libro {
    constructor(titulo, genero, autor, leido){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leido = leido;
    }
}
const LibroMario = new listaLibros('Mario');
const elPrincipito = new Libro('El Principito', 'Fantasía', 'Exupery', true)