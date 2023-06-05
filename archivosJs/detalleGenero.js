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


let artistas=document.querySelector(".artistas");
let nombreDelGenero= document.querySelector(".nombreDelGenero");

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`)

.then(function(response){
   return response.json()
})
.then(function(data){
   nombreDelGenero.innerHTML=` Artistas de: ${data.name}`
})
.catch(function(error){
   console.log(error);
})

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`)
.then(function(response){
   return response.json()
})
.then(function(dataGeneros){
   for(let i=1;i<28;i++){
      artistas.innerHTML += `<article class="generoscss">
      <a href="detalleartista.html?id=${dataGeneros.data[i].id}">
       <img src=${dataGeneros.data[i].picture_big}>
        </a>
        <h3>${dataGeneros.data[i].name}</h3>
         </article>` 
     } 
})
.catch(function(error){
   console.log(error);
})