let menuBar = document.getElementById("menu_bar");
let menu = document.getElementById("menu");
let isMenu = false;

menuBar.addEventListener('click', () => {
    isMenu = !isMenu;

    menuBar.src = isMenu ? 'public/close.png' : 'public/menu.png';

    if (isMenu) {
        menu.classList.add("show");
        menu.classList.remove("hidden");
    } else {
        menu.classList.remove("show");
        setTimeout(() => menu.classList.add("hidden"), 400); // Wait for animation to end
    }
});
