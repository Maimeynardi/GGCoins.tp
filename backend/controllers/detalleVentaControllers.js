const VENTAS = require('../models/ventas');
const DETALLE_VENTA = require('../models/detalle_venta');

const crearVentaConDetalles = async (req, res) => {
    try {
        const { NOMBRE_CLIENTE, productos } = req.body;

        // 1. Crear la venta
        const venta = await VENTAS.create({ NOMBRE_CLIENTE });

        // 2. Crear los detalles de la venta
        for (const p of productos) {
            await DETALLE_VENTA.create({
                ID_VENTA: venta.ID_VENTA,
                ID_PRODUCTO: p.ID_PRODUCTO,
                CANTIDAD: p.CANTIDAD,
                PRECIO_UNITARIO: p.PRECIO_UNITARIO,
                PRECIO_TOTAL: p.CANTIDAD * p.PRECIO_UNITARIO
            });
        }

        res.status(201).json({venta});

    } catch (error) {
        res.status(500).json({ mensaje:error.message });
    }
};

module.exports = { crearVentaConDetalles };