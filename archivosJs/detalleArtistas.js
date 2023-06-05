// Obtener el ID del artista de la URL
let artista = new URLSearchParams(location.search);
let artistaId = artista.get('id');

// Obtener los detalles de la canción mediante la API
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistaId}`)
.then(function (response) {
    return response.json()
    })

    .then(function (data){
        let tituloCancion = document.querySelector(".titulo");
        let artista = document.querySelector(".artista");
        let numAlbum = document.querySelector(".numAlbum");
        let imagen = document.querySelector(".imagen");
        

        tituloCancion.innerText = data.name;
        artista.innerText = data.name;
        numAlbum.innerText = data.nb_album;
        imagen.src = data.picture_medium;
    })
    .catch(function(error) {

        console.log("Error: " + error);
      
    })