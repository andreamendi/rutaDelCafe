const nuevoRestauranteBoton = document.getElementById('nuevo-restaurante-boton');

nuevoRestauranteBoton.addEventListener('click',function(){
    createNewRestaurante(newRestaurante);
})

const newRestaurante = {
    nombre: 'Bubba Gamp',
    direccion:'Cancún, Qro.',
    lat: 19.419671,
    lng:-99.167823,
    rating: 4.4
}

// createNewRestaurante(newRestaurante);

function createNewRestaurante(){

    console.log('Front',newRestaurante)

    const fetchSettings = {
        method: 'POST',
        body: JSON.stringify(newRestaurante),
        header: {
            'Content-Type': 'application/json'
        }
    }
    console.log('Front 2',fetchSettings.body)
    
    fetch(restauranteApi, fetchSettings)
        .then(resp => console.log('Fetch',resp))
        .then(resp => {
            callApi(restauranteApi)
        })
        .catch(err => console.log(err))

}