const sequelize = require('./BaseDeDatos.js');

const conexionBaseDeDatos = async () =>{
    try {

        await sequelize.authenticate();
        await sequelize.sync({ alter: true });

        console.log(`Conexion Exitosa`);


    } catch (error) {

        console.log(`Error! chequear el error ${error}`)
    }
}

module.exports = conexionBaseDeDatos;