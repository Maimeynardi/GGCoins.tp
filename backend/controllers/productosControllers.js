const { json, where } = require('sequelize');
const PRODUCTOS = require('../models/productos.js');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

const obtenerProductos = async (req,res) =>{
    try {
        const productos = await PRODUCTOS.findAll({where:{ACTIVO:true}});
        res.json(productos);

    } catch (error) {
        res.json({message:error.message})
    }
}

const obtenerProductoPorID = async (req,res) =>{
    try {
        const producto = await PRODUCTOS.findByPk(req.params.id)
        res.json(producto)
    } catch (error) {
        res.json({message:error.message})
    }
}

const crearProducto = async (req, res) => {
    try {
        console.log('BODY:', req.body);
        console.log('FILE:', req.file);

        const { nombre, descripcion, ID_TIPO, precio, cantidad } = req.body;

        const URL_IMAGEN = `/imagenes/uploads/${req.file.filename}`;

        const nuevoProducto = await PRODUCTOS.create({
            NOMBRE: nombre,
            DESCRIPCION: descripcion,
            ID_TIPO,
            PRECIO: precio,
            CANTIDAD: cantidad,
            URL_IMAGEN
        });

        res.status(201).json(nuevoProducto);

    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear el producto' });
    }
};


const eliminarProducto = async (req, res) => {
    try {
        const productoEliminado = await PRODUCTOS.update(
            { ACTIVO: false },
            {
                where: { id: req.params.id }
            }
        );
        res.json({ message: 'Producto desactivado correctamente', resultado: productoEliminado });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const modificarProducto = async (req, res) => {
    try {
        const productoModificado = await PRODUCTOS.update(
            { where: { id: req.params.id } } 
        );
        res.json(productoModificado);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const obtenerProductoPorCategoria = async (req,res)=>{

    try {
        productosCategoria = await PRODUCTOS.findAll({
            where:{
                ID_TIPO: req.params.categoria
            }
        })
        res.json(productosCategoria);

    } catch (error) {

        res.json({message:error.message})

    }
} 

module.exports = {
    obtenerProductos,
    obtenerProductoPorID,
    crearProducto,
    eliminarProducto,
    modificarProducto,
    obtenerProductoPorCategoria
}