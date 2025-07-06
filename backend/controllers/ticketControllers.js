const TICKET = require('../models/ticket');

const cargarTicketPorId = async (req,res) =>{
    try {
        const ticket = await TICKET.findByPk(req.params.id)
        res.json(ticket)
    } catch (error) {
        res.json({message:error.message})
    }
}

const crearTicket = async (req,res) =>{
    try {
        const {CANTIDAD,ID_PRODUCTO,ID_VENTA,IMPUESTO,PRECIOTOTAL} = req.body;

        const nuevoTicket = await TICKET.create({
            CANTIDAD: CANTIDAD,
            ID_PRODUCTO: ID_PRODUCTO,
            ID_PRODUCTO:ID_PRODUCTO,
            ID_VENTA: ID_VENTA,
            IMPUESTO:IMPUESTO,
            PRECIOTOTAL: PRECIOTOTAL
        });

        res.status(201).json(nuevoTicket);

    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear TICKET' });

    }
}