const {Router} = require('express') 
const router = Router()

router.get('/',(req,res)=>{
    //primer parámetro la plantilla y el segundo un objeto con la info
    res.render('plantilla',{title:'Mensaje Importante', message:'Algo Importante', receptor:'Pepe'})   //No hace falta indiquemos la ext pq ya está en el app.engine, tampoco la ruta porque en views ya le dijimos a xpress donde esta (app.set)
})

module.exports = router