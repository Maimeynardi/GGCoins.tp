const express = require('express');
const router  = express.Router();


const {obtenerProductos,obtenerProductoPorID,crearProducto, eliminarProducto, modificarProducto,obtenerProductoPorCategoria} = require('../controllers/productosControllers');
const { verificarToken, Admin } = require('../middleware/authMiddleware');

const upload = require('../middleware/upload');

router.get('/',obtenerProductos);

router.post('/crearProducto', upload.single('imagen'), crearProducto);

router.put('/:id', upload.single('imagen'), modificarProducto);
//comentar el de abajo es el original
//router.put('/:id',modificarProducto);

router.delete('/:id',verificarToken,Admin,eliminarProducto);


router.get('/:id',obtenerProductoPorID);

router.get('/:categoria',obtenerProductoPorCategoria);

module.exports = router;