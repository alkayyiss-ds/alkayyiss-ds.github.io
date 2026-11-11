# Design System — Mindloop Monochrome
## alkayyiss-ds.github.io Portfolio

> **Philosophy:** Pure monochrome. Single teal accent. Instrument Serif italic for emphasis. Editorial hierarchy. No decoration without function.

---

### 1. Color Palette

#### 1.1 Core Tokens (CSS Custom Properties)

```css
:root {
  /* ── Backgrounds ── */
  --bg:           hsl(0 0% 0%);        /* Pure black — page background */
  --bg-surface:   hsl(0 0% 4%);        /* Slightly elevated — sections, cards */
  --bg-card:      hsl(0 0% 6%);        /* Card surface */
  --bg-card-hover:hsl(0 0% 8%);        /* Card hover state */

  /* ── Foregrounds ── */
  --fg:           hsl(0 0% 100%);      /* Pure white — primary text */
  --fg-muted:     hsl(0 0% 65%);       /* Secondary text, labels */
  --fg-subtle:    hsl(0 0% 35%);       /* Tertiary, disabled, placeholders */

  /* ── Borders ── */
  --border:       hsl(0 0% 14%);       /* Default border */
  --border-hover: hsl(0 0% 25%);       /* Hover/focus border */

  /* ── Accent — SINGLE TEAL ── */
  --accent:       hsl(170 30% 42%);    /* Primary accent — buttons, links, indicators */
  --accent-light: hsl(170 40% 58%);    /* Hover/typing cursor */
  --accent-glow:  hsla(170 30% 42% / 0.15); /* Focus rings, badge backgrounds */

  /* ── Semantic Aliases ── */
  --color-success: var(--accent);
  --color-warning: hsl(45 90% 55%);
  --color-error:   hsl(0 70% 55%);
}
```

#### 1.2 Usage Rules

| Token | Use For | Never Use For |
|-------|---------|---------------|
| `--bg` | `body`, full-page backgrounds | Cards, surfaces |
| `--bg-surface` | Section backgrounds (`skills-section`, `contact-section`) | Page background |
| `--bg-card` | `.project-card`, `.skill-category`, `.info-card`, modal container | Page/section backgrounds |
| `--fg` | Headlines, primary body text, stat numbers | Muted labels |
| `--fg-muted` | Paragraphs, descriptions, tech tags, badge text | Headlines |
| `--fg-subtle` | Placeholders, disabled states, section tag labels | Interactive text |
| `--border` | All 1px borders (cards, inputs, buttons, divs) | Focus rings |
| `--border-hover` | Hover/focus border states | Default borders |
| `--accent` | Primary buttons, badge dots, typing cursor, icon strokes, tab indicators | Backgrounds, text (except links) |
| `--accent-light` | Hover states on accent elements, typing cursor blink | Primary actions |
| `--accent-glow` | `::selection`, focus-visible rings, badge backgrounds | Opaque fills |

#### 1.3 Forbidden Colors

- ❌ No blue, purple, orange, pink, green, red as UI colors
- ❌ No gradient backgrounds (except hero orbs — monochrome only)
- ❌ No colored shadows or glows (except `--accent-glow` at ≤ 15% opacity)
- ❌ No syntax highlighting colors in UI (code blocks use monochrome)

---

### 2. Typography

#### 2.1 Font Stack

```css
--font-sans:  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-serif: 'Instrument Serif', Georgia, Cambria, serif;
--font-mono:  'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
```

**Loading:** Google Fonts preconnect + `display=swap` in `<head>`

#### 2.2 Type Scale

