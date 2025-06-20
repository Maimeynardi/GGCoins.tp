const sequelize = require('./BaseDeDatos.js');


const conexionBaseDeDatos = async () =>{
    try {

        await sequelize.authenticate();

        console.log(`Conexion Exitosa`)

    } catch (error) {

        console.log(`Error! chequear el error ${error}`)
    }
}

module.exports = conexionBaseDeDatos;