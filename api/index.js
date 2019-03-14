const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const cafes = require('./db');//Este trae nuestro archivo JSON que ahorita está forzado.


app.use(cors()); //CORS Cross-Origin Resource Sharing
app.use(express.json()); //Express va a poder convertir a un formato json.


//Routes
app.get('/', (req, res) => res.send(cafes));

app.post('/', (req, res) => {
    const newRestaurant = req.body;
    console.log('Back',req.body)
    cafes.restaurantes.push(newRestaurant); 
    res.status(201).send(newRestaurant); //https://developer.mozilla.org/es/docs/Web/HTTP/Status
})


app.listen(port, () => console.log(`Escuchando en el puerto ${port}  http://localhost:${port}`));

