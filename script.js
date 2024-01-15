const drawers = document.querySelectorAll('.drawer');

drawers.forEach((drawer, index) => {
    drawer.addEventListener('click', () => {
        toggleDrawers(index);
    });
});

function toggleDrawers(selectedIndex) {
    drawers.forEach((drawer, index) => {
        if (index === selectedIndex) {
            drawer.classList.toggle('active');
        } else {
            drawer.classList.remove('active');
        }
    });
}
