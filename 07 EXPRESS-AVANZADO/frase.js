const express = require('express');
const app = express();
const puerto = 8080;
let frase = 'frase inicial'

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/frase',(req,res)=>{
    res.send({frase}); 
});

app.get('/api/frase/:pos',(req,res)=>{
    const {pos}= req.params
    const fraseArray = frase.split(' ')
    const response = fraseArray[pos-1]
    res.send({buscada: response}); 

});

app.post('/api/frase',(req,res)=>{
    const {palabra}= req.body
    const fraseArray = frase.split(' ')
    fraseArray.push(palabra)
    frase= fraseArray.join(' ')
    res.send({agregada: palabra, pos: fraseArray.indexOf(palabra)+1}); 

});

app.put('/api/frase/:pos',(req,res)=>{
    const {palabra}= req.body
    const posicion = Number(req.params.pos)-1
    let fraseArray = frase.split(' ')
    const anterior = fraseArray[posicion]
    fraseArray[Number(req.params.pos)] = palabra
    frase = fraseArray.join(' ')
    res.json({actualizada: palabra, anterior})
});

app.delete('/api/frase/:pos',(req,res)=>{
    
    const posicion = Number(req.params.pos)-1
    let fraseArray = frase.split(' ')
    fraseArray[posicion] = ''
    frase = fraseArray.join(' ')
    res.sendStatus(200)
});


app.listen(puerto, err =>{
    if(err){
        console.log(`Hubo un error al iniciar el servidor: ${err}`)
    }else{
        console.log(`Servidor escuchando el puerto: ${puerto}`)
    }
});


