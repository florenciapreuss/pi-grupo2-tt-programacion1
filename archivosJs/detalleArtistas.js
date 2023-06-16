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

// DETALLE ARTISTAS
// Para obtener el ID del artista de la URL
let artistQS = new URLSearchParams(location.search);
let artistId = artistQS.get('id');

// Obtener los detalles del artista con la API
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let artistTitle = document.querySelector(".title");
        let nb_album = document.querySelector(".nb_album");
        let image = document.querySelector(".image");

        artistTitle.innerText = data.name;
        image.src = data.picture_medium;
        nb_album.innerText = data.nb_album;

        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}/albums`)
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (data) {
                let album = data.data
                let listAlbums = document.querySelector('.listAlbums')

                for (let i = 0; i < 5; i++) {
                    let fotoAlbm = album[i].cover_medium
                    let nombreAlbm = album[i].title
                    let idAlbm = album[i].id
                    listAlbums.innerHTML += `
                    <article class="lista_albumes">
                    <img class="imagen" src="${fotoAlbm}" alt="${nombreAlbm}">
                    <h3 class="nombre_artista">
                    <a href="detail-album.html?id=${idAlbm}">${nombreAlbm}</a></h3>
                    </article>
            `
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })