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



// DETALLE ARTISTAS
// Para obtener el ID del artista de la URL
let artistQS   = new URLSearchParams(location.search);
let artistId   = artistQS.get('id');

// Obtener los detalles del artista con la API
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data){
        let artistTitle  = document.querySelector(".titleArtista");
        let image        = document.querySelector(".imageArtista");

        artistTitle.innerText = data.name;
        image.src             = data.picture_medium;
       
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}/albums`)
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (data) {
                let album = data.data
                let listAlbums = document.querySelector('.listAlbumsArtista')

                for (let i = 0; i < 5; i++) {
                    let fotoAlbm = album[i].cover_medium
                    let nombreAlbm = album[i].title
                    let idAlbm = album[i].id
                    listAlbums.innerHTML += `
                    <article class="AlbumArtista">
                    <img class="imagenArtista" src="${fotoAlbm}" alt="${nombreAlbm}">
                    <h3 class="nombreAlbumArtista">${nombreAlbm}</h3>
                    </article>`
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })