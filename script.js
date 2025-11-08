document.addEventListener('DOMContentLoaded', function() {
// Selecciona el botón de alternancia del menú por su ID
const menuToggle = document.getElementById('menu-toggle');
// Selecciona la lista de enlaces de navegación por su clase
const navLinks = document.querySelector('.nav-links');

// 1. Alternar la visibilidad del menú al hacer clic en el botón
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        // Añade o quita la clase 'active'. 
        // El CSS (en la media query) debe definir qué sucede cuando '.nav-links' tiene la clase '.active'.
        navLinks.classList.toggle('active');
    });

    // 2. Ocultar el menú al hacer clic en cualquier enlace (para navegación interna)
    // Esto mejora la experiencia del usuario en móviles.
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            // Solo remover la clase si el menú está abierto (tiene la clase 'active')
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
}
});