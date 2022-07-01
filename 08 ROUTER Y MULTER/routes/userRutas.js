const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.send('Estas en rutas a traves de modularizacion')
});   

module.exports = router;