| Role | Font | Size | Weight | Line Height | Letter Spacing | Transform |
|------|------|------|--------|-------------|----------------|-----------|
| Hero Greeting | Sans | 0.35em of title | 400 | 1 | 0.15em | UPPERCASE |
| Hero Name | **Serif Italic** | clamp(2.4rem, 5.5vw, 4.5rem) | 300 | 1.1 | -0.03em | — |
| Section Tag | Sans | 0.72rem | 500 | 1 | 0.18em | UPPERCASE |
| Section Title | Sans + **Serif Italic em** | clamp(2rem, 4vw, 3rem) | 300 | 1.15 | -0.02em | — |
| Section Desc | Sans | 0.95rem | 300 | 1.8 | 0 | — |
| Card Title | Sans | 0.97rem | 500 | 1.4 | 0 | — |
| Card Desc | Sans | 0.85rem | 300 | 1.75 | 0 | — |
| Body / Paragraph | Sans | 0.97rem | 300 | 1.85 | 0 | — |
| Button | Sans | 0.9rem | 500 | 1 | 0.01em | — |
| Nav Link | Sans | 0.875rem | 400 | 1 | 0.01em | — |
| Badge / Tag | Sans | 0.68–0.8rem | 400–500 | 1 | 0.04em | — |
| Code / Tech Tag | **Mono** | 0.72rem | 400 | 1.5 | 0 | — |
| Stat Number | **Serif Italic** | 2.2rem | 300 | 1 | 0 | — |
| Modal Title | Sans + **Serif Italic em** | 1.25rem | 400 | 1.2 | -0.01em | — |

#### 2.3 Serif Italic Usage (The "Mindloop Signature")

**Apply ONLY to:**
- Hero name (`.title-name`)
- Section title emphasis (`.section-title em`)
- Stat numbers (`.stat-num`)
- Contact card heading (`.contact-card h3`)
- Modal title emphasis

**Never apply to:**
- Body text
- Buttons
- Navigation
- Badges/tags
- Code

---

### 3. Spacing System

#### 3.1 Base Unit: 4px

```css
--space-1:  4px;   /* 0.25rem */
--space-2:  8px;   /* 0.5rem  */
--space-3:  12px;  /* 0.75rem */
--space-4:  16px;  /* 1rem    */
--space-5:  20px;  /* 1.25rem */
--space-6:  24px;  /* 1.5rem  */
--space-8:  32px;  /* 2rem    */
--space-10: 40px;  /* 2.5rem  */
--space-12: 48px;  /* 3rem    */
--space-16: 64px;  /* 4rem    */
--space-20: 80px;  /* 5rem    */
--space-24: 96px;  /* 6rem    */
```

#### 3.2 Section Vertical Rhythm

```css
--section-y: 140px;  /* Desktop section padding-top/bottom */
--section-y-mobile: 100px;  /* ≤ 900px */
--section-y-small: 80px;    /* ≤ 600px */
```

#### 3.3 Component Spacing

| Component | Padding | Gap |
|-----------|---------|-----|
| `.container` | 0 32px (20px mobile) | — |
| `.navbar` | 20px 32px → 14px 32px scrolled | 40px |
| `.hero-content` | — | 36px between elements |
| `.project-card` | 32px | 24px desc→tech, 24px tech→footer |
| `.skill-category` | 32px | 20px title→tags |
| `.info-card` | 24px | 6px icon→content, 6px h4→p |
| `.modal-container` | — | 24px panels, 20px footer |
| `.modal-panels` | 24px 32px | 16px grid gap |

---

### 4. Border Radius

```css
--radius-sm:  6px;   /* Buttons, badges, nav-link, icons */
--radius-md:  10px;  /* Cards, containers, grids */
--radius-lg:  14px;  /* Modal, hero badge pill */
--radius-full: 999px; /* Pills, avatar, scroll wheel */
```

**Rules:**
- Cards/containers: `--radius-md`
- Interactive elements (buttons, tags): `--radius-sm` or `--radius-full`
- Modal: `--radius-lg`
- Never mix radii in same component

---

### 5. Shadows & Elevation

**Mindloop Principle:** No shadows. No elevation layers.  
Separation via **1px borders** and **background value steps** (`--bg` → `--bg-surface` → `--bg-card` → `--bg-card-hover`).

