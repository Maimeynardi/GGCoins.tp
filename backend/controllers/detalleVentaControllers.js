const sequelize = require('../configuracionDataBase/BaseDeDatos.js');
const VENTAS = require('../models/ventas.js');
const DETALLE_VENTA = require('../models/detalle_venta.js');
const PRODUCTOS = require('../models/productos.js')

const crearVentaConDetalles = async (req, res) => {
    try {
        console.log(req.body);
        const { NOMBRE_CLIENTE, productos } = req.body;
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


            const actualizarPostVenta = await PRODUCTOS.findByPk(p.ID_PRODUCTO);
            await actualizarPostVenta.update({CANTIDAD:(actualizarPostVenta.CANTIDAD - p.CANTIDAD)});
            

            const productoActualizado = await PRODUCTOS.findByPk(p.ID_PRODUCTO);
            if (productoActualizado.CANTIDAD <= 0) {
                await productoActualizado.update({ ACTIVO: false });
            }
        }

        res.status(201).json({venta});

    } catch (error) {
        res.status(500).json({ mensaje:error.message });
    }
};
    
const obtenerHistorialVentas = async (req, res) => {
    try {
        const [ventas] = await sequelize.query(`
            SELECT 
            V.ID_VENTA,
            V.NOMBRE_CLIENTE,
            V.createdAt AS FECHA,
            P.NOMBRE AS NOMBRE_PRODUCTO,
            D.CANTIDAD,
            D.PRECIO_UNITARIO,
            D.PRECIO_TOTAL
            FROM VENTAS V
            JOIN DETALLE_VENTA D ON V.ID_VENTA = D.ID_VENTA
            JOIN PRODUCTOS P ON D.ID_PRODUCTO = P.ID_PRODUCTO
            ORDER BY V.createdAt DESC;

        `);

        res.json(ventas);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el historial de ventas", error: error.message });
    }
};

module.exports = { crearVentaConDetalles, obtenerHistorialVentas };