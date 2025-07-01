const jwt = require('jsonwebtoken');
const USUARIOS = require('../models/usuarios.js');
require('dotenv').config();

const verificarToken = async (req,res,next) =>{
    try {

        const token = req.headers.authorization?.split(' ')[1];

        if(!token){
            return res.status(401).json({message:'No se proporciono el token'})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await USUARIOS.findByPk(decoded.id);

        if(!user){
            return res.status(404).json({message:'Usuario no encontrado'})
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({message:'Token invalido'})
    }
}

const Admin = (req,res,next)=>{
    if(req.user && req.user.ID_TIPO === 1){
        next()
    }else{
        return res.status(403).json({message:'Requiere rol de administrador'})
    }

}

module.exports = {
    verificarToken,
    Admin
}