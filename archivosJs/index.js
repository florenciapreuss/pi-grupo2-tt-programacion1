let canciones= document.querySelector(".canciones");
fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks") 
.then(function (response) {
    return response.json()
})

.then(function(dataCancion){
    for (let i=0; i<5; i++){
        canciones.innerHTML += `<article class="cancion"><a href= "detalleCancion.html?id=${dataCancion.data[i].id}"> 
        <img src =${dataCancion.data[i].album.cover_big}> </a> <h2> ${dataCancion.data[i].title} </h2>
        </article>`
    }

})
.catch(function(error) {

    console.log("Error: " + error);
})

//ahora albumes
let albumes=document.querySelector(".discosalbumes");
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
.then(function (respuesta){
    return respuesta.json()
})
.then(function(dataAlbum){
    for(let i =0;i<5;i++){
        albumes.innerHTML += `<article class="discoAlbum"><a href="detallealbum.html?id=${dataAlbum.data[i].id}"> 
        <img src=${dataAlbum.data[i].cover_big}> </a> <h2>${dataAlbum.data[i].title}</h2> </article>`
    }    
})
.catch(function(error) {

    console.log("Error: " + error);
  
  })


//ahora artistas

//Listado artistas
let artistas=document.querySelector(".artistas");
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
.then(function (respuesta){
    return respuesta.json()
})
.then(function(dataArtista){
    for(let i =0;i<5;i++){
        artistas.innerHTML += `<article class="artista"><a href="detalleartista.html?id=${dataArtista.data[i].id}"> <img src=${dataArtista.data[i].picture_big}> </a> <h2>${dataArtista.data[i].name}</h2> </article>`
    }    
})
.catch(function(error) {

    console.log("Error: " + error);
  
  })

/* Búsqueda: */
/* function validarBusqueda() {
    let valor=document.forms["sectionBusqueda"]["form"].value;
    let span=document.body.querySelector("form span[name='mensajeError']")
    console.log(span);
    if (valor==""){
        span.innerHTML="¡El campo de búsqueda está vacío!";
        return false;
    }else if (valor<3){
        span.innerHTML="¡Debes colocar al menos 3 letras!";
        return false;
    }else return true;
} */

let cantidadDeLetras=busqueda.lenght()
let buscador=document.querySelector("submitButton");
buscador.addEventListener('submit', function(e){
    if (cantidadDeLetras == 0) {
        let advertencia="El campo de búsqueda está vacío";
        alert(advertencia)
    }else if (cantidadDeLetras < 3) {
        let segundaAdvertencia="Debe colocar al menos 3 letras";
        alert(segundaAdvertencia)
    } else {
        return true;
    }
})
