import {deleteFavourite, listFavourite, saveFavourite, search} from './data.js';


const printData = (cats) => {

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
  cats.forEach(element => {
    const template = `
    <div class="catCard">
        <div class="titleMovie">${element.id}</div>
        <div class="images" >
        <img src="${element.url}" width="500">
        </div>
        <div class="favorite">
        <button class="btnFav" id="${element.id}" >Agregar a favoritos</button>
        </div>
    </div>`;

    divNew.innerHTML += template

  });

  divNew.querySelectorAll('.btnFav').forEach(btn =>{
    btn.addEventListener("click", async () => {
      const catId = btn.id;
      await saveFavourite(catId)
        .then(result => console.log(result))
        .catch(error => console.error(error));
    });
  });
} 

const callButtonMovie = document.getElementById('searchBtn');
callButtonMovie.addEventListener("click", async () => {
  await search()
    .then(result => printData(result))
    .catch(error => console.error(error));
});

const printFavouriteCat = (cats) => {

  console.log(cats);
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
  cats.forEach(element => {
    const template = `
    <div class="catCard">
        <div class="titleMovie">${element.image_id}</div>
        <div class="images" >
        <img src="${element.image.url}" width="500">
        </div>
        <div class="favorite">
        <button class="deleteFav"  id="${element.id}" >Eliminar de favoritos</button>
        </div>
    </div>`;

    divNew.innerHTML += template
  });
  divNew.querySelectorAll('.deleteFav').forEach(btn =>{
    btn.addEventListener("click", async () => {
      const catFavId = btn.id;
      await deleteFavourite(catFavId)
        .then(result => console.log(result))
        .catch(error => console.error(error));
    });
  });
}

const callButtonFav = document.getElementById('favouriteBtn');
callButtonFav.addEventListener("click", async () => {
  await listFavourite()
    .then(result => printFavouriteCat(result))
    .catch(error => console.error(error));
});
