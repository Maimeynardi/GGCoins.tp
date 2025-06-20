const USUARIOS = require('../modelos/usuarios.js');
const VENTAS = require('../modelos/ventas.js');
const TIPOS_USUARIO = require('../modelos/tipos_usuario.js');
const DETALLES_VENTA = require('../modelos/detalles_venta.js');
const TIPOS_PRODUCTO = require('../modelos/tipos_producto.js');
const PRODUCTOS= require('../modelos/productos.js')

//RELACION ENTRE TIPOS_USUARIOS Y USUARIOS:
TIPOS_USUARIO.hasMany(USUARIOS,{foreignKey:'ID_TIPO'});
USUARIOS.belongsTo(TIPOS_USUARIO,{foreignKey:'ID_TIPO'})

//RELACION ENTRE TIPOS_PRODUCTO Y PRODUCTOS:
TIPOS_PRODUCTO.hasMany(PRODUCTOS,{foreignKey:'ID_TIPO'});
PRODUCTOS.belongsTo(TIPOS_PRODUCTO,{foreignKey:'ID_TIPO'});

//RELACION ENTRE VENTAS Y DETELLES_VENTAS:
DETALLES_VENTA.hasOne(VENTAS,{foreignKey:'ID_DETALLE'})
VENTAS.belongsTo(DETALLES_VENTA,{foreignKey:'ID_DETALLE'});

module.exports = {
    USUARIOS,
    VENTAS,
    DETALLES_VENTA,
    PRODUCTOS,
    TIPOS_PRODUCTO,
    TIPOS_USUARIO
};