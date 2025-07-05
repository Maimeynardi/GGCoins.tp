const USUARIOS = require('../models/usuarios.js');

const obtenerUsuarios = async (req, res) => {
    const usuarios = await USUARIOS.findAll();
    res.json(usuarios);
}

const obtenerUsuarioPorID = async (req, res) => {
    const usuario = await USUARIOS.findByPk(req.params.id);
    res.json(usuario);
}

const crearUsuario = async (req, res) => {
    const usuarioNuevo = await USUARIOS.create(req.body);
    res.json(usuarioNuevo);
}

const modificarUsuario = async (req, res) => {
    const modificarUsuario = await USUARIOS.update(req.body, {
        where: { ID_USUARIO: req.params.id }
    });
    res.json(modificarUsuario);
}

const eliminarUsuario = async (req, res) => {
    const usuarioEliminado = await USUARIOS.destroy({
        where: { ID_USUARIO: req.params.id }
    });
    res.json(usuarioEliminado);
}


module.exports = {obtenerUsuarios, obtenerUsuarioPorID, crearUsuario, modificarUsuario, eliminarUsuario,}