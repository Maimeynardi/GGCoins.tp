const express = require('express');
const databaseConection = require('./configuracionDataBase/conexionBD.js')

const app = express();

const cors = require('cors');

const port = 3030;

app.use(cors());

app.use(express.json());

const PRODUCTOS = require('./models/productos.js')
const TIPOS_PRODUCTO = require('./models/tipos_producto.js')

const cargarTiposProducto = require('./controllers/tiposProductosControllers.js')

const productosRouter = require('./routes/productosRouter.js')


app.use('/productos',productosRouter)
app.listen(port,()=>{
    databaseConection();
    cargarTiposProducto();
    console.log(`Servidor Levantado`)
})