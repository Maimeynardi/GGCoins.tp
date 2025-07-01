const TiposUsuario = require('../models/tipos_usuario');

const cargarTiposUsuario = async () => {
    try {
        await TiposUsuario.findOrCreate({
        where: { TIPO: 'Admin' }, 
        defaults: { TIPO: 'Admin' }
        });

        await TiposUsuario.findOrCreate({
        where: { TIPO: 'Cliente' },
        defaults: { TIPO: 'Cliente' }
        });

        console.log('Tipos de usuario cargados o ya existentes');
    } catch (error) {
        console.error('Error al cargar tipos de usuario:', error.message);
    }
};

module.exports = cargarTiposUsuario;
