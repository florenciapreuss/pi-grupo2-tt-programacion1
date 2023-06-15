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
        detalleGeneros.innerHTML = `<h1 class="title detGenero"> ${data.name} </h1>
        <img src =${data.picture_medium} class="image detGenero">`
    })
    .catch(function (error) {
        console.log(error);
    })
