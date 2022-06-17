const express = require('express');
const app = express();
const puerto = 8080;

const productos = [{"title": "Escuadra","price": 123.45,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png","id": 1},{"title": "Calculadora","price": 234.56,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png","id": 2},{"title": "Globo Terráqueo","price": 345.67,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png","id": 3}]

app.get('/api/productos',(req,res)=>{
    const {titulo} = req.query
    if (titulo){
        const producto = productos.filter(alias=>{
            return alias.title.toLowerCase() === titulo.toLowerCase() 
        })
        res.status(200).json(producto)
        return
    }    
    res.json(productos)
})

app.get('/api/productos/:id',(req,res)=>{
    const id = Number(req.params.id)
    if (isNaN(id)){
        res.status(400).json({error: "El parámentro no es un número"})
        return
    }

    const producto = productos.filter(alias=>{
        return alias.id === id
    })
    res.status(200).json(producto)
})

/* app.post('/api/productos',(req,res)=>{
    productos.push(nuevoProducto)
    res.send(productos)
})
app.get('/api/productos/:id',(req,res)=>{
    res.send(productos);
}) */

app.listen(puerto, err =>{
    if(err){
        console.log(`Hubo un error al iniciar el servidor: ${err}`);
    }else{
        console.log(`Servidor escuchando el puerto: ${puerto}`);
    }
})

