const express = require('express');

const router  = express.Router();

const {obtenerUsuarios,obtenerUsuarioPorID,crearUsuario, eliminarUsuario, modificarUsuario} = require('../controllers/usuariosController')

router.get('/',obtenerUsuarios);
router.post('/',crearUsuario);
router.delete('/:id',eliminarUsuario)
router.post('/:id',modificarUsuario)
router.get('/:id',obtenerUsuarioPorID)

module.exports = router;