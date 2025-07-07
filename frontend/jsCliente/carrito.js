document.addEventListener('DOMContentLoaded', async () => {
    crearTarjetasDeCadaProducto();
    document.getElementById('finalizarCompraBtn').addEventListener('click', finalizarCompra);
});

const obtenerProductos = async () => {
    const res = await fetch("http://localhost:3030/productos");
    const productos = await res.json();
    return productos;
};

const crearTarjetasDeCadaProducto = async () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedor = document.getElementById('carrito-lista');
    const totalSpan = document.getElementById('carrito-total');
    contenedor.innerHTML = '';
    let total = 0;

    carrito.forEach(producto => {
    const subtotal = producto.PRECIO * producto.CANTIDAD;
    total += subtotal;

    contenedor.innerHTML += `
        <div class="card mb-3 p-3 d-flex align-items-center flex-row justify-content-between">
            <div class="d-flex align-items-center gap-3">
                <img src="http://localhost:3030${producto.URL_IMAGEN}" alt="${producto.NOMBRE}" style="width: 60px; height: auto;">
                <div>
                    <h5 class='mb-1 text-white'>${producto.NOMBRE}</h5>
                    <p class="mb-1 text-white">Precio: $${producto.PRECIO}</p>
                    <p class="mb-1 text-white">Subtotal: $<span class="subtotal">${subtotal}</span></p>
                </div>
            </div>

            <div class="d-flex align-items-center gap-2">
                <button class="btn btn-outline-light btn-restar" data-id="${producto.ID_PRODUCTO}">-</button>
                <input type="text" class="form-control text-center bg-transparent text-white cantidad-input" value="${producto.CANTIDAD}" readonly>
                <button class="btn btn-outline-light btn-sumar" data-id="${producto.ID_PRODUCTO}">+</button>
                <button class="btn btn-danger btn-eliminar" data-id="${producto.ID_PRODUCTO}">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `;
});


    totalSpan.textContent = total;
    activarEventosCantidad();
};

const activarEventosCantidad = () => {
    document.querySelectorAll('.btn-sumar').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            modificarCantidad(id, 1);
        });
    });

    document.querySelectorAll('.btn-restar').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            modificarCantidad(id, -1);
        });
    });

    document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            eliminarProductoDelCarrito(id);
        });
    });
};

const modificarCantidad = async (idProducto, cambio) => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productos = await obtenerProductos();
    const indiceCarrito = carrito.findIndex(p => p.ID_PRODUCTO === idProducto);
    const productoBD = productos.find(p => p.ID_PRODUCTO === idProducto);

    if (indiceCarrito === -1) return;

    if (cambio > 0) {
        if (carrito[indiceCarrito].CANTIDAD < productoBD.CANTIDAD) {
            carrito[indiceCarrito].CANTIDAD += cambio;
        } else {
            alert('No hay más stock disponible');
            return;
        }
    }

    if (cambio < 0) {
        carrito[indiceCarrito].CANTIDAD += cambio;

        if (carrito[indiceCarrito].CANTIDAD < 1) {
            carrito.splice(indiceCarrito, 1);
        }
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    crearTarjetasDeCadaProducto();
};

const eliminarProductoDelCarrito = (idProducto) => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoCarrito = carrito.filter(p => p.ID_PRODUCTO !== idProducto);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    crearTarjetasDeCadaProducto();
};


async function finalizarCompra() {
    const nombreCliente = localStorage.getItem("NombreUsuario") || "Cliente";
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (!carrito.length) {
        alert("El carrito está vacío");
        return;
    }

    // Adaptamos los productos al formato que espera el backend
    const productos = carrito.map(p => ({
        ID_PRODUCTO: p.ID_PRODUCTO,
        CANTIDAD: p.CANTIDAD,
        PRECIO_UNITARIO: p.PRECIO
    }));

    const venta = {
        NOMBRE_CLIENTE: nombreCliente,
        productos
    };

    try {
        await fetch("http://localhost:3030/ventas/crear", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(venta)
    });

    window.location.href = "/GGCoins.tp/frontend/cliente-html/ticket.html";

    } catch (error) {
        console.error("Error al finalizar la compra:", error);
        alert("Ocurrió un error al guardar el ticket.");
    }
}

