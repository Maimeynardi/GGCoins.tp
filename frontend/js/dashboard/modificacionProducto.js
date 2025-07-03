

function generarFormularioAlta() {
    const contenedor = document.getElementById("contenedor-form-alta");

    contenedor.innerHTML = `
        <form class="p-4 rounded shadow" id="altaProductoForm" enctype="multipart/form-data">
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre del producto</label>
            <input type="text" class="form-control" id="nombre" name="nombre" required>
            <div id="validacionNombre"></div>
        </div>
        <div class="mb-3">
            <label for="categoria" class="form-label">Categoría</label>
            <select class="form-select" id="categoria" name="categoria">
            <option value="1">Juegos</option>
            <option value="2">Créditos</option>
            </select>
            <div id="validacionCategoria"></div>
        </div>
        <div class="mb-3">
            <label for="descripcion" class="form-label">Descripción</label>
            <textarea class="form-control" id="descripcion" rows="3" name="descripcion" required></textarea>
            <div id="validacionDescripcion"></div>
        </div>
        <div class="mb-3">
            <label for="cantidad" class="form-label">Cantidad</label>
            <input type="number" class="form-control" id="cantidad" name="cantidad" required>
            <div id="validacionCantidad"></div>
        </div>
        <div class="mb-3">
            <label for="precio" class="form-label">Precio</label>
            <input type="number" class="form-control" id="precio" name="precio" required>
            <div id="validacionPrecio"></div>
        </div>
        <div class="mb-3">
            <label for="imagen" class="form-label">Imagen</label>
            <input type="file" class="form-control" id="imagen" name="imagen" required>
            <div id="validacionImagen"></div>
        </div>
        <button type="submit" id="btnAgregarProducto" class="btn btn-success w-100">Guardar producto</button>
        </form>
    `;

}