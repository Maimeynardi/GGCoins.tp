const {DataTypes} = require('sequelize');
const sequelize = require('../configuracionDataBase/BaseDeDatos.js');


const DETALLE_VENTA = sequelize.define('DETALLE_VENTA',{
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
    tableName:'DETALLE_VENTA',timestamps: true
})

module.exports = DETALLE_VENTA