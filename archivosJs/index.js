// HEADER 
//Para que el formulario solo haga la busqueda cuando se ingresan mas de 3 letras
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

//MODO OSCURO//Funcionalidad electiva://
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


//Listado de las 5 canciones 
let canciones = document.querySelector(".canciones");

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks")
    .then(function (response) {
        return response.json()
    })
    .then(function (dataCancion) {
        for (let i = 0; i < 5; i++) {
            canciones.innerHTML += `<article class="cancion">
            <a href= "detalleCancion.html?id=${dataCancion.data[i].id}"> 
            <img class="indexImagen" src =${dataCancion.data[i].album.cover_medium}></a> 
            <h2 class= "nombre">${dataCancion.data[i].title}</h2>
            </article>`
        }
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })



//Listado de los 5 albumes
let albumes = document.querySelector(".discosalbumes");

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
    .then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (dataAlbum) {
        for (let i = 0; i < 5; i++) {
            albumes.innerHTML += `<article class="discoAlbum">
            <a href="detallealbum.html?id=${dataAlbum.data[i].id}"> 
            <img class="indexImagen" src=${dataAlbum.data[i].cover_medium}></a> 
            <h2 class= "nombre">${dataAlbum.data[i].title}</h2> 
            </article>`
        }
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })



//Listado de los 5 artistas
let artistas = document.querySelector(".artistas");

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
    .then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (dataArtista) {
        for (let i = 0; i < 5; i++) {
            artistas.innerHTML += `<article class="artista">
            <a href="detalleArtistas.html?id=${dataArtista.data[i].id}"> 
            <img class="indexImagen" src=${dataArtista.data[i].picture_medium}></a> 
            <h2 class= "nombre">${dataArtista.data[i].name}</h2> 
            </article>`
        }
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })