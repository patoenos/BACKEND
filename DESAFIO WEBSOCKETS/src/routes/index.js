const { Router } = require('express'); // Trae el routes de express
const router = Router();

const productos = require('./productos'); //manda llamar el archivo productos.js

router.get('/', (req, res) => { //ruteo de home
    res.render('index');
})
router.use('/productos', productos);

module.exports = router;