const express = require('express');
const app = express();
const puerto = 8080;
const rutas = require('./routes/rutas')

//middleware aplicacion
const middleware = (req,res,next)=>{
    console.log('Llegó una request ...')
    next()
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(middleware)

app.use('/api', rutas)

//Middleware de error, ya es too much for me, va en algo de Next('Comestiste un error', req,res,next) WTF??
/* 
app.use((error, req, res, next) => {
    console.log(error)
    res.sendStatus(500)
    
})
 */
app.listen(puerto,()=>{
    console.log(`Escuchando el puerto ${puerto}`)
})