window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    // Añade la clase 'sticky' si el scroll es mayor a 0 
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Efecto de aparición suave al cargar la Home
document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector('.content');
    
    // Solo aplica la animación si el elemento existe (solo en index.html)
    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(20px)";
        heroContent.style.transition = "all 1.5s ease";
    
        setTimeout(() => {
            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";
        }, 200);
    }
});