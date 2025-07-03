document.addEventListener("DOMContentLoaded", () => {
    cargarProductosAdmin();
});

async function cargarProductosAdmin() {
    try {
        const res = await fetch("http://localhost:3030/productos");
        const productos = await res.json();

        const contenedor = document.getElementById("contenedor-tabla");
        contenedor.innerHTML = ""; // limpiamos

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
                    <td><img src="${p.URL_IMAGEN}" alt="${p.NOMBRE}"></td>
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
                        <button class="btn btn-warning btn-sm me-2" onclick=''>
                            <i class="bi bi-pencil-square"></i> Editar
                        </button>
                        <button class="btn btn-danger btn-sm" onclick=''>
                            <i class="bi bi-trash"></i> Eliminar
                        </button>
                    </td>
                </tr>
            `;
        });

        html += `</tbody></table>`;
        contenedor.innerHTML = html;

    } catch (error) {
        console.error("Error al cargar productos", error);
    }
}

