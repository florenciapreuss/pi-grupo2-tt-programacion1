// HEADER 
// Para que el formulario solo haga la busqueda cuando se ingresan mas de 3 letras
let form  = document.querySelector('.form');
let input = document.querySelector('.busqueda');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    if (input.value.length >= 3) {
        form.submit();
    } 
    else if (0 < input.value.length && input.value.length < 3) {
        alert("Debes escribir por lo menos tres caracteres");
    } 
    else {
        alert("El campo de búsqueda está vacío");
    }
});

//DETALLE CANCION
// Para obtener el ID de la canción de la URL
let cancionQS = new URLSearchParams(location.search);
let cancionId = cancionQS.get('id');

// Obtener los detalles de la canción con la API
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionId}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data){
        let cancionTitle = document.querySelector(".cancionTitle");
        let artist       = document.querySelector(".artist");
        let album        = document.querySelector(".album");
        let image        = document.querySelector(".image");
        let audio        = document.querySelector(".audio");

        cancionTitle.innerText = data.title;
        artist.innerText       = data.artist.name;
        album.innerText        = data.album.title;
        image.src              = data.album.cover_medium;
        image.alt              = data.album.title;
        audio.src              = data.preview;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })


//Trabajo Local Storage -- Gonchy
// capturamos elemento
let agregarQuitar = document.getElementById('agregarQuitar')
// creamos un array
let miplaylist = [];
// traemos los datos del local storage
let traercanciones = localStorage.getItem('pepito')    
//console.log(traercanciones);
//En las proximas lineas dice basicamente lo sgte: si los datos que traigo de "traercanciones" no son nulos, eso quiere decir que hay datos, por lo tanto, pido que se los traiga en forma de un array
if(traercanciones != null){
    miplaylist = JSON.parse(traercanciones) //Estoy haciendo que dentro del array "miplaylist" el cual es un Array vacio, 
                                            //Ahora va a contener todos los datos en lo que seria el navegador a travez del local storage.
                                            // me los trae en formato string y lo convierto en un Array
}
//verificando si el id esta o no en el Array
if(miplaylist.includes(id)){
    agregarQuitar.innerText = 'Quitar de mi playlist'   //si en mi playlist ya esta la cancion, le digo que me cambie el titulo "anadir a favoritos" y que aparezca "quitar de favoritos"
}
// controlamos el evento click sobre el elemento capturado
agregarQuitar.addEventListener('click', function(e){
    e.preventDefault()                                    // si se hace click en el "agregar a mi playlist" (el cual esta dentro de la clase agregarQuitar)
                                                         // le pedimos que agregue el elemento a el array de miplaylist
    if(miplaylist.includes(id)){
        let posicionCancion = miplaylist.indexOf(id);
        miplaylist.splice(posicionCancion,1);                
        agregarQuitar.innerText = 'Agregar a mi playlist';
    }else{
        miplaylist.push(id)
        agregarQuitar.innerText = 'Quitar de mi playlist';
    }
    //cargamos los datos al local storage aplicandole el json.stringify a mi array
    let cadenatexto = JSON.stringify(miplaylist);            // convierte un objeto  texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo.
    localStorage.setItem('pepito',cadenatexto);
}) 

console.log(miplaylist);