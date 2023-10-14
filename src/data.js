import {myApiKey} from './secrets.js';
export const search = async () => {

  const endPoint = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${myApiKey}`;
    
    
  const options = {
    method: 'GET',
    redirect: 'follow'
  };
    
  return fetch(endPoint, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export const saveFavourite = async (catId) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", myApiKey);

  const raw = JSON.stringify({
    "image_id": catId
  });

  const requestOptions = {
    
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.thecatapi.com/v1/favourites", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export const listFavourite = async () => {

  const endPointFav = `https://api.thecatapi.com/v1/favourites`;

  const options = {
    method: 'GET',
    headers:{'x-api-key': myApiKey},
    redirect: 'follow'
  };
  
  return fetch(endPointFav, options)
    .then(response => response.json())
    .catch(error => console.log('error', error))
}

export const deleteFavourite = async (catFavId) => {

  const endPointDelete = `https://api.thecatapi.com/v1/favourites/${catFavId}`;


  const options = {
    method: 'DELETE',
    headers:{'x-api-key': myApiKey}
  };

  fetch(endPointDelete, options)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}