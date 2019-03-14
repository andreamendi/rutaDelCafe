const restauranteApi = 'http://localhost:3000';
const card1 = document.getElementById('cardRestaurant1');
let mapId = document.getElementById('map');


var restaurante;

function callApi(apiUrl){
    fetch(apiUrl)
    .then(resp => resp.json())
    .then(respJson => {
        console.log(respJson)
        // ordenarPorNombre(respJson.restaurantes);
         ordenarPorRating(respJson.restaurantes);

    });
}

function imprimirRestaurantes(restaurantes){
    let restaurant;
    card1.innerHTML ='';
    for(restaurant of restaurantes){
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


function ordenarPorNombre(listaRes){
    let orderName =  listaRes.sort(function(a,b){
        if (a.nombre < b.nombre){
            return -1
        } else {
            return 1
        }
    }); //Modifica el array.
    console.log('Name', orderName);
    imprimirRestaurantes(orderName);
}   


function ordenarPorRating(listaRes){
    let orderRating =  listaRes.sort(function(a,b){
        if (a.rating < b.rating){
            return -1
        } else {
            return 1
        }
    });
    
    console.log('Rating', orderRating);
    imprimirRestaurantes(orderRating);
}



// let nuevaLista = [];
// for (let i = 0; i < listaPrueba.length; i++){
//     let palabraActual = listaPrueba[i];
//     for(let palabra )
//     if(i == listaPrueba.length -1){
//         palabraSig = listaPrueba[0]
//     }
//     if(palabraActual < palabraSig){
//         nuevaLista.push(palabraActual);
//     } else {
//         nuevaLista.push(palabraSig);
//     }
// }
// console.log(nuevaLista);