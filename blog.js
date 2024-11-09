document.addEventListener('DOMContentLoaded', () => {
    const menuCheckbox = document.querySelector('.menu-checkbox');
    const navBar = document.querySelector('.nav_bar');
    const navLinks = document.querySelectorAll('.nav_link');

    menuCheckbox.addEventListener('change', () => {
        if (menuCheckbox.checked) {
            navBar.style.transform = 'translateX(0)';
        } else {
            navBar.style.transform = 'translateX(100%)';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuCheckbox.checked = false;
            navBar.style.transform = 'translateX(100%)';
        });
    });

    // Ocultar el menú al cargar la página
    window.addEventListener('load', () => {
        menuCheckbox.checked = false;
        navBar.style.transform = 'translateX(100%)';
    });
});
