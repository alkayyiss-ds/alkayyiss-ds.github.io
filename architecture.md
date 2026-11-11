# Architecture Document
## Portfolio Website — alkayyiss-ds.github.io

---

### 1. System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        GitHub Pages (Static)                    │
│  https://alkayyiss-ds.github.io/                                │
├─────────────────────────────────────────────────────────────────┤
│  index.html          ← Single Page Application (no build step)  │
│  style.css           ← Mindloop Design System (monochrome + teal)│
│  script.js           ← Vanilla ES6+ (no framework, < 15KB gzip) │
│  /assets/            ← Static assets (images, fonts, icons)     │
│    ├── projects/     ← 10 project folders × 5 assets each       │
│    └── ...
└─────────────────────────────────────────────────────────────────┘
```

**Architecture Style:** Static Site / Client-Side Enhanced  
**Deployment:** GitHub Pages (auto-deploy from `main` branch)  
**Runtime:** Browser-only (no server, no build, no Node at runtime)  
**Dependencies:** Zero runtime dependencies (vanilla JS, native CSS, system fonts + Google Fonts)

---

### 2. Component Architecture

#### 2.1 HTML Structure (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta, SEO, JSON-LD, Fonts, CSS -->
</head>
<body>
  <!-- Navigation (fixed, liquid glass on scroll) -->
  <nav id="navbar" class="navbar">...</nav>

  <!-- Hero (typing animation, stats counter) -->
  <section id="hero" class="hero">...</section>

  <!-- About (word-reveal, info cards) -->
  <section id="about" class="section about-section">...</section>

  <!-- Skills (grid, hover effects) -->
  <section id="skills" class="section skills-section">...</section>

  <!-- Projects (filter + grid + MODAL TRIGGER) -->
  <section id="projects" class="section projects-section">
    <div class="projects-filter">...</div>
    <div class="projects-grid" id="projects-grid">
      <!-- 10 project-card articles injected by JS -->
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="section contact-section">...</section>

  <!-- Footer -->
  <footer class="footer">...</footer>

  <!-- PROJECT MODAL (injected once, reused) -->
  <div id="project-modal" class="modal" role="dialog" aria-modal="true" hidden>
    <div class="modal-backdrop"></div>
    <div class="modal-container">
      <header class="modal-header">...</header>
      <div class="modal-tabs" role="tablist">...</div>
      <div class="modal-panels">
        <section role="tabpanel" id="tab-overview">...</section>
        <section role="tabpanel" id="tab-results">...</section>
        <section role="tabpanel" id="tab-architecture">...</section>
      </div>
      <footer class="modal-footer">...</footer>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

#### 2.2 CSS Architecture (`style.css`)

**Layer Order (cascade):**
1. `@import` Google Fonts
2. `:root` — Design Tokens (colors, spacing, radii, transitions)
3. Reset & Base
4. Scrollbar
5. Container
6. Serif Accent Utility
7. Navbar (liquid glass)
8. Hero (orbs, grid, typing, stats)
9. Buttons
10. Section Base (tag, title, divider)
11. About (grid, word-reveal, info cards)
12. Skills (grid, tags)
13. Projects (filter, grid, cards, **NEW: modal styles**)
14. Contact (wrapper, links, card)
15. Footer
16. Scroll-Reveal (word, section)
17. Animations (keyframes)
18. Responsive (900px, 600px breakpoints)

**Modal-Specific CSS (new):**
```css
/* Modal — Mindloop compliant */
.modal {
  position: fixed; inset: 0; z-index: 1000;
  display: flex; align-items: center; justify-content: center;
  padding: 24px; opacity: 0; visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease;
}
.modal[open] { opacity: 1; visibility: visible; }
.modal-backdrop {
  position: absolute; inset: 0;
  background: hsla(0 0% 0% / 0.7);
  backdrop-filter: blur(4px);
}
.modal-container {
  position: relative; z-index: 1;
  width: 100%; max-width: 900px; max-height: 85vh;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); overflow: hidden;
  display: flex; flex-direction: column;
  animation: modalEnter 0.25s cubic-bezier(0.4,0,0.2,1);
}
@keyframes modalEnter { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: none; } }

