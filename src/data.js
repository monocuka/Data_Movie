import {bearerToken} from './secrets.js';
export const search = async (searchmovie) => {

  const endPoint = `https://api.themoviedb.org/3/search/collection?query=${searchmovie}&include_adult=false&language=en-US&page=1`;
    
    
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: bearerToken
    }
  };
    
  return fetch(endPoint, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}