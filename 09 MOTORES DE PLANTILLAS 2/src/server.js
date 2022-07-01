const express = require('express')
const app = express()
const puerto = 8080
const rutas = require('./routes/rutas')
const path = require('path') //en el modulo de node ya viene por defecto PATH
const fs = require('fs')


app.use(express.static('public'))


app.engine('ntl', function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) {
            return callback(new Error(err));
        }
        const rendered = content.toString()
        .replace('&&title&&', ''+ options.title +'')
        .replace('&&message&&', ''+ options.message +'')
        .replace('&&receptor&&', ''+ options.receptor +'');
        return callback(null, rendered);
    });
});

app.set('view engine','ntl')
app.set('views', path.join(__dirname,'./views'))
app.use('/',rutas)

app.listen(puerto,()=>{
    console.log(`Servidor escuchando puerto #${puerto}`)
})