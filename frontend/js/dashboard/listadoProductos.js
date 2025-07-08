
document.addEventListener("DOMContentLoaded", () => {
    cargarProductosListado();
});

async function cargarProductosListado() {
    try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:3030/productos/admin/todos",
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        const productos = await res.json();
        generarTabla(productos);
    } catch (error) {
        console.error("Error al cargar productos", error);
    }
}

function generarTabla(productos) {
    const divListado = document.getElementById("divListado");

    divListado.innerHTML = `
        <div class="text-center my-3" id="spinner">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"></div>
        </div>
    `;

    setTimeout(() => {
        let html = `
        <table class="table table-striped table-hover text-white">
            <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Categoría</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
        `;

        productos.forEach(p => {
            html += `
                <tr class="${!p.ACTIVO ? 'table-secondary' : ''}">
                <td>${p.ID_PRODUCTO}</td>
                <td><img src="http://localhost:3030${p.URL_IMAGEN}" alt="${p.NOMBRE}" class="tabla-imagen" style="width: 70px; height: auto; object-fit: contain;"></td>
                <td>${p.NOMBRE}</td>
                <td>${p.DESCRIPCION}</td>
                <td>$${p.PRECIO}</td>
                <td>${p.CANTIDAD}</td>
                <td>${p.ID_TIPO}</td>
                <td>
                    <span class="badge ${p.ACTIVO ? 'bg-success' : 'bg-danger'}">
                    ${p.ACTIVO ? 'Activo' : 'Inactivo'}
                    </span>
                </td>
                <td>
                    <button class="btn btn-warning btn-sm me-2" onclick="window.location.href='modificar.html?id=${p.ID_PRODUCTO}'">
                        <i class="bi bi-pencil-square"></i> Editar
                    </button>
            `;

            if (p.ACTIVO) {
                html += `
                    <button class="btn btn-danger btn-sm" onclick='eliminarProducto(${p.ID_PRODUCTO})'>
                        <i class="bi bi-trash"></i> Eliminar
                    </button>
                `;
            } else {
                html += `
                    <button class="btn btn-success btn-sm" onclick='activarProducto(${p.ID_PRODUCTO})'>
                        <i class="bi bi-check-circle"></i> Activar
                    </button>
                `;
            }

            html += `</td></tr>`;
        });

        html += "</tbody></table>";
        divListado.innerHTML = html; 

    }, 700);
}

const eliminarProducto = async (id) => {
    const confirmar = confirm("¿Estás seguro de que querés desactivar este producto?");
    if (!confirmar) return;

    try {
        const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:3030/productos/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Error al eliminar');
        }

        alert('Producto desactivado correctamente');
        cargarProductosListado(); 
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        alert('Ocurrió un error al eliminar el producto.');
    }
};

const activarProducto = async (id) => {
    const confirmar = confirm("¿Estás seguro de que querés activar este producto?");
    if (!confirmar) return;

    try {
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append('activo', true);

        const res = await fetch(`http://localhost:3030/productos/${id}/activar`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Error al activar');
        }

        alert('Producto activado correctamente');
        cargarProductosListado();
    } catch (error) {
        console.error('Error al activar producto:', error);
        alert('Ocurrió un error al activar el producto.');
    }
};
