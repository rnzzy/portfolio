// SMOOTH SCROLL TRIGGER
window.addEventListener('scroll', function() {
    const header = document.getElementById('hero-header');
    
    // When user scrolls down 50px, add the .scrolled class
    // The CSS transition (0.8s) handles the smoothness automatically
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

console.log("Portfolio Interactive Loaded");