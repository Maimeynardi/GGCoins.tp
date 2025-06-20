const {DataTypes} = require('sequelize');
const sequelize = require('../configuracionDataBase/BaseDeDatos.js');

const TIPOS_PRODUCTO =  sequelize.define('TIPOS_PRODUCTO',{
    ID_TIPOS_PRODUCTO:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    CATEGORIA:{
        type: DataTypes.STRING(50),
        allowNull:false
    }

},{
    tableName:'TIPOS_PRODUCTO'
})

module.exports = TIPOS_PRODUCTO