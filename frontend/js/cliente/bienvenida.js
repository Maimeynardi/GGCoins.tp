
document.addEventListener("DOMContentLoaded", () => {
    localStorage.removeItem('carrito');
    document.getElementById('botonBienvenida').addEventListener('click',guardarNombre)

    const botonAdmin = document.createElement("button");
    botonAdmin.textContent = "Admin";
    botonAdmin.className = "btn btn-outline-warning mt-2";
    botonAdmin.style.display = "none"; // oculto por defecto
    botonAdmin.addEventListener("click", () => {
        window.location.href = "/GGCoins.tp/frontend/admin-html/admin-login.html";
    });

    // Insertar el botón después del input
    const contenedor = document.getElementById("nombreUsuario").parentElement;
    contenedor.appendChild(botonAdmin);

    // Mostrar botón si el input es "admin" (sin importar mayúsculas/minúsculas)
    document.getElementById("nombreUsuario").addEventListener("input", (e) => {
        const valor = e.target.value.trim().toLowerCase();
        botonAdmin.style.display = valor === "admin" ? "inline-block" : "none";
    });
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
        console.log('ingrese correctamente el nombre')
    }
    
}