/* Tabs */
.modal-tabs { display: flex; border-bottom: 1px solid var(--border); background: var(--bg-surface); }
.modal-tab { padding: 12px 20px; font-size: 0.82rem; font-weight: 500; color: var(--fg-muted); border: none; background: transparent; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -1px; transition: var(--transition); }
.modal-tab:hover { color: var(--fg); }
.modal-tab[aria-selected="true"] { color: var(--accent-light); border-bottom-color: var(--accent); }

/* Panels */
.modal-panels { flex: 1; overflow-y: auto; padding: 24px 32px; }
.modal-panel { display: none; animation: fadeUp 0.3s ease; }
.modal-panel[hidden="false"] { display: block; }

/* Results Grid */
.results-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 700px) { .results-grid { grid-template-columns: 1fr; } }
.result-card { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 20px; }
.result-card.full-width { grid-column: 1 / -1; }
.result-img { width: 100%; aspect-ratio: 6/5; object-fit: contain; background: var(--bg); border-radius: var(--radius-sm); border: 1px solid var(--border); }

/* Metrics Table */
.metrics-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.metrics-table th, .metrics-table td { padding: 10px 14px; text-align: left; border-bottom: 1px solid var(--border); }
.metrics-table th { color: var(--fg-subtle); font-weight: 500; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; }
.metrics-table td:last-child { color: var(--accent-light); font-family: var(--font-serif); font-style: italic; font-weight: 400; }
```

#### 2.3 JavaScript Architecture (`script.js`)

**Module Pattern (IIFE per concern):**

```javascript
// 1. Navbar — liquid glass on scroll
const Navbar = (() => { ... })();

// 2. Typing Animation — hero subtitle
const TypingAnimation = (() => { ... })();

// 3. Scroll Reveal — section elements (IntersectionObserver)
const ScrollReveal = (() => { ... })();

// 4. Word Reveal — about paragraphs (IntersectionObserver)
const WordReveal = (() => { ... })();

// 5. Project Filter — category buttons
const ProjectFilter = (() => { ... })();

// 6. Active Nav Link — scroll spy
const ActiveNavLink = (() => { ... })();

// 7. Stat Counter — hero stats
const StatCounter = (() => { ... })();

// 8. PROJECT MODAL — NEW MODULE
const ProjectModal = (() => {
  // State
  let currentProject = null;
  let focusBeforeOpen = null;

  // DOM refs
  const modal = document.getElementById('project-modal');
  const backdrop = modal.querySelector('.modal-backdrop');
  const container = modal.querySelector('.modal-container');
  const tabs = modal.querySelectorAll('.modal-tab');
  const panels = modal.querySelectorAll('.modal-panel');
  const closeBtn = modal.querySelector('.modal-close');
  const githubLink = modal.querySelector('.modal-github');

  // Project Data Registry (injected at runtime)
  const PROJECTS = {}; // populated from window.PROJECT_DATA

  // Public API
  function open(projectId) { ... }
  function close() { ... }
  function render(project) { ... }
  function switchTab(tabId) { ... }
  function trapFocus(e) { ... }
  function handleKeydown(e) { ... }
  function handleHashChange() { ... }

  // Init
  function init() {
    backdrop.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    tabs.forEach(tab => tab.addEventListener('click', () => switchTab(tab.dataset.tab)));
    document.addEventListener('keydown', handleKeydown);
    window.addEventListener('hashchange', handleHashChange);
    // Initial hash check
    if (location.hash.startsWith('#project-')) handleHashChange();
    // Delegate click on project cards
    document.getElementById('projects-grid').addEventListener('click', e => {
      const card = e.target.closest('.project-card');
      const githubLink = e.target.closest('.project-link');
      if (githubLink) return; // let default navigation happen
      if (card) open(card.dataset.projectId);
    });
  }

  return { init, open, close };
})();

