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

// LISTADO DE GENEROS
let ListaGeneros = document.querySelector(".ListaGeneros")
// Obtener los generos con la API
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        for(let i=1;i<28;i++){
            ListaGeneros.innerHTML+= `<article id="generos">
            <a href="detalleGeneros.html?id=${data.data[i].id}"> 
            <h2 class="title genero"> ${data.data[i].name}</h2>
            <img src =${data.data[i].picture_medium} class="image genero"></a> 
            </article>`
        }
    })
    .catch(function(error){
        console.log(error);
    })



