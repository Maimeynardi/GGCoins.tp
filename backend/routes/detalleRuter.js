const express = require('express');
const router = express.Router();
const { crearVentaConDetalles } = require('../controllers/detalleVentaControllers.js');

router.post('/crear', crearVentaConDetalles);
module.exports = router;