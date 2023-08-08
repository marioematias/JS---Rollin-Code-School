class Product {
    constructor (name, price, productId, description, image){
        this.name = name;
        this.price = price;
        this.productId = productId;
        this.description = description;
        this.image = image;
    }
}
let products = [
    new Product ('samsung', 60000, 'smsg123', 'Teléfono celular Samsung s200 - 4g', 'https://cdn.phonemore.com/content/2020/jpg/13082.jpg'),
    new Product ('motorola', 80000, 'mtr123', 'Teléfono celular Motorola X - 4g', 'https://armoto.vtexassets.com/arquivos/ids/163060-800-auto?v=638097529553430000&width=800&height=auto&aspect=true'),
    new Product ('iphone', 100000, 'Iphone123', 'Teléfono celular Iphone 14 pro max - 8g', 'https://i.blogs.es/92cb5c/iphone-14-pro-iphone-14-pro-max-analisis-aps-009/1366_2000.jpeg'),
]
products.forEach(product => {
    const newProductCard = document.createElement('div')
    newProductCard.id = product.productId;
    //le agregamos info
    newProductCard.classList.add = ('card', 'mx-2');
    newProductCard.style.width ='18rem';
    newProductCard.innerHTML = `
    <img src=${product.image} class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <span href="" class= "text-danger">${product.price}</spam>
        <br>
        <button class="btn btn-primary my-3" onclick="agregarCarrito(${product.productId})>Agregar al carrito</button>
        <button class="btn btn-danger">Agregar a favoritos</button>
    </div>
    `
    //buscamos al padre en el html
    const padreContainer = document.querySelector('main');
    padreContainer.appendChild(newProductCard)
});
let carrito = []


function agregarCarrito (productId) {
    let product = products.find(product => product.productId == productId)
    carrito.push(product)
    //crear elemento que vamos a mostrar ene l modal

    //agregar info
    //buscar padre en html
    //adoptar
    
}