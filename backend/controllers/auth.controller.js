const jwt = require('jsonwebtoken');
const USUARIOS = require('../models/usuarios');
const { EmptyResultError } = require('sequelize');
require('dotenv').config();

exports.login = async (req,res) =>{
    try {
        const {EMAIL,PASSWORD} = req.body;

        const usuario = await USUARIOS.findOne({
            where: {EMAIL:EMAIL}
        });

        if (!usuario){
            return res.status(404).json({message:'Uusario no encontrado'})
        }

        const validPassword = await usuario.validPassword(PASSWORD);

        if(!validPassword){
            return res.status(401).json({message:'Contrasenia invalida'})
        }

        const token = jwt.sign(
            {id: usuario.id},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN}
        );

        return res.status(200).json({
            mesaage:'Inicio exitoso',
            usuario:{
                ID: usuario.ID,
                NOMRBE: usuario.NOMRBE,
                EMAIL: usuario.EMAIL,
                TIPO: usuario.TIPO

            }
        })

    } catch (error) {
        
    }
}