// 9. Boot — initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  Navbar.init();
  TypingAnimation.init();
  ScrollReveal.init();
  WordReveal.init();
  ProjectFilter.init();
  ActiveNavLink.init();
  StatCounter.init();
  ProjectModal.init();
});
```

---

### 3. Data Flow

#### 3.1 Initial Load
```
Browser → GET index.html → Parse HTML/CSS → Execute script.js
                                    ↓
                         ProjectFilter.init() reads .project-card[data-category]
                         ProjectModal.init() reads window.PROJECT_DATA
                                    ↓
                         ScrollReveal/WordReveal observe DOM
                         TypingAnimation starts
                         StatCounter observes hero-stats
```

#### 3.2 Modal Open (User Click)
```
User clicks .project-card
    ↓
ProjectModal.open(projectId)
    ↓
1. focusBeforeOpen = document.activeElement
2. PROJECTS[projectId] → currentProject
3. render(currentProject) → populates modal DOM
4. modal.hidden = false; requestAnimationFrame → modal[open] = true
5. document.body.style.overflow = 'hidden'
6. container.focus() → focus trap armed
7. history.pushState(null, '', '#project-' + projectId)
```

#### 3.3 Modal Close
```
User clicks backdrop / ESC / close button
    ↓
ProjectModal.close()
    ↓
1. modal[open] = false; transitionend → modal.hidden = true
2. document.body.style.overflow = ''
3. focusBeforeOpen?.focus()
4. history.replaceState(null, '', location.pathname) // remove hash
```

#### 3.4 Deep Link (Hash Navigation)
```
Page loads with #project-waste-classification
    ↓
handleHashChange() → extract id → ProjectModal.open(id)
```

---

### 4. Asset Pipeline

```
Source Assets (local)          GitHub Pages (served)
─────────────────              ─────────────────────
/assets/projects/
  waste-classification/
    confusion-matrix.png    →  https://alkayyiss-ds.github.io/assets/projects/waste-classification/confusion-matrix.png
    roc-curve.png           →  ...
    feature-importance.png  →  ...
    training-curve.png      →  ...
    architecture.svg        →  ...
```

**Optimization Rules:**
- Images: WebP ≤ 200KB, 600×500px max (responsive `srcset` optional)
- SVGs: Minified (SVGO), viewBox preserved
- No build step — commit optimized assets directly
- Cache-Control via GitHub Pages (immutable, 1 year)

---

### 5. Security Considerations

| Vector | Mitigation |
|--------|------------|
| XSS via project data | `textContent` for all dynamic text; `dataset` for URLs; no `innerHTML` with user data |
| Clickjacking | `X-Frame-Options: DENY` via GitHub Pages headers |
| CSP | `default-src 'self'; img-src 'self' data:; font-src 'self' fonts.gstatic.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com;` |
| Mixed Content | All assets relative or HTTPS |

---

### 6. Performance Budget

| Metric | Budget | Measurement |
|--------|--------|-------------|
| HTML (gzipped) | < 15 KB | `curl -H "Accept-Encoding: gzip" -sI` |
| CSS (gzipped) | < 8 KB | |
| JS (gzipped) | < 12 KB | |
| Total JS execution (main thread) | < 100 ms | Lighthouse |
| LCP | < 2.5 s | Lighthouse |
| CLS | < 0.1 | Lighthouse |
| Modal open latency | < 150 ms | `performance.mark()` |

---

### 7. Accessibility Tree (Modal)

```
<dialog id="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal-backdrop" tabindex="-1"></div>
  <div class="modal-container">
    <header class="modal-header">
      <h2 id="modal-title" class="modal-title">Project Title</h2>
      <button class="modal-close" aria-label="Close project details">×</button>
    </header>
    <div class="modal-tabs" role="tablist" aria-orientation="horizontal">
      <button role="tab" aria-selected="true" aria-controls="tab-overview" id="tab-btn-overview" tabindex="0">Overview</button>
      <button role="tab" aria-selected="false" aria-controls="tab-results" id="tab-btn-results" tabindex="-1">Results</button>
      <button role="tab" aria-selected="false" aria-controls="tab-architecture" id="tab-btn-architecture" tabindex="-1">Architecture</button>
    </div>
    <div class="modal-panels">
      <section role="tabpanel" id="tab-overview" aria-labelledby="tab-btn-overview" hidden="false">...</section>
      <section role="tabpanel" id="tab-results" aria-labelledby="tab-btn-results" hidden="true">...</section>
      <section role="tabpanel" id="tab-architecture" aria-labelledby="tab-btn-architecture" hidden="true">...</section>
    </div>
    <footer class="modal-footer">
      <a class="modal-github" href="..." target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </footer>
  </div>
