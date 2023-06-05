let ListaGeneros = document.querySelector(".ListaGeneros")
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")

.then(function(response){
    return response.json()
})
.then(function(data){
    for(let i=1;i<28;i++){
        ListaGeneros.innerHTML+= `<article class="genero"> 
        <img src =${data.data[i].picture_medium} class="imagenGenero"> </a> <h2 class="tituloGenero"> ${data.data[i].name} </h2>
        </article>`
        
    }
    console.log(data.data);
})
.catch(function(error){
    console.log(error);
})

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