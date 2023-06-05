// Obtener el ID del album de la URL
let album = new URLSearchParams(location.search);
let albumId = album.get('id');

// Obtener los detalles del album mediante la API
fetch(` https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumId}`)
.then(function (response) {
    return response.json()
    })

    .then(function (data){
        let tituloAlbum = document.querySelector(".titulo");
        let artista = document.querySelector(".artista");
        let imagen = document.querySelector(".imagen");
        let release = document.querySelector(".releaseDate")

        tituloAlbum.innerText = data.title;
        artista.innerText = data.artist.name;
        imagen.src = data.cover_big;
        release.innerText = data.release_date;
    })
    .catch(function(error) {

        console.log("Error: " + error);
      
      })

/* Cantidad de letras en busqueda: */
let form = document.querySelector('.form');
let input = document.querySelector('.busqueda');

form.addEventListener('submit', function(e) {
   e.preventDefault()


   if (input.value.length >= 3) {
      form.submit();
   } else if (0 < input.value.length < 3) {
    alert("Debes escribir por lo menos tres caracteres");
   } else {
       alert("El campo de búsqueda está vacío");
   }
});
