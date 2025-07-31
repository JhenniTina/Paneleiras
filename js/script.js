//MENU HAMBURGUER
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');

    let isOpened = false;
    hamburger.addEventListener('click', async () => {
        hamburger.classList.toggle('menu-active');
        
        if (!isOpened) {
            nav.style.animation = "hamburguer-menu-opening 0.5s ease-in-out";
            nav.classList.toggle('active');
        }
        else {
            nav.style.animation = "hamburguer-menu-closing 0.5s ease-in-out";
            setTimeout(function() {nav.classList.toggle('active')}, 400);
        }
        isOpened = !isOpened
    });
});