const header = document.getElementById('hero-header');

let latestY = 0;
let ticking = false;

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function update() {
  // header-min in px (from CSS var)
  const rootStyles = getComputedStyle(document.documentElement);
  const headerMin = parseFloat(rootStyles.getPropertyValue('--header-min')) || 80;

  // 100dvh is essentially the visible viewport height; using window.innerHeight is good for JS math
  const headerMaxPx = window.innerHeight;

  // total pixels needed to go from max -> min
  const shrinkRange = Math.max(1, headerMaxPx - headerMin);

  const p = clamp(latestY / shrinkRange, 0, 1);
  header.style.setProperty('--p', p);

  ticking = false;
}

window.addEventListener('scroll', () => {
  latestY = window.scrollY || document.documentElement.scrollTop;

  if (!ticking) {
    window.requestAnimationFrame(update); // smooth updates pattern [web:83]
    ticking = true;
  }
}, { passive: true });

window.addEventListener('resize', update);

update();
