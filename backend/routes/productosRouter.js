const express = require('express');
const router  = express.Router();


const {obtenerProductos,obtenerProductoPorID,crearProducto, eliminarProducto, modificarProducto,obtenerProductoPorCategoria, obtenerTodosLosProductos, activarProducto} = require('../controllers/productosControllers');
const { verificarToken } = require('../middleware/authMiddleware');

const upload = require('../middleware/upload');

router.get('/',obtenerProductos);

router.delete('/:id',verificarToken,eliminarProducto);

router.post('/crearProducto', upload.single('imagen'), verificarToken, crearProducto);

router.put('/:id', upload.single('imagen'),verificarToken, modificarProducto);
//comentar el de abajo es el original
//router.put('/:id',modificarProducto);

router.get('/admin/todos', verificarToken, obtenerTodosLosProductos);

router.put('/:id/activar', verificarToken, activarProducto);

router.get('/:id', verificarToken,obtenerProductoPorID);

router.get('/:categoria',obtenerProductoPorCategoria);

module.exports = router;