const {DataTypes} = require('sequelize');
const sequelize = require('../configuracionDataBase/BaseDeDatos.js');

const VENTAS = sequelize.define('VENTAS',{
    NOMBRE_CLIENTE:{
        allowNull:false,
        type: DataTypes.STRING(50)
    },
    ID_VENTA:{
        allowNull:false,
        primaryKey:true,
        type: DataTypes.INTEGER,
        autoIncrement:true
    },
    DETALLE:{
        allowNull:false,
        type: DataTypes.INTEGER,
        references:{
            model:'DETALLES_VENTA',
            key:'ID_DETALLE'
        }
    },

},
    {tableName:'VENTAS'}
);

module.exports = VENTAS;
