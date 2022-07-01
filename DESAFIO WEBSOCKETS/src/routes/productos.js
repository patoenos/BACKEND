const { Router } = require('express');
const router = Router();
const { Contenedor, Producto } = require('../logic/container');

const productos = new Contenedor('./productos.txt');

router.get('/', async (req, res) => { //Esta ruta imprime todos los productos
    try {
        const allProducts = await productos.getAll();
        let hasAny = false;
        if (allProducts.length > 0) {
            hasAny = true;
        }
        res.render('productos', { allProducts, hasAny });
    } catch (err) { 
        console.log('Se despliega el siguiente error: ', err);
        res.sendStatus(500);
    }
})
router.post('/', async (req, res) => {
    try {
        const { title, price, thumbnail } = req.body;
        const producto = new Producto( title, Number(price), thumbnail );
        let id = await productos.save(producto);

        res.redirect('/');
    } catch (err) { 
        console.log('Se despliega el sig error en posteo: ', err);
        res.sendStatus(500);
    }
})


router.get('/:id', async (req, res) => { //Ruta personalizada de acuerdo al id
    try {
        const id = Number(req.params.id);
        const producto = await productos.getById(id);
        if (!producto) throw 'producto no encontrado';
        res.status(200).json(producto);
    } catch (err) { 
        res.status(500).json({ error: err });
    }
})

router.put('/:id', async (req, res) => { //Actualiza personalizado
    try {
        const { title, price, thumbnail } = req.body;
        const id = Number(req.params.id);
        const producto = await productos.getById(id);

        if (!producto) throw 'producto no encontrado';

        productoModif = new Producto( title, Number(price), thumbnail );
        await productos.updateById(id, productoModif);
        res.status(200).json('Producto modificado');

    } catch (e) {
        res.status(500).json({ error: e });
    }
})

router.delete('/:id', async (req, res) => { //Elimina por id, personalizado
    try {
        const id = Number(req.params.id);
        const producto = await productos.getById(id);
        if (!producto) throw 'producto no encontrado';        
        await productos.deleteById(id);
        res.status(200).json('Producto eliminado');

    } catch (err) {
        res.status(500).json({ error: err });
    }
})
module.exports = router;