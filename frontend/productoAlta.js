document.addEventListener('DOMContentLoaded', function() {

});

const obtenerDatosProductos = () =>{

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const categoria = document.getElementById('categoria').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const url_imagen = document.getElementById('imagen').value;

    const producto = {nombre,descripcion,categoria,precio,url_imagen};

    return producto;
}

const validacionDatosIngresados = () =>{
    let bandera = true;

    const nombre = document.getElementById('nombre');
    const descripcion = document.getElementById('descripcion');
    const categoria = document.getElementById('categoria');
    const precio = document.getElementById('precio');
    const url_imagen = document.getElementById('imagen');

}
