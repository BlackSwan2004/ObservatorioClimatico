function showDetails(option) {
    const modalImage = document.getElementById("modal-image");
    const modalText = document.getElementById("modal-text");

    if (option === "interactivos") {
        modalImage.src = "Images/interactivos.jpg";
        modalImage.alt = "Gráficas y mapas interactivos";
        modalText.innerHTML = `
            <h2>Gráficas y Mapas Interactivos</h2>
            <p>Disfruta de gráficas y mapas dinámicos para analizar el clima en tiempo real.</p>
        `;
    } else if (option === "accesibilidad") {
        modalImage.src = "Images/accesibilidad.jpg";
        modalImage.alt = "Accesibilidad intuitiva";
        modalText.innerHTML = `
            <h2>Accesibilidad Intuitiva</h2>
            <p>Navega fácilmente con una interfaz diseñada para todos los usuarios.</p>
        `;
    } else if (option === "actualizada") {
        modalImage.src = "Images/actualizada.jpg";
        modalImage.alt = "Información actualizada";
        modalText.innerHTML = `
            <h2>Información Actualizada</h2>
            <p>Accede a datos climáticos actuales y precisos para tomar decisiones informadas.</p>
        `;
    }

    // Muestra el modal
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
}

function closeModal() {
    // Oculta el modal
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
