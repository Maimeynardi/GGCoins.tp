const TIPOS_PRODUCTO = require('../models/tipos_producto');

const cargarTiposProducto = async () => {

    try {
        const categoriaJuego = 'juego';
        const categoriaCredito = 'credito';

        // Crear o encontrar categoría "juego"
        await TIPOS_PRODUCTO.findOrCreate({
            where: { CATEGORIA: categoriaJuego },
            defaults: { CATEGORIA: categoriaJuego }
        });

        // Crear o encontrar categoría "crédito"
        await TIPOS_PRODUCTO.findOrCreate({
            where: { CATEGORIA: categoriaCredito },
            defaults: { CATEGORIA: categoriaCredito }
        });

        console.log('Categorías cargadas o ya existentes');
    } catch (error) {
        console.error('Error al cargar las categorías:', error.message);
    }
};

module.exports = cargarTiposProducto;