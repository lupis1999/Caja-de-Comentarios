const formulario = document.getElementById("formulario");
const input = document.getElementById("textoComentario");
const contenedor = document.getElementById("comentarios");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const texto = input.value.trim();
    if (texto === "") return;

    // Fecha y hora
    const fecha = new Date();
    const fechaTexto = fecha.toLocaleString();

    // Crear comentario
    const div = document.createElement("div");
    div.classList.add("comentario");

    const pTexto = document.createElement("p");
    pTexto.textContent = texto;

    const pFecha = document.createElement("p");
    pFecha.textContent = fechaTexto;
    pFecha.classList.add("fecha");

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", function() {
        contenedor.removeChild(div);
    });

    // Agregar elementos
    div.appendChild(pTexto);
    div.appendChild(pFecha);
    div.appendChild(btnEliminar);

    contenedor.appendChild(div);

    // Limpiar input
    input.value = "";
});