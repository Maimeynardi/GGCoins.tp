const PRODUCTOS = require('../models/productos.js');

const obtenerProductos = async (req,res) =>{
    try {
        const productos = await PRODUCTOS.findAll();
        res.json(productos);

    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports = {
    obtenerProductos

}