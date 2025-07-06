const express = require('express');
const router = express.Router();
const { crearVentaConDetalles } = require('../controllers/ventasController');

router.post('/crear', crearVentaConDetalles);
module.exports = router;