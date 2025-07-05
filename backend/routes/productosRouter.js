const express = require('express');
const router  = express.Router();


const {obtenerProductos,obtenerProductoPorID,crearProducto, eliminarProducto, modificarProducto,obtenerProductoPorCategoria, obtenerTodosLosProductos, activarProducto} = require('../controllers/productosControllers');
const { verificarToken, Admin } = require('../middleware/authMiddleware');

const upload = require('../middleware/upload');

router.get('/',obtenerProductos);



router.delete('/:id',eliminarProducto);

router.post('/crearProducto', upload.single('imagen'), crearProducto);

router.put('/:id', upload.single('imagen'), modificarProducto);
//comentar el de abajo es el original
//router.put('/:id',modificarProducto);

router.get('/admin/todos', obtenerTodosLosProductos);

router.put('/:id/activar', activarProducto);

router.get('/:id',obtenerProductoPorID);

router.get('/:categoria',obtenerProductoPorCategoria);

module.exports = router;