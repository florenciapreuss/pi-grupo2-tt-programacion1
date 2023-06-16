// HEADER 
// Para que el formulario solo haga la busqueda cuando se ingresan mas de 3 letras
let form = document.querySelector('.form');
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

// DETALLE DEL ALBUM

// Para obtener el ID del album de la URL
let albumQS = new URLSearchParams(location.search);
let albumId = albumQS.get('id');

// Obtener los detalles del album con la API
fetch(` https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumId}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let albumTitle  = document.querySelector(".titleAlbum");
        let artist      = document.querySelector(".artistAlbum");
        let image       = document.querySelector(".imageAlbum");
        let releaseDate = document.querySelector(".releaseDateAlbum");
        let genre       = document.querySelector(".genreAlbum");
        let listTracks  = document.querySelector(".listTracksAlbum");

        albumTitle.innerText  = data.title;
        artist.innerText      += data.artist.name;
        image.src             = data.cover_medium;
        releaseDate.innerText = data.release_date;
        genre. innerText      += data.genres.data[0].name;
        
        for (let i = 0; i < 5; i++) {
            listTracks.innerHTML += `<li>${data.tracks.data[i].title}</li>`
        }
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


