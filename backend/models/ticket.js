const {DataTypes, DATE} = require('sequelize')
const sequelize = require('../configuracionDataBase/BaseDeDatos.js')

const TICKET = sequelize.define('TICKETS',{
    ID_TICKET:{
        primaryKey:true,
        allowNull:false,
        type: DataTypes.INTEGER,
        autoIncrement:true,
    },
    CANTIDAD:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    ID_PRODUCTO:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'PRODUCTOS',
            key:'ID_PRODUCTO'
        }
    },
    ID_VENTA:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'VENTAS',
            key:'ID_VENTA'
        }
    },
    IMPUESTO:{
        type:DataTypes.FLOAT,
        allowNull:false,        
    },
    PRECIO_TOTAL:{
        type:DataTypes.FLOAT,
        allowNull:false,     
    }
},{TableName: 'TICKETS',timestamps: true})

module.exports = TICKET;

