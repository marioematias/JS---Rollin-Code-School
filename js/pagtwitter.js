function publicar(event){
    event.preventDefault();
    const tweet = document.getElementById('tweet');
    const tweetText = tweet.value;//le asigno el valor a tweetText
    const newTweet = document.createElement('div');//creo un div en html para "guardar" la info obtenida por lso tweets
    const id = new Date().getTime();//se crea la propiedad ID
    newTweet.id = id;//se asigna la propiedad ID a newTweet
    //Ahora se creara en html el contenido del textTweet y un boton para eliminar el div newTweet
    newTweet.innerHTML = `
    <p>${tweetText}</p>
    <button class="btn btn-danger d-block ms-auto" onclick="eliminarTweet(${id})">Eliminar Tweet</button>
    `
    //se le asigna propiedades (clase en este caso) a newTweet
    newTweet.classList.add('text-light', 'bg-dark', 'p-5', 'my-2');
    //identifico al div que adoptará los tweets que vayan creandose
    const tweetContainer = document.querySelector('.container-tweet');
    tweetContainer.appendChild(newTweet);
    //asigno la función de resetear el formulario
    document.querySelector('form').reset();
}
function eliminarTweet(id){
    const tweetEliminado = document.getElementById(id);//para que sepa cuál tweet eliminar, le asigno el id a la funcion
    tweetEliminado.remove();
    alert('Tweet eliminado con éxito')
}