</dialog>
```

**Focus Trap Algorithm:**
1. On open: collect `container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')`
2. On Tab/Shift+Tab: if `activeElement === lastFocusable` → focus `firstFocusable` (and vice versa)
3. On Escape: `close()`
4. On backdrop click: `close()`

---

### 8. SEO & Structured Data

Each project card includes JSON-LD:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Waste Classification with Deep Learning",
  "applicationCategory": "MachineLearning",
  "operatingSystem": "Cloud",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Person", "name": "Muhammad Naufal Al Kayyis", "url": "https://github.com/alkayyiss-ds" },
  "description": "Multi-class image classification for automated waste sorting using transfer learning (EfficientNet)...",
  "featureList": ["TensorFlow", "EfficientNet", "Transfer Learning", "Kaggle"],
  "url": "https://github.com/alkayyiss-ds/waste-classification-ml"
}
</script>
```

---

### 9. Deployment Pipeline

```
Developer Machine                          GitHub Pages
──────────────────                         ─────────────
1. Edit index.html, style.css, script.js
2. Add assets to /assets/projects/
3. git add -A && git commit -m "feat: add project modal"
4. git push origin main
                                    ↓
                         GitHub Actions: pages-build-deployment
                                    ↓
                         Served at https://alkayyiss-ds.github.io/
```

**No CI/CD configuration needed** — GitHub Pages auto-deploys `main` branch root.

---

### 10. Future Extensibility

| Feature | Architecture Impact |
|---------|---------------------|
| CMS-backed projects | Replace `window.PROJECT_DATA` with `fetch('/projects.json')` |
| Interactive charts | Load Chart.js/Plotly.js dynamically in Results tab |
| Video demos | Add `<video>` to Architecture tab; lazy-load on tab switch |
| i18n | Add `data-i18n` attributes; load locale JSON on demand |
| Analytics | Plausible/Fathom script in `<head>` (privacy-friendly) |

---

### 11. File Inventory (Post-Enhancement)

```
portfolio-repo/
├── index.html           ← + modal HTML skeleton, JSON-LD per card
├── style.css            ← + modal styles (~120 lines)
├── script.js            ← + ProjectModal module (~200 lines)
├── prd.md               ← This PRD
├── architecture.md      ← This document
├── design-system.md     ← Design tokens & component specs
├── agents.md            ← Agent workflows for maintenance
├── assets/
│   └── projects/
│       ├── waste-classification/ (5 files)
│       ├── traffic-forecasting/ (5 files)
│       ├── text-tampering/ (5 files)
│       ├── wiki-prediction/ (5 files)
│       ├── prd-tiktok/ (5 files)
│       ├── r-statistics/ (5 files)
│       ├── neo-horcrox/ (5 files)
│       ├── interview-training/ (5 files)
│       ├── suaralens/ (5 files)
│       └── project-intelligence/ (5 files)
└── README.md            ← Updated with modal usage
```

---

### 12. Mermaid Architecture Diagram

```mermaid
graph TD
    A[Browser] --> B[GET index.html]
    B --> C[Parse HTML + CSS]
    C --> D[Execute script.js]
    D --> E[ProjectModal.init]
    D --> F[ProjectFilter.init]
    D --> G[ScrollReveal.init]
    
    E --> H[Read window.PROJECT_DATA]
    F --> I[Read .project-card[data-category]]
    
    User[User Click Card] --> J[ProjectModal.open(id)]
    J --> K[render(project)]
    K --> L[Populate Modal DOM]
    L --> M[Show Modal + Focus Trap]
    M --> N[pushState #project-id]
    
    DeepLink[Load #project-xyz] --> O[handleHashChange]
    O --> J
    
    Assets[/assets/projects/] -.->|Lazy Load| L
    
    style A fill:#1a1a1a,stroke:#00b894,color:#fff
    style Assets fill:#0d1117,stroke:#2a2a2a,color:#fff
    style E fill:#1a1a1a,stroke:#00b894,color:#fff
```