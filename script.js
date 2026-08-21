// ================================================
// NAVBAR — liquid glass on scroll (Mindloop style)
// ================================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ================================================
// TYPING ANIMATION
// ================================================
const typingText = document.getElementById('typing-text');
const phrases = [
  'Data Science Student',
  'Machine Learning Engineer',
  'Kaggle Competitor',
  'AI Enthusiast',
  'Problem Solver',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  typingText.textContent = isDeleting
    ? currentPhrase.substring(0, charIndex - 1)
    : currentPhrase.substring(0, charIndex + 1);

  if (isDeleting) {
    charIndex--;
    typingSpeed = 40;
  } else {
    charIndex++;
    typingSpeed = 80;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();

// ================================================
// SCROLL-REVEAL — section elements (fade-up)
// ================================================
const revealEls = document.querySelectorAll(
  '.project-card, .skill-category, .info-card, .contact-item, .section-header, .contact-card'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 55);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ================================================
// WORD-REVEAL ANIMATION — Mindloop scroll-driven
// ================================================
function initWordReveal() {
  document.querySelectorAll('.word-reveal p').forEach(para => {
    const words = para.innerText.trim().split(/\s+/);
    para.innerHTML = words
      .map(w => `<span class="reveal-word">${w}</span>`)
      .join(' ');
  });

  const wordObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const words = entry.target.querySelectorAll('.reveal-word');
        words.forEach((word, i) => {
          setTimeout(() => word.classList.add('visible'), i * 40);
        });
        wordObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.word-reveal p').forEach(p => wordObserver.observe(p));
}

initWordReveal();

// ================================================
// PROJECT FILTER
// ================================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const cats = card.dataset.category || '';
      if (filter === 'all' || cats.includes(filter)) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeUp 0.4s ease both';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ================================================
// ACTIVE NAV LINK on scroll
// ================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === '#' + entry.target.id;
        link.style.color = isActive ? 'var(--fg)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ================================================
// STAT COUNTER ANIMATION
// ================================================
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = target / 35;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current) + suffix;
    if (current >= target) clearInterval(timer);
  }, 30);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(num => {
        const text = num.textContent;
        const value = parseInt(text);
        const suffix = text.replace(String(value), '');
        animateCounter(num, value, suffix);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);
