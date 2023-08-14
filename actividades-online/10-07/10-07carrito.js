let productos = ['gaseosa', 'vino', 'fernet', 'agua', 'gin'];
let carrito = [];
const agregarProducto = () => {
    const productoAgregado = prompt('¿Qué producto desea llevar?').toLowerCase();
    if(productos.includes(productoAgregado)){
        carrito.push(productoAgregado);
        alert('Producto agregado al carrito');
        console.log(carrito);
    }else{
        alert('Producto sin stock');
    }
}
const mostrarCarrito = () => {
alert('tus productos seleccionados son: ' +carrito.join('\n'));
}
const buscarProducto = () => {
    const productoABuscar = prompt('ingrese el producto que desea buscar').toLocaleLowerCase();
    const productoEncontrado = carrito.find(producto => producto == productoABuscar);
    alert(productoEncontrado);
}
const buscarCoincidencia = () =>{
    const buscar = prompt('Buscar coincidencias');
    const resultado = productos.filter(producto => producto.includes(buscar));
    alert(resultado)
}
const eliminarProducto = () =>{
    const productoAEliminar = prompt('Ingrese el producto que desea eliminar');
    const productoSeleccionado = carrito.indexOf(productoAEliminar)
    if(carrito.includes(productoAEliminar)){
        carrito.splice(productoSeleccionado, 1)
        alert('producto eliminado correctamente')
    }else{
        alert('producto no encontrado')
    }
}