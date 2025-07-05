
document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById('botonBienvenida').addEventListener('click',guardarNombre)
 
});

const validarIngreso = () =>{
    let bandera = true;

    let nombre =  document.getElementById('nombreUsuario');
    nombre.classList.remove('is-invalid')
    let errorNombre = document.getElementById('validacionNombre');

    if(!nombre.value.trim() || nombre.value.length <3){
        nombre.classList.add('is-invalid')
        bandera = false;
        errorNombre.classList.add('invalid-feedback');
        errorNombre.innerHTML = `Error, su nombre debe tener 3 letras`;
    }else{
        nombre.classList.add('is-valid');
        errorNombre.innerHTML = `Dato Correcto;`

    }

    return bandera;

}

const guardarNombre = () =>{

    if (validarIngreso()){
        
        let nombre = document.getElementById('nombreUsuario').value
        
        localStorage.setItem('NombreUsuario',nombre)
        window.location.href = "/GGCoins.tp/frontend/cliente-html/productos.html";

    }else{
        conmsole.log('ingrese correctamente el nombre')
    }
    
}