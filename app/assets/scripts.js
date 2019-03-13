const restauranteApi = 'http://localhost:3000';
const card1 = document.getElementById('cardRestaurant1');
let mapId = document.getElementById('map');


var restaurante;

function callApi(apiUrl){
    fetch(apiUrl)
    .then(resp => resp.json())
    .then(respJson => {
        console.log(respJson)
        imprimirRestaurantes(respJson.restaurantes);
    });
}



function imprimirRestaurantes(restaurantes){
    let restaurant;

    let ranking = 0.1;


    for(restaurant of restaurantes){
        console.log(`Antes del if ${restaurant.rating}`);
        console.log(`111 ${restaurant.rating}`);
        card1.innerHTML += `
        <div class="card-restaurant">
            <p class="name-restaurant">Nombre: ${restaurant.nombre}</p>
            <p class="location-restaurant">Ubicación: ${restaurant.direccion}</p>
            <p class="rating-restaurant">Rating: ${restaurant.rating}</p>
        </div>
            `
        let marker = new google.maps.Marker({
            position: {lat: restaurant.lat, lng: restaurant.lng},
            map: map,
            name: restaurant.name
        });
    }
}
let map;
let zona = {lat: 19.4197041,lng: -99.1851938}

function initMap(){
    map = new google.maps.Map(mapId, {
        center: zona, zoom: 13.5
    });
    callApi(restauranteApi);
}
