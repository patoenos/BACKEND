const {Router} = require('express') 
const router = Router()
const productos = [{title:'Lapiz',price:125, thumbnail:'https://www.quieninvento.org/wp-content/uploads/2013/06/Lapiz.jpg'},
                    {title:'Regla',price:125, thumbnail:'https://th.bing.com/th/id/OIP.GIu3iwnRPSM_pDrn--FmUgHaHa?pid=ImgDet&rs=1'},
                    {title:'Goma',price:125, thumbnail:'https://th.bing.com/th/id/OIP.TlCUjkX2gzWyl1CIO4zhAAHaHa?pid=ImgDet&rs=1'}]

const champs = [{nombre:'Salva'},{nombre:'Pepe'},{nombre:'Jose'},{nombre:'Juan'}]

router.get('/product/:indice', (req,res)=>{
    const indice = Number(req.params.indice)
    res.render('product',productos[indice])

})

router.get('/champs', (req,res)=>{
    const indice = Number(req.params.indice)
    res.render('champs', {champs, hasAny:true} )

})

module.exports = router