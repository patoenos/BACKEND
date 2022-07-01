const express = require('express')
const app = express()
const puerto = 8080

app.use(express.static('public'))

app.listen(puerto,()=>{
    console.log(`Servidor escuchando puerto #${puerto}`)
})