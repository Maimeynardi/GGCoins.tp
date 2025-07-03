
document.addEventListener("DOMContentLoaded", () => {
    cargarProductosListado();
});

async function cargarProductosListado() {
    try {
        const res = await fetch("http://localhost:3030/productos");
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
            <td><img src="${p.URL_IMAGEN}" alt="${p.NOMBRE}" class="tabla-imagen"></td>
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
                <button class="btn btn-warning btn-sm me-2 id="btnEditar" onclick='obtencionDatosPorID(${p.ID_PRODUCTO})'>
                <i class="bi bi-pencil-square"></i> Editar
                </button>
                <button id="btnEliminar" class="btn btn-danger btn-sm" onclick='eliminarProducto(${p.ID_PRODUCTO})'>
                <i class="bi bi-trash"></i> Eliminar
                </button>
            </td>
            </tr>
        `;
        });

        html += "</tbody></table>";
        divListado.innerHTML = html;

    }, 700);

}

const obtencionDatosPorID =  async (id) =>{
    try {
        const res = await fetch(`http://localhost:3030/productos/${id}`)

        if(!res.ok){
            throw new Error (`Lo sensimos ${res.statusText}`)
        }

        const datosProducto = await res.json();

        console.log(datosProducto)

        document.getElementById('id').value = datosProducto.ID_PRODUCTO;
        document.getElementById('nombre').value = datosProducto.NOMBRE;
        document.getElementById('categoria').checked = datosProducto.CATEGORIA;
        document.getElementById('descripcion').value = datosProducto.DESCRIPCION;
        document.getElementById('precio').value = datosProducto.PRECIO;
        document.getElementById('cantidad').value = datosProducto.CANTIDAD;
        document.getElementById('imagenActual').src = datosProducto.URL_IMAGEN;
        console.log('probando')
    } catch (error) {
        console.log(`Lo sentimos por el error:${error.statusText}`);
    }
}

