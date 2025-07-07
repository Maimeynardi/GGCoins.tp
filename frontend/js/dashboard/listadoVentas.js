
document.addEventListener("DOMContentLoaded", () => {
    cargarVentasListado();
});

async function cargarVentasListado() {
    try {
        // const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:3030/ventas/admin/historial",
            // {
            //     headers: {
            //         "Authorization": `Bearer ${token}`
            //     }
            // }
        );
        const ventas = await res.json();
        console.log("Respuesta de ventas:", ventas);
        generarTabla(ventas);
    } catch (error) {
        console.error("Error al cargar las ventas", error);
    }
}

function generarTabla(ventas) {
    const divListadoVentas = document.getElementById("contenedorVentas");

    divListadoVentas.innerHTML = `
        <div class="text-center my-3" id="spinner">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"></div>
        </div>
    `;

    setTimeout(() => {
        let html = `
        <table class="table table-bordered table-dark table-striped">
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
    `;

        ventas.forEach(v => {
            html += `
                <tr>
                    <td>${v.NOMBRE_CLIENTE}</td>
                    <td>${new Date(v.FECHA).toLocaleString()}</td>
                    <td>${v.NOMBRE_PRODUCTO}</td>
                    <td>${v.CANTIDAD}</td>
                    <td>$${v.PRECIO_UNITARIO}</td>
                    <td>$${v.PRECIO_TOTAL}</td>
                </tr>
            `;
        });

        html += "</tbody></table>";
        divListadoVentas.innerHTML = html;

    }, 700);
}

