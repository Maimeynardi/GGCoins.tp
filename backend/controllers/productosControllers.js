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

        const { nombre, descripcion, ID_TIPO, precio, cantidad } = req.body;

        const URL_IMAGEN = `/uploads/${req.file.filename}`;

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
                where: { ID_PRODUCTO: req.params.id }
            }
        );

        if (productoEliminado[0] === 0) {
            return res.status(404).json({ message: 'Producto no encontrado o ya estaba desactivado' });
        }
        
        res.json({ message: 'Producto desactivado correctamente', resultado: productoEliminado });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const modificarProducto = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, descripcion, categoria, cantidad, precio } = req.body;

        // Armás el objeto con los datos que vienen del form
        const updateData = {
            NOMBRE: nombre,
            DESCRIPCION: descripcion,
            ID_TIPO: categoria === 'Juegos' ? 1 : 2,
            CANTIDAD: parseInt(cantidad, 10),
            PRECIO: parseFloat(precio)
        };

        //  Si subieron una nueva imagen, le agregás la URL
        if (req.file) {
            updateData.URL_IMAGEN = `/uploads/${req.file.filename}`;
        }

        // Ahora sí ejecutás el update de Sequelize
        const [modCount] = await PRODUCTOS.update(updateData, {
            where: { ID_PRODUCTO: id }
        });
        //A CHEQUEAR
        if (modCount === 0) {
            return res.status(404).json({ message: 'Producto no encontrado o sin cambios' });
        }
        res.json({ message: 'Producto modificado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
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

const obtenerTodosLosProductos = async (req, res) => {
    try {
        const productos = await PRODUCTOS.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const activarProducto = async (req, res) => {
    try {
        const productoActivado = await PRODUCTOS.update(
            { ACTIVO: true },
            {
                where: { ID_PRODUCTO: req.params.id }
            }
        );

        if (productoActivado[0] === 0) {
            return res.status(404).json({ message: 'Producto no encontrado o ya estaba activado' });
        }

        res.json({ message: 'Producto activado correctamente', resultado: productoActivado });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    obtenerProductos,
    obtenerProductoPorID,
    crearProducto,
    eliminarProducto,
    modificarProducto,
    obtenerProductoPorCategoria,
    obtenerTodosLosProductos,
    activarProducto
}