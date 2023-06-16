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



//DETALLE GENEROS
// Para obtener el ID del genero de la URL
let generoQS = new URLSearchParams(location.search);
let generoId = generoQS.get('id');

// Obtener los detalles del genero con la API
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${generoId}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let detalleGeneros = document.querySelector("#detalleGeneros")
        detalleGeneros.innerHTML = `<h1 class="titleDetGenero"> ${data.name} </h1>
        <img src =${data.picture_medium} class="imageDetGenero">`
    })
    .catch(function (error) {
        console.log(error);
    })
