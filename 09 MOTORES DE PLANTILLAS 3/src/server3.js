const express = require('express')
const app = express()
const puerto = 8080
const rutas = require('./routes/rutas')
const path = require('path') //en el modulo de node ya viene por defecto PATH
const {engine} = require('express-handlebars') //plantilla handlebars



app.use(express.static('public'))

app.engine('hbs', engine({
    extname:'.hbs',
    defaultLayout: path.join(__dirname,'./views/layout/main.hbs'),
    layoutsDir: path.join(__dirname, './views/layout'),
    partialsDir: path.join(__dirname, './views/partials')
}))

app.set('views', path.join(__dirname,'./views'))
app.set('view engine','hbs')


app.use('/',rutas)

app.listen(puerto,()=>{
    console.log(`Servidor escuchando puerto #${puerto}`)
})