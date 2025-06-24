const sequelize = require('./BaseDeDatos.js');

const conexionBaseDeDatos = async () =>{
    try {

        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
<<<<<<< HEAD
=======

        console.log(`Conexion Exitosa`);
>>>>>>> 069ad6c7cff3df2499eeae429fe9e15e92a1cd35


    } catch (error) {

        console.log(`Error! chequear el error ${error}`)
    }
}

module.exports = conexionBaseDeDatos;