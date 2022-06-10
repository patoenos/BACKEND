/* const http = require('http');
const server = http.createServer((req,res)=>{

    const tiempo = new Date();
    const hora =  tiempo.getHours();

    if (hora >=6 && hora <=12){
        res.end('Buenos días')
    }else if (hora>=13 &&hora <=19){
        res.end('Buenas tardes')
    }else{
        res.end('Buenas noches')
    }


});

server.listen(8080,()=>{
    console.log("El servidor esta escuchando el puerto 8080");
});
 */
const express = require('express');
const app =  express();  
const puerto = 8080;

app.get('/',(req,res)=>{
    res.send('Hola soy Home');
});

app.listen(puerto, ()=>{
    console.log(`El servidor se inició en el puerto ${puerto}`);
});
