const express = require('express');

const router  = express.Router();


const {obtenerProductos,obtenerProductoPorID,crearProducto, eliminarProducto, modificarProducto} = require('../controllers/productosControllers')

router.get('/',obtenerProductos);
router.post('/',crearProducto);
router.delete('/:id',eliminarProducto)
router.post('/:id',modificarProducto)
router.get('/:id',obtenerProductoPorID)
module.exports = router;