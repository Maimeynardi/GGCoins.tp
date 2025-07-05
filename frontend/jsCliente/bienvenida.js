document.addEventListener("DOMContentLoaded", () => {

});

const guardarNombreUsuario = () =>{

    nombre =  document.getElementById('nombreUsuario').value;
    let errorNombre = document.getElementById('validacionNombre');

    if(!nombre.value.trim() || nombre.value.length <3){
        nombre.classList.add('is-invalid')
        bandera = false;
        errorNombre.classList.add('invalid-feedback');
        errorNombre.innerHTML = `Error, Debe ingresar el nombre del Producto`;
    }else{
        nombre.classList.add('is-valid');
        errorNombre.innerHTML = `Dato Correcto;`
    }
}