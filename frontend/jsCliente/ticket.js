document.addEventListener('DOMContentLoaded', () => {
    generarTicket();
    
})

function generarTicket() {
    const nombreCliente = localStorage.getItem('NombreUsuario') || 'Cliente';
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    document.getElementById('ticket-nombre').textContent = nombreCliente;
    document.getElementById('ticket-fecha').textContent = new Date().toLocaleString();

    let total = 0;
    carrito.forEach(producto => {
        total += producto.PRECIO * producto.CANTIDAD;
    });

    const listado = document.getElementById('ticket-productos');

    listado.innerHTML = '';

    let html = `
        <table class="table table-bordered table-hover table-dark">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
    `;

    carrito.forEach(producto => {
        const subtotal = producto.PRECIO * producto.CANTIDAD;
        html += `
            <tr>
                <td>${producto.NOMBRE}</td>
                <td>${producto.CANTIDAD}</td>
                <td>$${producto.PRECIO}</td>
                <td>$${subtotal}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    listado.innerHTML = html;
    document.getElementById('ticket-total').textContent = total;
}