```css
/* FORBIDDEN */
box-shadow: ...;
filter: drop-shadow(...);

/* ALLOWED — only for hero orbs */
.orb { filter: blur(100px); }

/* ALLOWED — focus ring (accessibility) */
*:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

---

### 6. Transitions & Motion

#### 6.1 Standard Transition

```css
--transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
```

**Applied to:** All interactive states (hover, focus, active), color changes, border changes, transform.

#### 6.2 Animation Keyframes

| Name | Duration | Easing | Use For |
|------|----------|--------|---------|
| `fadeUp` | 0.65s | ease | Section reveal, hero elements, modal enter |
| `fadeInDown` | 0.4s | ease | Navbar scrolled state |
| `pulse` | 2.5s | ease-in-out | Hero badge dot |
| `orbFloat` | 10s | ease-in-out | Hero background orbs |
| `scrollWheel` | 2s | ease-in-out | Hero scroll indicator |
| `blink` | 1s | step-end | Typing cursor |
| `modalEnter` | 0.25s | cubic-bezier(0.4,0,0.2,1) | Modal open |
| `wordReveal` | 0.4s | ease | Per-word scroll reveal |

#### 6.3 Motion Reduction

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

### 7. Grid & Layout

#### 7.1 Container

```css
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;  /* 20px mobile */
}
```

#### 7.2 Section Grids

| Section | Grid Template | Gap |
|---------|---------------|-----|
| `.about-grid` | `1fr 1fr` (stack < 900px) | 80px (48px mobile) |
| `.about-cards` | `1fr 1fr` (stack < 600px) | 1px (border grid) |
| `.skills-grid` | `repeat(2, 1fr)` (1fr < 900px) | 1px (border grid) |
| `.projects-grid` | `repeat(3, 1fr)` (2fr < 900px, 1fr < 600px) | 1px (border grid) |
| `.contact-wrapper` | `1fr 1fr` (stack < 900px) | 80px (48px mobile) |
| `.results-grid` (modal) | `repeat(2, 1fr)` (1fr < 700px) | 16px |

#### 7.3 Border Grid Pattern

```css
/* Used for about-cards, skills-grid, projects-grid, contact-links */
.grid-with-borders {
  display: grid;
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.grid-with-borders > * {
  background: var(--bg-card);
}
.grid-with-borders > *:hover {
  background: var(--bg-card-hover);
}
```

---

### 8. Components

#### 8.1 Buttons

```css
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 28px; border-radius: var(--radius-sm);
  font-size: 0.9rem; font-weight: 500; font-family: var(--font-sans);
  cursor: pointer; border: none; transition: var(--transition);
}

.btn-primary   { background: var(--fg); color: var(--bg); }
.btn-primary:hover { background: hsla(0 0% 100% / 0.88); transform: translateY(-1px); }

.btn-secondary { background: transparent; color: var(--fg-muted); border: 1px solid var(--border); }
.btn-secondary:hover { color: var(--fg); border-color: var(--border-hover); transform: translateY(-1px); }

.btn-outline   { background: transparent; color: var(--fg-muted); border: 1px solid var(--border); }
.btn-outline:hover { color: var(--fg); border-color: var(--border-hover); }

.btn-full { width: 100%; justify-content: center; }
```

#### 8.2 Badges / Tags

```css
.badge, .tech-tag, .skill-tag, .filter-btn {
  padding: 2px 9px / 3px 10px / 5px 14px / 6px 18px;
  border-radius: 999px / var(--radius-sm);
  font-size: 0.68–0.82rem;
  font-weight: 400–500;
  border: 1px solid var(--border);
  background: transparent;
  transition: var(--transition);
}

/* States */
.badge--primary   { color: var(--fg); border-color: var(--border-hover); }
.badge--primary:hover { background: var(--fg); color: var(--bg); border-color: var(--fg); }

.badge--secondary { color: var(--fg-muted); }
.badge--secondary:hover { color: var(--fg); border-color: var(--border-hover); }

/* Filter active */
.filter-btn.active { background: var(--fg); color: var(--bg); border-color: var(--fg); }
```

#### 8.3 Project Card

```css
.project-card {
  position: relative;
  padding: 32px;
  background: var(--bg-card);
  transition: var(--transition);
  display: flex; flex-direction: column;
}
.project-card:hover { background: var(--bg-card-hover); }

