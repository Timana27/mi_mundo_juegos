
/* ==========================================
   MI MUNDO DE JUEGOS
   MENÚ PRINCIPAL
========================================== */

// Año automático
const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Navegación de tarjetas
const gameCards = document.querySelectorAll(".game-card");

gameCards.forEach((card) => {

    card.addEventListener("click", (event) => {

        if (event.target.closest("a")) {
            return;
        }

        const link = card.querySelector(".play-button");

        if (link) {
            window.location.href = link.href;
        }

    });

});


// Bienvenida
console.log("🎮 Mi mundo de juegos");
console.log("🌟 ¡Selecciona tu aventura y comienza a aprender!");
