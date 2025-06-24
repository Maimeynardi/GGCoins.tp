const express = require('express');
const databaseConection = require('./backend/configuracionDataBase/conexionBD.js')

const app = express();

const cors = require('cors');

const port = 3030;

app.use(cors());

app.use(express.json());

const PRODUCTOS = require('./backend/models/productos.js')
const TIPOS_PRODUCTO = require('./backend/models/tipos_producto.js')
const productosRouter = require('./backend/routes/productosRouter.js')


app.use('/productos',productosRouter)
app.listen(port,()=>{
    databaseConection();
    console.log(`Servidor Levantado`)
})