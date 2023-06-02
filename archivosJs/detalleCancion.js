// Obtener el ID de la canción de la URL
let urlParams = new URLSearchParams(location.search);
let cancionId = urlParams.get('id');

// Obtener los detalles de la canción mediante la API
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionId}`)
.then(function (response) {
    return response.json()
    })

    .then(function (data){
        let detalleCancion = document.getElementById('detalleCancion');

        // Crear el contenido HTML con los detalles de la canción
        let html = `
            <h2>${data.title}</h2>
            <p>Artista: ${data.artist.name}</p>
            <p>Álbum: ${data.album.title}</p>
            <img src="${data.album.cover_big}" alt="${data.album.title} Cover">
            <audio controls src="${data.preview}"></audio>
        `;

        // Agregar el contenido HTML al elemento detalleCancion
        detalleCancion.innerHTML = html;
    })
    .catch(function(error) {

        console.log("Error: " + error);
      
      })
