// Obtener el ID de la canción de la URL
let cancion = new URLSearchParams(location.search);
let cancionId = cancion.get('id');

// Obtener los detalles de la canción mediante la API
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionId}`)
.then(function (response) {
    return response.json()
    })

    .then(function (data){
        let tituloCancion = document.querySelector(".titulo");
        let artista = document.querySelector(".artista");
        let album = document.querySelector(".album");
        let imagen = document.querySelector(".imagen");
        let audio = document.querySelector(".audio");
        

        tituloCancion.innerText = data.title;
        artista.innerText = data.artist.name;
        album.innerText = data.album.title;
        imagen.src = data.album.cover_big;
        imagen.alt = data.album.title;
        audio.src = data.preview;
    })
    .catch(function(error) {

        console.log("Error: " + error);
      
      })
