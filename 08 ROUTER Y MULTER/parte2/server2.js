const express = require('express');
const app = express();
const puerto = 8080;
const rutas = require('./routes/rutaBasica')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/gatitos',express.static(__dirname + '/public'))
app.use('/html',express.static(__dirname + '/html'))
 
app.use('/api', rutas)

app.listen(puerto,()=>{
    console.log(`Escuchando el puerto ${puerto}`)
})