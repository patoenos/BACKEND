const {Router} = require('express');
const router = Router();
const personas = []
const mascotas =[]

//middleware rutas
function middlewarePersonas(req,res,next){
    console.log('Yendo a personas ...')
    next()
}


router.get('/home', (req,res)=>{
    res.send('Estas en home prro')
})

router.get('/personas',middlewarePersonas,(req,res)=>{
    res.json(personas)

})
router.post('/personas',(req,res)=>{
    const {nombre, apellido, edad} = req.body;
    personas.push({nombre,apellido,edad})
    res.sendStatus(201)
    
})
//middleware router
router.use((req,res,next)=>{
    req.target = 'mascotas'
    next()
    
})

router.get('/mascotas',(req,res)=>{
    console.log(req.target)
    res.json(mascotas)
})
router.post('/mascotas',(req,res)=>{
    const {nombre, raza, edad} = req.body;
    mascotas.push({nombre,raza,edad})
    res.sendStatus(201)
})

module.exports = router;