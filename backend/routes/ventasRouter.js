const express = require('express');
const router = express.Router();
const { crearVentaConDetalles, obtenerHistorialVentas } = require('../controllers/detalleVentaControllers.js');


router.post('/crear', crearVentaConDetalles);

router.get('/admin/historial', obtenerHistorialVentas);


module.exports = router;