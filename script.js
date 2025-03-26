function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

function changeFont(font) {
    document.body.style.fontFamily = font;
}

// Suaviza a rolagem ao clicar nas abas do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
