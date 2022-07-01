const express = require('express');
const app = express();
const puerto = 8080;

app.get('/api/suma/:num1/:num2', (req,res)=>{
    const response = Number(req.params.num1) + Number(req.params.num2)
    res.json(response)
})

//con Query
app.get('/api/suma/', (req,res)=>{
    const {num1, num2} = req.query
    const response = Number(num1) + Number(num2)
    res.json(response)
})

app.get('/api/operacion/:op', (req,res)=>{
    const operacion = req.params.op.split('')
    switch (operacion[1]) {
        case '+':
            res.json(Number(operacion[0]) + Number(operacion[2]))            
            break;
        case '-':
            res.json(Number(operacion[0]) - Number(operacion[2]))            
            break;
    
        default:
            res.send('Mandaste mal la info rey')
            break;
    }

});




app.listen(puerto, err=>{
    if (err){
        console.log(`Hubo un error al iniciar el servidor: ${err}`);
    } else{
        console.log(`Servidor escuchando en el puerto: ${puerto} `);
    }

})