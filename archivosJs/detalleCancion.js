// Obtener el ID de la canción de la URL
const urlParams = new URLSearchParams(window.location.search);
const cancionId = urlParams.get('id');

// Obtener los detalles de la canción mediante la API
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionId}`)
    .then(response => response.json())
    .then(data => {
        const detalleCancion = document.getElementById('detalleCancion');

        // Crear el contenido HTML con los detalles de la canción
        const html = `
            <h2>${data.title}</h2>
            <p>Artista: ${data.artist.name}</p>
            <p>Álbum: ${data.album.title}</p>
            <img src="${data.album.cover_big}" alt="${data.album.title} Cover">
            <audio controls src="${data.preview}"></audio>
        `;

        // Agregar el contenido HTML al elemento detalleCancion
        detalleCancion.innerHTML = html;
    })
    .catch(error => console.log(error));

  
  
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
