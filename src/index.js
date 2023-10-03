
const printData = (movies) => {

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
    movies.forEach(element => {
        const template = `
        <div class="movieCard">
            <div class="titleMovie">${element.name}</div>
            <div class="posterMovie">
            <img src="${""}"
            </div>
        </div>
        `
        
    });
} 

const getSearchValue = () =>{

}

const callButtonMovie = document.getElementById('searchBtn');
callButtonMovie.addEventListener("click", () =>{
    const searchMovieUser = document.getElementById('search').value;
    console.log(searchMovieUser);
});