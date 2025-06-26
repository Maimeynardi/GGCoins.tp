const multer = require('multer');
const path = require('path');
const { DATE } = require('sequelize');

const almacenamientoDeImagen = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null,'imagenes/uploads');
    },
    filename: function(req,file,cd){
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({storage:storage});

module.exports = upload;