const USUARIOS = require('../models/usuarios.js');
const VENTAS = require('../models/ventas.js');
const TIPOS_USUARIO = require('../models/tipos_usuario.js');
const DETALLE_VENTA = require('../models/detalle_venta.js');
const TIPOS_PRODUCTOS = require('../models/tipos_productos.js');
const PRODUCTOS= require('../models/productos.js');
const TICKET = require('../models/ticket.js');

//RELACION ENTRE TIPOS_USUARIOS Y USUARIOS:
TIPOS_USUARIO.hasMany(USUARIOS,{foreignKey:'ID_TIPO'});
USUARIOS.belongsTo(TIPOS_USUARIO,{foreignKey:'ID_TIPO'})

//RELACION ENTRE TIPOS_PRODUCTO Y PRODUCTOS:
TIPOS_PRODUCTOS.hasMany(PRODUCTOS,{foreignKey:'ID_TIPO'});
PRODUCTOS.belongsTo(TIPOS_PRODUCTOS,{foreignKey:'ID_TIPO'});

//RELACION ENTRE VENTAS Y DETELLES_VENTAS:
DETALLE_VENTA.hasOne(VENTAS,{foreignKey:'ID_DETALLE'})
VENTAS.belongsTo(DETALLE_VENTA,{foreignKey:'ID_DETALLE'});


//RELACIONES ENTRE TICKET Y VENTA:
TICKET.hasOne('VENTAS',{foreignKey:'ID_VENTAS'});
VENTAS.hasOne('TICKET',{foreignKey:'ID_TICKET'})

module.exports = {
    USUARIOS,
    VENTAS,
    DETALLE_VENTA,
    PRODUCTOS,
    TIPOS_PRODUCTOS,
    TIPOS_USUARIO,
    TICKET
};
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