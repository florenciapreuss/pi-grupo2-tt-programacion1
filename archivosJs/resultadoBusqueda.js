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


//RESULTADO BUSQUEDA
let queryString = location.search 
let busquedaQs = new URLSearchParams(queryString);
let busqueda = busquedaQs.get("busqueda");

console.log(busqueda);

let titulo = document.querySelector('.resultBusqueda');
let formulario = document.querySelector("form");
let formId = document.querySelector("#formId");

titulo.innerHTML += `Resultado de busqueda:"${busqueda}"`

//Buscar coincidencias en CANCIONES
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=" + busqueda + '&&limit=3')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let listCanciones = data.data;
        let resultCanciones = document.querySelector(".resultBusquedaCanciones");
        
        if (listCanciones.length == 0) {
            resultCanciones.innerHTML = '<h3>No se encontraron coincidencias</h3>'
        }

        for (let i = 0; i < 3; i++) {
            resultCanciones.innerHTML += `<article class="resultSimilar">
            <img class="resultImagen" src="${listCanciones[i].album.cover_big}" alt="${listCanciones[i].title}">
            <h3 class="nameArtist"><a href="detallecancion.html?id=${listCanciones[i].id}">${listCanciones[i].title}</a></h3>
            </article>`
        }
    })

//Buscar coincidencias en ALBUMS
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" + busqueda + '&&limit=3')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let listAlbums = data.data;
        let resultAlbums = document.querySelector(".resultBusquedaAlbums");

        if (listAlbums.length == 0) {
            resultAlbums.innerHTML = '<h3>No se encontraron coincidencias</h3>'
        }

        for (let i = 0; i < listAlbums.length; i++) {
            resultAlbums.innerHTML += ` <article class = "resultSimilar"> 
        <img class="resultImagen" src="${listAlbums[i].cover_big}" alt="${listAlbums[i].title}">
        <h3 class="nameArtist"><a href="detalleAlbum.html?id=${listAlbums[i].id}">${listAlbums[i].title}</a></h3>
        </article>`;

        }
    })


//Buscar coincidencias en ARTISTAS
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + busqueda + '&&limit=3')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let listArtists = data.data
        let resultArtists = document.querySelector(".resultBusquedaArtistas")

        if (listArtists.length == 0) {
            resultArtists.innerHTML = '<h3>No se encontraron coincidencias</h3>'
        }

        for (let i = 0; i < 3; i++) {
            resultArtists.innerHTML += `
            <article class="resultSimilar">
            <img class="resultImagen" src="${listArtists[i].picture_big}" alt="${listArtists[i].name}">
            <h3 class="nameArtist"><a href="detalleArtistas.html?id=${listArtists[i].id}">${listArtists[i].name}</a></h3>
            </article> `
        }
    })