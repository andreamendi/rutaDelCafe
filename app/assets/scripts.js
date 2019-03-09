const restauranteApi = 'http://localhost:3000';

function callApi(apiUrl){
    fetch(apiUrl)
    .then(resp => resp.json())
    .then(restaurantes => console.log(restaurantes));
}

callApi(restauranteApi);