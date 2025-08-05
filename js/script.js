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

//SOBRE COLLAPSIBLE
const collapsibleBoxEls = document.querySelectorAll(".collapsible-box")
collapsibleBoxEls.forEach(boxEl => {
    const boxHeader = boxEl.querySelector(".collapsible-header")
    const boxArrow = boxHeader.querySelector(".collapsible-arrow")
    const boxContent = boxEl.querySelector(".collapsible-content")

    console.log(boxHeader)

    boxHeader.addEventListener('click', () => {
        if (boxContent.classList.contains("disabled")) {
            boxArrow.style.animation = "arrow-opening 0.5s ease-in-out forwards"
        }
        else {
            boxArrow.style.animation = "arrow-closing 0.5s ease-in-out forwards"
        }
        
        boxContent.classList.toggle("disabled");
    })
});
