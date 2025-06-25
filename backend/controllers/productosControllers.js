const { json } = require('sequelize');
const PRODUCTOS = require('../models/productos.js');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

const obtenerProductos = async (req,res) =>{
    try {
        const productos = await PRODUCTOS.findAll();
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

const crearProducto = async (req,res) => {
    try {
        const productoNuevo = await PRODUCTOS.create(req.body);
        res.json(productoNuevo);
    } catch (error) {
        res.json({message:error.message})
    }
}

const eliminarProducto = async (req,res)=>{
    try {
        const productoEliminado = await PRODUCTOS.destroy({
            WHERE:{id:req.params.id}
        })
        res.json(productoEliminado);
    } catch (error) {
        res.json({message:error.message})

    }
}

const modificarProducto = async (req,res)=>{
    try {
        const modificarProducto = await PRODUCTOS.update(req.body,{
            where:{id:req.params.id}
        })
        res.json(modificarProducto);
    } catch (error) {
        res.json({message:error.message})
    }
}

const obtenerProductoPorCategoria = async (req,res)=>{

    try {
        productosCategoria = await PRODUCTOS.findAll({
            WHERE:{
                CATEGORIA: {categoria:req.params.categoria}
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