const jwt = require('jsonwebtoken');
const USUARIOS = require('../models/usuarios');
const { EmptyResultError } = require('sequelize');
require('dotenv').config();

exports.login = async (req,res) =>{
    try {
        const {EMAIL,PASSWORD} = req.body;
            //buscamos al usuario mediante el correo unico
        const usuario = await USUARIOS.findOne({
            where: {EMAIL:EMAIL,ID_TIPO:1}
        });

        if (!usuario){
            return res.status(404).json({message:'Usuario no encontrado'})
        }
        // verificamos la contrasenas utilizando el medotod para comparar el hasheo
        const validPassword = await usuario.validPassword(PASSWORD);

        if(!validPassword){
            return res.status(401).json({message:'Contraseña invalida'})
        }
        //Generamos el token si la contrase;a da ok,
        const token = jwt.sign(
            {   id: usuario.ID_USUARIO,
                tipo: usuario.ID_TIPO
            },
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN}
        );

        return res.status(200).json({
            message:'Inicio exitoso',
            token: token,
            usuario:{
                ID: usuario.ID_USUARIO,
                NOMBRE: usuario.NOMBRE,
                EMAIL: usuario.EMAIL,
                TIPO: usuario.TIPO

            }
        })

    } catch (error) {
        console.error('Error en login:', error);
        return res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
}
