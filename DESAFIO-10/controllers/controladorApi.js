
const Contenedor = require("../container");
const cProductos = new Contenedor("./productos.txt");

cProductos.save({title: "Volante Sim Racing", price: 2000, thumbnail: "https://gt3.es/wp-content/uploads/2018/04/volantes-simracing-1024x683.jpg"})
cProductos.save({title: "Pedales Sim Racing", price: 1800, thumbnail: "https://th.bing.com/th/id/OIP.Azrxa5kuk8T8T1qQjIzOQgHaHa?pid=ImgDet&rs=1"})
cProductos.save({title: "Asiento Sim Racing", price: 4600, thumbnail: "https://th.bing.com/th/id/OIP.QV__ZzNlx7d1nl0dWuX3oAHaJc?pid=ImgDet&rs=1"})


const getAllProducts = (req, res)=>{
    res.json(cProductos.getAll());
}

const getProductById = (req, res)=>{
    res.json(cProductos.getById(Number(req.params.id))); //No se si es necesario el number
}

const postProduct = (req, res)=>{
    res.json(cProductos.save(req.body))
}

const putProduct = (req, res)=>{
    res.json(cProductos.saveById(Number(req.params.id), req.body));
}

const deleteProductById = (req, res)=>{
    res.json(cProductos.deleteById(Number(req.params.id)));
}

module.exports = {cProductos, getAllProducts, getProductById, postProduct, putProduct, deleteProductById}