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



//MODO OSCURO
// Obtener el botón y el cuerpo del documento
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Comprobar el modo actual almacenado en localStorage
const currentMode = localStorage.getItem('mode');
if (currentMode) {
  body.classList.add(currentMode);
}

// Manejar el cambio de modo cuando se hace clic en el botón
modeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');

  // Almacenar el modo actual en localStorage
  const mode = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
  localStorage.setItem('mode', mode);
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
        let cancionTitle = document.querySelector(".titleCancion");
        let artist       = document.querySelector(".artistCancion");
        let album        = document.querySelector(".albumCancion");
        let image        = document.querySelector(".imageCancion");
        let audio        = document.querySelector(".audioCancion");


        cancionTitle.innerText = data.title;
        artist.innerText       += data.artist.name;
        album.innerText        += data.album.title;
        image.src              = data.album.cover_medium;
        image.alt              = data.album.title;
        audio.src              = data.preview;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })


//PARA AGREGAR A LA PLAYLIST
let agregarQuitar = document.getElementById('agregarQuitar');
let miplaylist = [];

let traercanciones = localStorage.getItem('atrapar'); 
if(traercanciones != null){
    miplaylist = JSON.parse(traercanciones);
}

if(miplaylist.includes(cancionId)){
    agregarQuitar.innerText = 'Quitar de mi playlist'; 
}

agregarQuitar.addEventListener('click', function(e){
    e.preventDefault();                
                       
    if(miplaylist.includes(cancionId)){
        let posicionCancion = miplaylist.indexOf(cancionId);
        miplaylist.splice(posicionCancion,1);           
        agregarQuitar.innerText = 'Agregar a mi playlist';
    }else{
        miplaylist.push(cancionId)
        agregarQuitar.innerText = 'Quitar de mi playlist';
    }

    let cadenatexto = JSON.stringify(miplaylist);            
    localStorage.setItem('atrapar',cadenatexto);
})


console.log(miplaylist);