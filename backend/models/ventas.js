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
},
    {tableName:'VENTAS',timestamps: true}
);

module.exports = VENTAS;
