// 1. SCROLL SCRUBBING ANIMATION
// This tracks your scroll and updates a CSS variable (--scroll) from 0 to 1
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const maxScroll = 300; // The animation finishes after scrolling 300px
    
    // Calculate progress: 0.0 (top) to 1.0 (finished)
    let progress = Math.min(scrollY / maxScroll, 1);
    
    // Send this number to CSS
    document.body.style.setProperty('--scroll', progress);
});

// 2. BACK TO TOP BUTTON
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. CONSOLE LOG
console.log("%cSystem Online", "color: #00ffcc; font-weight: bold;");