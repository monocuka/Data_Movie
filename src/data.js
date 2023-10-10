import {my_Api_key} from './secrets.js';
export const search = async () => {

  const endPoint = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${my_Api_key}`;
    
    
  const options = {
    method: 'GET',
    redirect: 'follow'
  };
    
  return fetch(endPoint, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}