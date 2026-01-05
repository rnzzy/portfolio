// 1. SCROLL ANIMATION (Shrink Header)
window.addEventListener('scroll', function() {
    const header = document.getElementById('hero-header');
    const scrollPosition = window.scrollY;

    // Triggers when user scrolls down 100px
    if (scrollPosition > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. BACK TO TOP BUTTON
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 3. CLICK RIPPLE EFFECT
document.addEventListener('click', function(e) {
    // Create the ripple element
    const ripple = document.createElement('div');
    ripple.classList.add('click-effect');
    
    // Set position
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    
    // Append to body
    document.body.appendChild(ripple);
    
    // Remove after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// 4. CONSOLE LOG (Easter Egg for Recruiters)
console.log("%cHello World!", "color: #00ffcc; font-size: 20px; font-weight: bold;");
console.log("Looking at the source code? I like that. Let's chat: your-email@example.com");