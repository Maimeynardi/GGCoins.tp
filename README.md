<h1 align="center"> GGCOINS </h1>

<p align="center">
    Plataforma de autoservicio para gamers 🎮
</p>

🕹️ GGCoins es una plataforma de autoservicio para la venta de videojuegos y monedas virtuales (creditos) para títulos populares como Valorant, League of Legends, Fortnite, entre otros.

💸 Los usuarios pueden explorar productos con la posibilidad de seleccionar la categoria (juegos/creditos) en la que se encuentren interesados, con el fin de mejorar la experiencia de usuario. Tambien añadimos funcionalidad de agregar y/o restar productos en el carrito. Luego de confirmar su carrito se generará un ticket con los detalles de la compra.

🛡️ El sistema cuenta con autenticación segura para administradores, quienes tienen la posibilidad de ingresar y/o modificar los datos del producto mediante un formulario sencillo e intuitivo. Como asi tambien, desactivalos y volver activarlos.

---

## 🚀 Características

- Autenticación de usuarios con JWT 🔐
- Gestión de productos 🛒
- Registro de ventas y generación de tickets 🧾
- Conexión con base de datos mediante Sequelize 🛠️
- Servidor backend con Express.js ⚙️

---

## 📦 Tecnologías Usadas

- Node.js
- Express.js
- Sequelize + MySQL
- HTML 
- JavaScript
- CSS 
- Framework: Bootstrap

---

## 📁 Estructura del Proyecto

```bash
GGCoins.tp/                     # Proyecto principal
├── backend/                    # Lógica del servidor
│   ├── configuracionDataBase/ # Configuración y conexión a la base de datos
│   │   ├── BaseDeDatos.js
│   │   └── conexionBD.js
│   ├── controllers/           # Controladores (lógica de negocio)
│   │   ├── auth.controller.js
│   │   ├── detalleVentaControllers.js
│   │   ├── productosControllers.js
│   │   ├── ticketControllers.js
│   │   ├── tiposProductosControllers.js
│   │   ├── tiposUsuariosController.js
│   │   └── usuariosController.js
│   ├── middleware/            # Middlewares para seguridad y utilidades
│   │   ├── authMiddleware.js
│   │   └── upload.js
│   ├── models/                # Modelos de Sequelize (base de datos)
│   │   ├── detalle_venta.js
│   │   ├── productos.js
│   │   ├── relaciones.js
│   │   ├── tipos_producto.js
│   │   ├── tipos_usuario.js
│   │   ├── usuarios.js
│   │   └── ventas.js
│   ├── routes/                # Rutas de la API
│   │   ├── authRouter.js
│   │   ├── productosRouter.js
│   │   ├── usuariosRouter.js
│   │   └── ventasRouter.js
│   └── uploads/               # Archivos subidos (imágenes, etc.)
├── index.js                   # Punto de entrada del backend
├── frontend/                  # Lado del cliente
│   ├── admin-html/            # Páginas HTML del admin
│   │   ├── admin-alta.html
│   │   ├── admin-login.html
│   │   ├── dashboard.html
│   │   ├── modificar.html
│   │   └── ventas.html
│   ├── cliente-html/          # Páginas HTML del cliente
│   │   ├── bienvenida.html
│   │   ├── carrito.html
│   │   ├── productos.html
│   │   └── ticket.html
│   ├── css/                   # Estilos del sitio
│   │   └── styles.css
│   ├── img/                   # Imágenes del sitio
│   │   └── logo.png
│   └── js/                    # Scripts de frontend
│       ├── cliente/           # Scripts del cliente
│       │   ├── bienvenida.js
│       │   ├── carrito.js
│       │   ├── productosPublico.js
│       │   └── ticket.js
│       └── dashboard/         # Scripts del admin
│           ├── inicioSesion.js
│           ├── listadoProductos.js
│           ├── listadoVentas.js
│           ├── modificarProducto.js
│           └── validaciones.js
│           └── modoOscuro.js
└── README.md                  # Documentación del proyecto
```


## 🔧 Inicio Rápido
    1. Clona el repositorio
        git clone https://github.com/Maimeynardi/GGCoins.tp.git
        
    2. Explora el contenido
        cd GGCoins.tp
        
    3. Instala las dependencias
        cd backend/
        npm install
        
    4. Inicializa el servidor
        cd backend/
        node index.js

    5. Abre el proyecto
        Abre bienvenida.html en tu navegador para ver la página principal.
        
    6. Ingreso
        Como admin: debes escribir en el input de bienvenida "admin" y se genera un boton que te redirige al log-in de admin
        Como cliente: debes escribir tu nombre en el input de bienvenida y disfruta


## 📮 Rutas Principales

| Método | Ruta        | Descripción         |
|--------|-------------|---------------------|
| POST   | `/login`    | Iniciar sesión      |
| GET    | `/productos`| Listar productos    |
| POST   | `/usuarios` | Crear usuario       |
| POST   | `/ventas`   | Registrar una venta |

## 👤 Autores
* ✨ **Emmanuel Malve** – [emmanuelalbe](https://github.com/emmanuelalbe)
* ✨ **Maia Meynardi** – [Maimeynardi](https://github.com/Maimeynardi)

Este proyecto es de uso y fue desarrollado como **Trabajo práctico** final de la materia **Programación III - UTN FRA (2025)** , fue hecho con mucho esfuerzo y café ☕✨