.project-header { display: flex; gap: 12px; margin-bottom: 20px; }
.project-icon { 38px square; border: 1px solid var(--border); color: var(--fg-muted); }
.project-badges { flex-wrap: wrap; gap: 6px; margin-top: 4px; }
.project-title { 0.97rem, 500, var(--fg), mb-12; }
.project-desc { 0.85rem, 300, var(--fg-muted), flex: 1, mb-24; }
.project-tech { flex-wrap: wrap; gap: 6px; mb-24; }
.project-link { inline-flex, gap-8, 0.82rem, 500, var(--fg-muted), border-bottom transparent; }
.project-link:hover { color: var(--fg); border-bottom-color: var(--border-hover); }
```

#### 8.4 Modal (New Component)

```css
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

.modal-header { padding: 20px 24px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: flex-start; }
.modal-title { font-size: 1.1rem; font-weight: 400; color: var(--fg); }
.modal-title em { font-family: var(--font-serif); font-style: italic; }
.modal-close { 32px square; border: 1px solid var(--border); border-radius: var(--radius-sm); color: var(--fg-muted); background: transparent; cursor: pointer; }
.modal-close:hover { color: var(--fg); border-color: var(--border-hover); }

.modal-tabs { display: flex; border-bottom: 1px solid var(--border); background: var(--bg-surface); }
.modal-tab { padding: 12px 20px; font-size: 0.82rem; font-weight: 500; color: var(--fg-muted); border: none; background: transparent; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -1px; }
.modal-tab[aria-selected="true"] { color: var(--accent-light); border-bottom-color: var(--accent); }

.modal-panels { flex: 1; overflow-y: auto; padding: 24px 32px; }
.modal-panel { display: none; }
.modal-panel[hidden="false"] { display: block; animation: fadeUp 0.3s ease; }

.modal-footer { padding: 16px 24px; border-top: 1px solid var(--border); display: flex; justify-content: flex-end; }

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
.metrics-table td:last-child { color: var(--accent-light); font-family: var(--font-serif); font-style: italic; }
```

#### 8.5 Form Elements (Contact, Future)

```css
.input {
  width: 100%; padding: 12px 16px;
  background: var(--bg-surface); border: 1px solid var(--border);
  border-radius: var(--radius-sm); color: var(--fg);
  font-family: var(--font-sans); font-size: 0.9rem;
  transition: var(--transition);
}
.input::placeholder { color: var(--fg-subtle); }
.input:hover { border-color: var(--border-hover); }
.input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 2px var(--accent-glow); }
```

---

### 9. Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 900px) {
  :root { --section-y: 100px; }
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
  .about-grid { grid-template-columns: 1fr; gap: 48px; }
  .contact-wrapper { grid-template-columns: 1fr; gap: 48px; }
  .skills-grid { grid-template-columns: 1fr; }
  .footer-inner { flex-direction: column; gap: 8px; text-align: center; }
  .nav-links { display: none; }
  .about-cards { grid-template-columns: 1fr; }
  .hero-stats { gap: 24px; }
  .hero-title { font-size: 2.5rem; }
  .modal-container { max-height: 90vh; padding: 16px; }
  .modal-panels { padding: 20px 24px; }
}

/* Mobile */
@media (max-width: 600px) {
  :root { --section-y: 80px; }
  .container { padding: 0 20px; }
  .navbar { padding: 16px 20px; }
  .navbar.scrolled { padding: 12px 20px; }
  .projects-grid { grid-template-columns: 1fr; }
  .hero-actions { flex-direction: column; align-items: center; }
  .hero-stats { gap: 24px; }
  .results-grid { grid-template-columns: 1fr; }
}
```

---

### 10. Accessibility Checklist

