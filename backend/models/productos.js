const {DataTypes} = require('sequelize')
const sequelize = require('../config/database.js');

const PRODUCTOS = sequelize.define('PRODUCTOS',{
    ID_PRODUCTO:{
        allowNull:false,
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    ID_TIPO:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'TIPOS_PRODUCTO',
            key:'ID_TIPOS_PRODUCTO'
        }
    },
    NOMBRE:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    DESCRIPCION:{
        type:DataTypes.STRING(250),
        allowNull:false
    },
    PRECIO:{
        type: DataTypes.DOUBLE,
        allowNull:false,
    }, 
    CANDTIDAD:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    URL_IMAGEN:{
        type:DataTypes.STRING(250),
        allowNull:false
    },
    PLATAFORMA:{
        type:DataTypes.STRING(250),
        allowNull:false
    },
    ACTIVO:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
},{
    tableName:'PRODUCTOS',timestamps: true
});

module.exports = PRODUCTOS;