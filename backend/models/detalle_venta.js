const {DataTypes} = require('sequelize');
const sequelize = require('../configuracionDataBase/BaseDeDatos.js');


const DETALLES_VENTA = sequelize.define('DETALLES_VENTA',{
    ID_DETALLE:{
        allowNull:false,
        type: DataTypes.INTEGER,
        primaryKey:true,
        references: {
            model: 'VENTAS',
            key: 'ID_VENTA'
        }
    },
    CANTIDAD:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    PRECIO_UNITARIO:{
        type: DataTypes.FLOAT,
        allowNull:false,
    },
    PRECIO_TOTAL:{
        type: DataTypes.FLOAT,
        allowNull:false,
    },
    
},{
    tableName:'DETALLES_VENTA'
})

module.exports = DETALLES_VENTA