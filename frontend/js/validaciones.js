document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('altaProductoForm').addEventListener('submit',agregarProducto);

});
const obtenerDatosProductos = () =>{
//hash map //
    const idTipos = {
        Juegos : 1,
        Creditos :2
    }

    const NOMBRE = document.getElementById('nombre').value;
    const DESCRIPCION = document.getElementById('descripcion').value;
    const categoria = document.getElementById('categoria').value;
    const CANTIDAD= parseFloat(document.getElementById('cantidad').value);
    const PRECIO = parseFloat(document.getElementById('precio').value);
    const URL_IMAGEN= document.getElementById('imagen').value;
    
    const ID_TIPO = idTipos[categoria]

    console.log(ID_TIPO)

    const producto = {NOMBRE,DESCRIPCION,ID_TIPO,CANTIDAD,PRECIO,URL_IMAGEN};

    return producto;
}

const validacionDatosIngresados = () =>{

    let bandera = true;

    const nombre = document.getElementById('nombre');
    const descripcion = document.getElementById('descripcion');
    const precio = document.getElementById('precio');
    const url_imagen = document.getElementById('imagen');
    const cantidad = document.getElementById('cantidad');

    let errorNombre = document.getElementById('validacionNombre');
    let errorDescripcion = document.getElementById('validacionDescripcion');
    let errorPrecio = document.getElementById('validacionPrecio');
    let errorImagen = document.getElementById('validacionImagen');
    let errorCantidad = document.getElementById('validacionCantidad');

    const arrayDeDatos = [nombre,descripcion,precio,url_imagen,cantidad]

    console.log(arrayDeDatos);

    arrayDeDatos.forEach(element => {element.classList.remove('is-invalid','is-valid')});

    console.log(`Despues del foreach ${arrayDeDatos}`);

    if(!nombre.value.trim()){
        nombre.classList.add('is-invalid')
        bandera = false;
        errorNombre.classList.add('invalid-feedback');
        errorNombre.innerHTML = `Error, Debe ingresar el nombre del Producto`;
    }else{
        nombre.classList.add('is-valid');
        errorNombre.innerHTML = `Dato Correcto;`
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

    if((Number(cantidad.value))< 1){
        cantidad.classList.add('is-invalid');
        bandera = false;
        errorCantidad.innerHTML = `Dato Incorrecto El cantidad debe ser un numero positivo`;
        errorCantidad.classList.add(`invalid-feedback`);
    }else{
        cantidad.classList.add('is-valid');
        errorCantidad.innerHTML = `Dato Correcto;`;
    }

    return bandera ;

}

const agregarProducto = async (e) =>{
    e.preventDefault();

    if(!validacionDatosIngresados()){return;}

    const form = document.getElementById('altaProductoForm');
    const formData = new FormData(form);

    const idTipos = {
        Juegos : 1,
        Creditos :2
    }

    const categoria = document.getElementById('categoria').value;
    const ID_TIPO = idTipos[categoria]

    formData.append('ID_TIPO',ID_TIPO);

    try {
        const res = await fetch(`http://localhost:3030/productos/crearProducto`,{
            method:'POST',
            body: formData
        });

        if (!res.ok){
            throw new Error(`Error:${res.statusText}`)
        }

        const productoNuevo = await res.json();
        console.log("Producto Creado: ",productoNuevo)
    } catch (error) {
        alert('error al cargar el producto')
        console.error(error);
    }
}

export {validacionDatosIngresados};