const sequelize = require('../configuracionDataBase/BaseDeDatos.js');
const {DataTypes} = require('sequelize');
const bcrypt = require('bcrypt')

const USUARIOS = sequelize.define('USUARIOS',
    {
        ID_USUARIO:{
            primaryKey:true,
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true
        },
        ID_TIPO:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:'TIPOS_USUARIO',
                key:'ID_TIPO'
            }
        },
        NOMBRE:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        EMAIL:{
            type: DataTypes.STRING(100),
            unique:true,
            allowNull:false
        },
        PASSWORD:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        ACTIVO:{
            type:DataTypes.BOOLEAN,
            defaultValue : true
        }
    },{
        tableName : 'USUARIOS',
        // hook como beforeCreate o beforeUpdate, Sequelize te pasa automáticamente el objeto de la instancia del modelo que estás creando o actualizando. En este caso: El parámetro user es el mismo objeto que estás a punto de guardar en la base de datos
        hooks:{
            beforeCreate: async (user) =>{ //Este se ejecuta justo antes de que se cree un nuevo registro (ej: USUARIOS.create(...)). Se usa para preparar datos antes de que se guarden por primera vez
                const salt = await bcrypt.genSalt(10);
                user.PASSWORD = await bcrypt.hash(user.PASSWORD,salt);
            },
        // Solo si la contraseña fue cambiada, se vuelve a hashear
            beforeUpdate: async (user) =>{
                if(user.changed('PASSWORD')){
                    const salt = await bcrypt.genSalt(10);// Genera una "sal" criptográfica con 10 rondas
                    user.PASSWORD = await bcrypt.hash(user.PASSWORD,salt)// Hashea la contraseña con esa sal
                }
            }
        }
    },
)

//Metodo para validar:
USUARIOS.prototype.validPassword = async function (PASSWORD) {
    return await bcrypt.compare(PASSWORD,this.PASSWORD);
}

module.exports = USUARIOS;