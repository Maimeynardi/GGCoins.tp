const TIPOS_PRODUCTO = require('../models/tipos_producto');


const cargarTiposProducto = async () =>{
    try {
        const categoriaJuego = 'juego';
        const categoriaCredito = 'Credito';

        const tipoJuego = await TIPOS_PRODUCTO.create({
            CATEGORIA:categoriaJuego
        });

        const tipoMoneda = await TIPOS_PRODUCTO.create({
            CATEGORIA:categoriaCredito
        });

}catch(error){
    console.log(`Error`)
22}
}
module.exports = cargarTiposProducto;