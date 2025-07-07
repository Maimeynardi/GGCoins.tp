document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("modoOscuroBtn");
    const icono = boton?.querySelector("i");

    boton.addEventListener("click", () => {
        const activado = document.body.classList.toggle("modo-oscuro");
        localStorage.setItem("modo-oscuro", activado);

        icono.classList.replace(
            activado ? "bi-moon" : "bi-sun",
            activado ? "bi-sun" : "bi-moon"
        );
    });
});
