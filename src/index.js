import {search} from './data.js';


const printData = (data) => {

  //con este if valido si el div ya existe y si existe que lo elimine para volverlo a crear
  if (document.getElementById('container')){

    const container = document.getElementById('container');
    document.getElementById('dataPrint').removeChild(container);
  }
  //con este createElement creo el elemento div nuevo y con el setAttribute le doy el atributo id al nuevo div.
  const divNew = document.createElement('div');
  divNew.setAttribute('id','container');

  // con este llamo el id del div donde quiero crear el div nuevo y le digo con el appendChild que sea hijo de este mismo.
  document.getElementById('dataPrint').appendChild(divNew);

  const movie = data.results; //este llama el arreglo o el json que contiene las pelicualas.

  //creo el forEach que va a iterar y crear los elementos a mostrar de la API. 
  movie.forEach(element => {
    const template = `
        <div class="movieCard">
            <div class="titleMovie">${element.name}</div>
            <div class="Original_Lang">Lenguaje Original ${element.original_language}</div>

            <div class="images" >
            <img src="https://image.tmdb.org/t/p/w200${element.poster_path}">
            </div>
            <div class="favorite">
            <button class="btnFav" >Agregar a favoritos</button>
            </div>
        </div>`;

    divNew.innerHTML += template
  });
} 

const callButtonMovie = document.getElementById('searchBtn');
callButtonMovie.addEventListener("click", async () => {
  const searchMovieUser = document.getElementById('search').value;
  
  await search(searchMovieUser)
    .then(result => printData(result))
    .catch(error => console.error(error));
});