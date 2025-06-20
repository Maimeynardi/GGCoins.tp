const {DataTypes} = require('sequelize') 
// Está importando el objeto DataTypes desde el paquete sequelize.
// DataTypes contiene todos los tipos de datos que Sequelize puede usar para definir columnas de una tabla (como STRING, INTEGER, BOOLEAN, etc.).

const sequelize = require('../configuracionDataBase/BaseDeDatos.js')
/* Importa la instancia de Sequelize que vos configuraste en el archivo config/database.js.
Esa instancia representa tu conexión a la base de datos MySQL, incluyendo nombre de la base, usuario, contraseña, etc. */


const TiposUsuario = sequelize.define('TIPOS_USUARIO', { 
    ID_TIPO: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
            },
    TIPO:{
        type:DataTypes.STRING(100),
        allowNull:false,
    }

},{
    tableName:'TIPOS_USUARIO'
});

module.exports = TiposUsuario;