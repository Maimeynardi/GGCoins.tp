document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    if (id) {
        obtencionDatosPorID(id);
    }

    document.getElementById('modificarProductoForm').addEventListener('submit', modificarDatos);
});

const obtencionDatosPorID =  async (id) => {
    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:3030/productos/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!res.ok) throw new Error(`Error ${res.statusText}`);

        const datosProducto = await res.json();

        const categoria = datosProducto.ID_TIPO == 1 ? 'Juegos' : 'Creditos';

        document.getElementById('id').value = datosProducto.ID_PRODUCTO;
        document.getElementById('nombre').value = datosProducto.NOMBRE;
        document.getElementById('descripcion').value = datosProducto.DESCRIPCION;
        document.getElementById('precio').value = datosProducto.PRECIO;
        document.getElementById('cantidad').value = datosProducto.CANTIDAD;
        document.getElementById('categoria').value = categoria;
        document.getElementById("imagenActual").src = `http://localhost:3030${datosProducto.URL_IMAGEN}`;
    } catch (error) {
        console.error("Error obteniendo datos del producto:", error);
    }
};

const modificarDatos = async (e) => {
    e.preventDefault();

    const form = document.getElementById("modificarProductoForm");
    const formData = new FormData(form);
    const id = formData.get('id');

    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`http://localhost:3030/productos/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });

        if (!res.ok) throw new Error(`Error ${res.statusText}`);

        alert('Producto modificado correctamente');

        // Redireccionar a la tabla principal
        window.location.href = "dashboard.html";
    } catch (error) {
        alert(`Error al modificar el producto: ${error.message}`);
    }
};
