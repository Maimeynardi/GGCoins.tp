const express = require('express');
const databaseConection = require('./configuracionDataBase/conexionBD.js')

const app = express();

const cors = require('cors');

const port = 3030;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const PRODUCTOS = require('./models/productos.js');

const TIPOS_PRODUCTO = require('./models/tipos_producto.js');

const USUARIOS = require('./models/usuarios.js');

const TIPOS_USUARIO = require('./models/tipos_usuario.js');
//nuevo
const DETALLE_VENTA = require('../backend/models/detalle_venta.js');
const VENTAS = require('./models/ventas.js')

const cargarTiposProducto = require('./controllers/tiposProductosControllers.js');
const cargarTiposUsuario = require('./controllers/tiposUsuariosController.js');
const productosRouter = require('./routes/productosRouter.js');
const usuariosRouter = require('./routes/usuariosRouter.js');
const authRouter = require('./routes/authRouter.js');
const ticketRouter = require('./routes/ventasRuter.js');

app.use('/productos',productosRouter);
app.use('/usuarios',usuariosRouter);
app.use('/', authRouter);

app.use('/ventas', ticketRouter);  

app.use('/uploads', express.static('uploads'));




app.listen(port,async ()=>{
    await databaseConection();
    await cargarTiposProducto();
    await cargarTiposUsuario();
    console.log(`Servidor Levantado en el puerto ${port}`);
})