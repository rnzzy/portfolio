const header = document.getElementById('hero-header');
const root = document.documentElement;

let latestY = 0;
let ticking = false;

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function update() {
  const rootStyles = getComputedStyle(document.documentElement);
  const headerMin = parseFloat(rootStyles.getPropertyValue('--header-min')) || 90;
  const headerMaxPx = window.innerHeight;
  const shrinkRange = Math.max(1, headerMaxPx - headerMin);

  const p = clamp(latestY / shrinkRange, 0, 1);
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

window.addEventListener('resize', update);

update();

/* --- LIGHT MODE TOGGLE --- */
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('i');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  themeBtn.style.transform = 'rotate(360deg)';
  setTimeout(() => themeBtn.style.transform = '', 300);

  if (body.classList.contains('light-mode')) {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  }
});

/* --- COPY EMAIL FUNCTION --- */
function copyEmail() {
  const email = "jhorenzcamarador@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const btn = document.getElementById('copy-email-btn');
    const tooltip = btn.querySelector('.tooltip');
    
    // Change tooltip text
    const originalText = tooltip.innerText;
    tooltip.innerText = "Copied!";
    btn.classList.add('copied');
    
    // Reset after 2 seconds
    setTimeout(() => {
      btn.classList.remove('copied');
      tooltip.innerText = originalText;
    }, 2000);
  });
}