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

    let errorNombre = document.getElementById('validacionNombre');
    let errorDescripcion = document.getElementById('validacionDescripcion');
    let errorCategoria =document.getElementById('validacionCategoria');
    let errorPrecio = document.getElementById('validacionPrecio');
    let errorImagen = document.getElementById('validacionImagen');


    if(!nombre.value.trim()){
        nombre.classList.add('is-invalid')
        bandera = false;
        errorNombre.classList.add('invalid-feedback');
        errorNombre.innerHTML = `Error, Debe ingresar el nombre del Producto`;
    }else{
        marca.classList.add('is-valid');
        ErrorMarca.innerHTML = `Dato Correcto;`
    }
    
    if(!descripcion.value.trim()){
        descripcion.classList.add('is-invalid')
        bandera = false;
        errorDescripcion.classList.add('invalid-feedback');
        errorDescripcion.innerHTML = `Error, Debe ingresar la descripcion del Producto`;
    }else{
        descripcion.classList.add('is-valid');
        errorDescripcion.innerHTML = `Dato Correcto;`
    }

    if(!url_imagen.value.trim()){
        url_imagen.classList.add('is-invalid')
        bandera = false;
        errorImagen.classList.add('invalid-feedback');
        errorImagen.innerHTML = `Error, Debe ingresar la descripcion del Producto`;
    }else{
        url_imagen.classList.add('is-valid');
        errorImagen.innerHTML = `Dato Correcto;`
    }

    if((Number(precio.value))< 1){
        precio.classList.add('is-invalid');
        bandera = false;
        errorPrecio.innerHTML = `Dato Incorrecto El precio debe ser un numero positivo`;
        errorPrecio.classList.add(`invalid-feedback`);
    }else{
        precio.classList.add('is-valid');
        errorPrecio.innerHTML = `Dato Correcto;`;
    }






}
