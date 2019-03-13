const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const cafes = require('./db');


// Para correr el git


app.use(cors());
// app.listen(port, function(){
//     console.log('Hola Mundo!')
// })
// app.get('/', function(req, res){
//     res.send("Hello World!");
// })


app.get('/', (req, res) => res.send(cafes));

app.listen(port, () => console.log(`Escuchando en el puerto ${port}  http://localhost:${port}`));

