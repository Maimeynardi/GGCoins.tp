const DETALLES_VENTA = require('../models/detalle_venta.js')

const crearDetalleVenta = async (req,res) =>{
    try {
        const {CANTIDAD,PRECIO_UNITARIO,PRECIO_TOTAL} = req.body

        const nuevaDetalle = await DETALLES_VENTA.create({
            CANTIDAD:CANTIDAD,
            PRECIO_UNITARIO:PRECIO_UNITARIO,
            PRECIO_TOTAL:PRECIO_TOTAL
        })
        res.status(201).json(nuevaDetalle);

    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear detalle de venta' });

    }

}