document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
});

async function cargarProductos() {
    try {
        const productos = await obtenerProductos();
        limpiarContenedores();
        productos.forEach(producto => {
            const card = crearCardProducto(producto);
            agregarCardAlContenedor(card, producto.ID_TIPO);
        });
    } catch (error) {
        console.error(error);
    }
}

async function obtenerProductos() {
    const res = await fetch('http://localhost:3030/productos');
    if (!res.ok) throw new Error('Error al cargar productos');
    const productos = await res.json();
    return productos;
}



function crearCardProducto(producto) {
    const card = document.createElement('div');
    card.className = 'col-6 col-md-4 col-lg-3';

    card.innerHTML = `
        <div class="card producto-hover text-white mx-auto">
            <div class="img-container position-relative">
                <img src="http://localhost:3030${producto.URL_IMAGEN}" class="card-img-top" alt="${producto.NOMBRE}">

                <div class="descripcion-hover p-3">
                    <p class="mb-0 small">${producto.DESCRIPCION}</p>
                </div>
            </div>

            <div class="card-body text-center">
                <h5 class="card-title mb-1">${producto.NOMBRE}</h5>
                <p class="precio fw-semibold">ARS ${producto.PRECIO.toLocaleString()}</p>
                <button class="btn-agregar-carrito">
                    <i class="bi bi-cart-plus me-2"></i> Agregar al carrito
                </button>
            </div>
        </div>
    `;

    return card;
}

function agregarCardAlContenedor(card, idTipo) {
    if (idTipo === 1) {
        document.getElementById('contenedor-juegos').appendChild(card);
    } else if (idTipo === 2) {
        document.getElementById('contenedor-creditos').appendChild(card);
    }
}

function limpiarContenedores() {
    document.getElementById('contenedor-juegos').innerHTML = '';
    document.getElementById('contenedor-creditos').innerHTML = '';
}