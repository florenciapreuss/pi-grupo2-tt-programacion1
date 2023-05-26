let canciones= document.querySelector(".canciones");
fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks") 
.then(response => {
    return response.json()
})

.then(dataCancion =>{
    for (let i=0; i<5; i++){
        canciones.innerHTML += `<article class="cancion"><a href= "detalleCancion.html?id=${dataCancion.data[i].id}"> 
        <img src =${dataCancion.data[i].album.cover_big}> </a> <h2> ${dataCancion.data[i].title} </h2>
        </article>`
    }

})
.catch(error=>console.log(error))

//ahora albumes
let albumes=document.querySelector(".discosalbumes");
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
.then(respuesta =>{
    return respuesta.json()
})
.then(dataAlbum =>{
    for(let i =0;i<5;i++){
        albumes.innerHTML += `<article class="discoAlbum"><a href="detallealbum.html?id=${dataAlbum.data[i].id}"> 
        <img src=${dataAlbum.data[i].cover_big}> </a> <h2>${dataAlbum.data[i].title}</h2> </article>`
    }    
})
.catch(error=>console.log(error))

//ahora artistas

//Listado artistas
let artistas=document.querySelector(".artistas");
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
.then(respuesta =>{
    return respuesta.json()
})
.then(dataArtista =>{
    for(let i =0;i<5;i++){
        artistas.innerHTML += `<article class="artista"><a href="detalleartista.html?id=${dataArtista.data[i].id}"> <img src=${dataArtista.data[i].picture_big}> </a> <h2>${dataArtista.data[i].name}</h2> </article>`
    }    
})
.catch(error=>console.log(error))