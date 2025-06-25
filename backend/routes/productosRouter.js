const express = require('express');

const router  = express.Router();


const {obtenerProductos,obtenerProductoPorID,crearProducto, eliminarProducto, modificarProducto,obtenerProductoPorCategoria} = require('../controllers/productosControllers')

router.get('/',obtenerProductos);

router.post('/crearProducto',crearProducto);

router.delete('/:id',eliminarProducto);

router.post('/:id',modificarProducto);

router.get('/:id',obtenerProductoPorID);

router.get(`/:categoria`,obtenerProductoPorCategoria)

module.exports = router;