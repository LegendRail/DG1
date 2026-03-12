// Mengubah latar belakang Navbar saat di-scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Interaksi Tab Buttons
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hapus class aktif dari semua tab
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Tambahkan class aktif ke tab yang diklik
        button.classList.add('active');
    });
});

// Interaksi Season Buttons
const seasonButtons = document.querySelectorAll('.season-btn');
seasonButtons.forEach(button => {
    button.addEventListener('click', () => {
        seasonButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});