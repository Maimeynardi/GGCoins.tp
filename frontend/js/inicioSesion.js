
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btningreso').addEventListener('click',ingresarCliente)

});

const ingresarCliente = async () => {
    try {

        const EMAIL = document.getElementById('correoAdmin').value;
        const contrasena = document.getElementById('contraseñaAdmin').value;


        const response = await fetch('http://localhost:3030/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                EMAIL: EMAIL,
                PASSWORD: contrasena
            })
        });

        if (!response.ok) {
            const error = await response.json();
            alert(`Error: ${error.message}`);
            return;
        }

        const data = await response.json();

        // Guardamos el token en localStorage
        localStorage.setItem('token', data.token);
    
        alert(`Bienvenido ${data.usuario.NOMBRE}`);

        // Redirigir a otra página si querés
        window.location.href = "/GGCoins.tp/frontend/admin-html/menuAdmin.html";
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
    }
};
