const USUARIOS = require('../models/usuarios.js');
const VENTAS = require('../models/ventas.js');
const TIPOS_USUARIO = require('../models/tipos_usuario.js');
const DETALLES_VENTA = require('../models/detalle_venta.js');
const TIPOS_PRODUCTO = require('../models/tipos_producto.js');
const PRODUCTOS= require('../models/productos.js');
const TICKET = require('../models/ticket.js');

//RELACION ENTRE TIPOS_USUARIOS Y USUARIOS:
TIPOS_USUARIO.hasMany(USUARIOS,{foreignKey:'ID_TIPO'});
USUARIOS.belongsTo(TIPOS_USUARIO,{foreignKey:'ID_TIPO'})

//RELACION ENTRE TIPOS_PRODUCTO Y PRODUCTOS:
TIPOS_PRODUCTO.hasMany(PRODUCTOS,{foreignKey:'ID_TIPO'});
PRODUCTOS.belongsTo(TIPOS_PRODUCTO,{foreignKey:'ID_TIPO'});

//RELACION ENTRE VENTAS Y DETELLES_VENTAS:
VENTAS.hasMany(DETALLES_VENTA,{foreignKey:'ID_VENTA'});
DETALLES_VENTA.belongsTo(VENTAS,{foreignKey:'ID_VENTA'})

module.exports = {
    USUARIOS,
    VENTAS,
    DETALLES_VENTA,
    PRODUCTOS,
    TIPOS_PRODUCTO,
    TIPOS_USUARIO,
};