export const search = async (searchmovie) => {

  const endPoint = `https://api.themoviedb.org/3/search/collection?query=${searchmovie}&include_adult=false&language=en-US&page=1`;
    
    
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTk0MGRlNGMwNjBhMjViNWNmNTc0OWYyN2UxNmQ0NSIsInN1YiI6IjY1MDhjMDQzODI2MWVlMDBhY2ZlMTQzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oislEXDAJU7J-bPwc1cSbx97xWVIsvsNTP0HNhnkfEM'
    }
  };
    
  return fetch(endPoint, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}