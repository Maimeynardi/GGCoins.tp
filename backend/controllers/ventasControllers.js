const VENTAS  = require('../models/ventas')

const crearVenta= async (req,res) =>{
    try {
        const {NOMBRE_CLIENTE,DETALLE} = req.body;

        const nuevaVenta = await VENTAS.create({
            NOMBRE_CLIENTE:NOMBRE_CLIENTE,
            DETALLE:DETALLE
        });

        res.status(201).json(nuevaVenta);

    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear TICKET' });

    }
}