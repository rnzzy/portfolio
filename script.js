const header = document.getElementById('hero-header');

// how many pixels of scroll it takes to fully shrink
const SHRINK_DISTANCE = 260;

let latestY = 0;
let ticking = false;

function clamp(n, min, max){ return Math.min(max, Math.max(min, n)); }

function update() {
  const p = clamp(latestY / SHRINK_DISTANCE, 0, 1);
  header.style.setProperty('--p', p);
  ticking = false;
}

window.addEventListener('scroll', () => {
  latestY = window.scrollY || document.documentElement.scrollTop;

  if (!ticking) {
    window.requestAnimationFrame(update);
    ticking = true;
  }
}, { passive: true });

update();
