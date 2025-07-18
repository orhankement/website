// Menü butonuna tıklanınca mobil menüyü aç/kapat
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');

    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
}

// Sayfa yüklendiğinde event ekle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', toggleMenu);
});
