import {search} from './data.js';


const printData = (cat) => {

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

  //creo el forEach que va a iterar y crear los elementos a mostrar de la API. 
  
  const template = `
        <div class="movieCard">
            <div class="titleMovie">${cat[0].id}</div>
            <div class="images" >
            <img src="${cat[0].url}" width="500">
            </div>
            <div class="favorite">
            <button class="btnFav" >Agregar a favoritos</button>
            </div>
        </div>`;

  divNew.innerHTML += template
} 

const callButtonMovie = document.getElementById('searchBtn');
callButtonMovie.addEventListener("click", async () => {
  await search()
    .then(result => printData(result))
    .catch(error => console.error(error));
    
});