- [ ] Color contrast: All text ≥ 4.5:1 (WCAG AA)
- [ ] Focus visible: All interactive elements have `focus-visible` ring
- [ ] Keyboard: Tab order logical; modal traps focus; ESC closes modal
- [ ] ARIA: Modal has `role="dialog" aria-modal="true" aria-labelledby`
- [ ] Tabs: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`
- [ ] Images: All `img` have meaningful `alt`; decorative use `alt=""`
- [ ] Reduced motion: `@media (prefers-reduced-motion)` respected
- [ ] Language: `lang="en"` on `<html>`

---

### 11. Asset Specifications

#### 11.1 Project Assets (per project)

| Asset | Dimensions | Format | Max Size | Naming |
|-------|------------|--------|----------|--------|
| Confusion Matrix | 600×500px | PNG/WebP | 150KB | `confusion-matrix.png` |
| ROC Curve | 600×500px | PNG/WebP | 150KB | `roc-curve.png` |
| Feature Importance | 600×500px | PNG/WebP | 150KB | `feature-importance.png` |
| Training Curve | 600×500px | PNG/WebP | 150KB | `training-curve.png` |
| Architecture Diagram | 800×600 viewBox | SVG (minified) | 50KB | `architecture.svg` |

#### 11.2 Optimization Checklist

- [ ] PNG → WebP conversion (cwebp -q 80)
- [ ] SVG → SVGO (remove metadata, minify)
- [ ] Filename: kebab-case, no spaces
- [ ] Path: `/assets/projects/<project-slug>/<asset-name>`

---

### 12. Design Token Reference (JSON)

```json
{
  "color": {
    "bg": "#000000",
    "bgSurface": "#0a0a0a",
    "bgCard": "#0f0f0f",
    "bgCardHover": "#141414",
    "fg": "#ffffff",
    "fgMuted": "#a6a6a6",
    "fgSubtle": "#595959",
    "border": "#242424",
    "borderHover": "#404040",
    "accent": "#00b894",
    "accentLight": "#2fe3be",
    "accentGlow": "rgba(0,184,148,0.15)"
  },
  "font": {
    "sans": "Inter",
    "serif": "Instrument Serif",
    "mono": "JetBrains Mono"
  },
  "spacing": {
    "base": 4,
    "scale": [4,8,12,16,20,24,32,40,48,64,80,96]
  },
  "radius": { "sm": 6, "md": 10, "lg": 14, "full": 9999 },
  "transition": "all 0.25s cubic-bezier(0.4,0,0.2,1)",
  "breakpoints": { "tablet": 900, "mobile": 600 }
}
```

---

### 13. Component State Matrix

| Component | Default | Hover | Focus | Active | Disabled |
|-----------|---------|-------|-------|--------|----------|
| `.btn-primary` | bg=fg, c=bg | bg=fg@88% | ring=accent | transform:scale(0.98) | opacity=0.4, cursor=not-allowed |
| `.btn-secondary` | bg=trans, c=fgMuted, bd=border | c=fg, bd=borderHover | ring=accent | transform:scale(0.98) | opacity=0.4 |
| `.nav-link` | c=fgMuted | c=fg | c=fg | c=fg | — |
| `.project-card` | bg=bgCard | bg=bgCardHover | — | — | — |
| `.skill-tag` | c=fg/bd=border | bg=fg/c=bg | ring=accent | — | — |
| `.filter-btn` | c=fgMuted/bd=border | c=fg/bd=borderHover | ring=accent | bg=fg/c=bg/bd=fg | — |
| `.modal-tab` | c=fgMuted | c=fg | ring=accent | c=accentLight/bdB=accent | — |
| `.project-link` | c=fgMuted | c=fg, bdb=borderHover | ring=accent | — | — |

---

### 14. Implementation Notes for Developers

1. **Never hardcode colors** — always use CSS custom properties
2. **Never add new colors** — the palette is closed
3. **Serif italic** = `font-family: var(--font-serif); font-style: italic; font-weight: 400;`
4. **Mono** = `font-family: var(--font-mono);`
5. **Borders** = 1px solid `var(--border)` or `var(--border-hover)`
6. **Transitions** = `var(--transition)` on all interactive elements
7. **Focus rings** = `outline: 2px solid var(--accent); outline-offset: 2px;`
8. **Modal focus trap** — implement in JS, not CSS
9. **Images** — `loading="lazy"` for below-fold; `fetchpriority="high"` for hero
10. **Test** — Lighthouse, axe DevTools, keyboard-only navigation, screen reader (NVDA/VoiceOver)

---

### 15. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-09-26 | Initial Mindloop system for portfolio |
| 1.1 | 2026-09-26 | Added modal component specs for project detail |