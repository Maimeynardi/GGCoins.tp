const express = require('express');

const router  = express.Router();


const {obtenerProductos} = require('../controllers/productosControllers')

router.get('/',obtenerProductos);

module.exports = router;