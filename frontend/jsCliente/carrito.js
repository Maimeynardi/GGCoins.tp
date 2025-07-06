document.addEventListener('DOMContentLoaded', () => {


});

const crearTarjetasDeCadaProducto = () =>{

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contenedorTarjetas = document.getElementById('carrito-lista');
    contenedorTarjetas.innerHTML = ` `;


    if(carrito.length >0){
        carrito.forEach(element => { //saque el .array
            contenedorTarjetas.innerHTML +=`

            <div class="card mb-3 p-3 producto-card d-flex align-items-center flex-row gap-3 justify-content-between">
                <div class="d-flex align-items-center gap-3">
                    <img src="${element.URL_IMAGEN}" alt="${element.NOMBRE}" class="producto-imagen"/>

            <div>
            <h5 class='mb-1'>${element.NOMBRE}</h5>
            <p class="mb-1 small">Precio unitario: $<span class="precio">${element.PRECIO}</span></p>
            </div>

            <div class="d-flex align-items-center gap-2 cantidad-control">
                <button class="btn btn-outline-light btn-restar" data-id ='${element.ID_PRODUCTO}'>-</button>
                <input type="text" class="form-control text-center bg-transparent text-white cantidad-input" value="${element.CANTIDAD}" readonly>

        /*                data-id es un atributo personalizado de HTML que forma parte de los llamados "data attributes". Se usa para guardar información adicional directamente en un elemento del DOM, sin que esa info se vea ni interfiera con el estilo o funcionalidad base. 
        
        */


                <button class="btn btn-outline-light btn-sumar" data-id ='${element.ID_PRODUCTO}'>+</button>

                <span class="fw-semibold text-white ms-3">$<span class="subtotal">${element.CANTIDAD * element.PRECIO}</span>
            </div>

            `
        });
    }
}



const activarEventosCantidad = () => {
    const botonesSumar = document.querySelectorAll('.btn-sumar');
    const botonesRestar = document.querySelectorAll('.btn-restar');

    botonesSumar.forEach((boton) => {
        boton.addEventListener('click', () => {
            //AHORA PARA UTILIZAR EL DATA-ID LO QUE HACEMOS ES UTILIZAR LA PROPIEDAD
            //.DATASET QUE ES UN OBJETO CON TODAS LAS PROPIEDAS QUE COMIENTAN CON DATA
            //Es un objeto que contiene todas las propiedades data-* del elemento como claves:
            //Todo lo que viene desde dataset es texto (string)
            const id = parseInt(boton.dataset.id);
            sumarCantidadPorId(id);
        });
    });

    botonesRestar.forEach((boton) => {
        boton.addEventListener('click', () => {
            const id = parseInt(boton.dataset.id);
            restarCantidadPorId(id);
        });
    });
};

const sumarCantidadPorID = async (idProducto) =>{
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    const productos = await obtenerProductos();

    //Esa línea no nos devuelve una copia, lo que nos da es una referencia directa al objeto dentro del array carrito.

    const productoDelCarrito = carrito.find(producto =>producto.ID_PRODUCTO === idProducto);
    const productoDeLaBD = productos.find(productoBase => productoBase.ID_PRODUCTO === idProducto);

    if(productoDelCarrito.cantidad < productoDeLaBD.CANTIDAD){
        productoDelCarrito +=1;
        //Entonces, con esa referencia lo que hacemos es modificar directamente el objeto que ya está dentro del array
        localStorage.setItem('carrito',JSON.stringify(carrito));
    }else{
        alert('No tenemos mas stock del mismo producto')
    }
}

const restarCantidadPorID = async (idProducto) =>{
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productosBase = await obtenerProductos();

    const productoDelCarrito = carrito.find(producto => producto.ID_PRODUCTO ===idProducto);
    const productoBaseDeLaBD = productosBase.find(producto =>producto.ID_PRODUCTO === idProducto);

    if( productoDelCarrito.CANTIDAD>1){
        productoDelCarrito.CANTIDAD =- 1;
        localStorage.setItem('carrito',JSON.stringify(carrito));
    }else{
        const indiceDelProducto = carrito.findIndex(producto =>producto.ID_PRODUCTO === idProducto);
        //si lo encuentra
        if (indiceDelProducto !== -1) {
        carrito.splice(indiceDelProducto, 1);
}
}
}

