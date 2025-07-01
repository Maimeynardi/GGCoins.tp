const express = require('express');

const router  = express.Router();

const {obtenerUsuarios,obtenerUsuarioPorID,crearUsuario, eliminarUsuario, modificarUsuario} = require('../controllers/usuariosController')
const { verificarToken, Admin } = require('../middleware/authMiddleware');

router.get('/', verificarToken, obtenerUsuarios);
router.post('/',crearUsuario);
router.delete('/:id', verificarToken, Admin, eliminarUsuario);
router.put('/:id', verificarToken, modificarUsuario);
router.get('/:id', verificarToken, obtenerUsuarioPorID);

module.exports = router;