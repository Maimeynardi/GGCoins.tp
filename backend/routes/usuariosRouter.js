const express = require('express');

const router  = express.Router();

const {obtenerUsuarios,obtenerUsuarioPorID,crearUsuario, eliminarUsuario, modificarUsuario, buscarAdmin} = require('../controllers/usuariosController')
const { verificarToken, Admin } = require('../middleware/authMiddleware');
const { login } = require('../controllers/auth.controller');
//esta es de prueba 
router.get('/',obtenerUsuarios);
// esta es la que estaba primero router.get('/', verificarToken, obtenerUsuarios);
router.post('/crearUsuario',crearUsuario);
router.delete('/:id', verificarToken, Admin, eliminarUsuario);
router.put('/:id', verificarToken, modificarUsuario);
router.get('/:id', verificarToken, obtenerUsuarioPorID);
module.exports = router;