let detalleGeneros = document.querySelector(".detalleGeneros")

let genero = new URLSearchParams(location.search);
let generoId = genero.get('id');

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${generoId}`)

   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      detalleGeneros.innerHTML=`<article class="genero"> <h1 class="tituloGenero"> ${data.name} </h1>
      <img src =${data.picture_medium} class="imagenGenero"> </a> 
      </article>`
      console.log(data);

   })
   .catch(function (error) {
      console.log(error);
   })




/* Cantidad de letras en busqueda: */
let form = document.querySelector('.form');
let input = document.querySelector('.busqueda');

form.addEventListener('submit', function (e) {
   e.preventDefault()


   if (input.value.length >= 3) {
      form.submit();
   } else if (0 < input.value.length < 3) {
      alert("Debes escribir por lo menos tres caracteres");
   } else {
      alert("El campo de búsqueda está vacío");
   }
});