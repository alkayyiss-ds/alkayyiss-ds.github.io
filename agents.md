# Agent Workflows
## Portfolio Maintenance & Enhancement Procedures

> **Purpose:** Standardized workflows for autonomous agents (Claude Code, Codex, OpenCode) to maintain and enhance the portfolio website without design drift or regressions.

---

### 1. Agent Roles & Capabilities

| Agent | Best For | Access | Invocation |
|-------|----------|--------|------------|
| **Claude Code** | Complex refactors, architecture changes, multi-file features | Full repo read/write, terminal, GitHub API | `@claude-code` in issue/PR or CLI |
| **Codex** | Feature implementation, bug fixes, test generation | Full repo read/write, terminal | `@codex` in issue/PR or CLI |
| **OpenCode** | Code review, security scan, performance audit | Read-only + comment | `@opencode` in PR |
| **Hermes (this session)** | Planning, documentation, design decisions, asset coordination | Full toolset | Direct conversation |

---

### 2. Standard Workflows

#### 2.1 Adding a New Project to Portfolio

**Trigger:** New project completes (competition, coursework, freelance)

**Agent:** Claude Code or Codex

**Steps:**
```bash
# 1. Create project data object (see Section 3)
# 2. Add project card HTML to index.html (or inject via JS)
# 3. Create asset folder: /assets/projects/<project-slug>/
# 4. Add 5 optimized assets (confusion-matrix, roc-curve, feature-importance, training-curve, architecture)
# 5. Update PROJECT_DATA in script.js
# 6. Test: npm run test:visual (if exists) or manual Lighthouse
# 7. Commit: git add -A && git commit -m "feat: add <project-name> to portfolio"
# 8. Push: git push origin main
```

**Validation Checklist:**
- [ ] Project card appears in correct filter category
- [ ] Modal opens with all 3 tabs populated
- [ ] Metrics table matches notebook/model_card.md
- [ ] Images load (no 404), correct aspect ratio
- [ ] Deep link `#project-<slug>` works
- [ ] Mobile modal usable at 375px
- [ ] Lighthouse Performance ≥ 90

---

#### 2.2 Updating Project Metrics

**Trigger:** Model retrained, better score achieved, competition final results

**Agent:** Codex (single-file, low risk)

**Steps:**
```bash
# 1. Locate project in window.PROJECT_DATA (script.js)
# 2. Update metrics object: accuracy, f1Score, precision, recall, rocAuc
# 3. Replace asset images if confusion matrix/ROC changed
# 4. Commit: git commit -m "fix: update <project-name> metrics (F1: 0.938 → 0.952)"
# 5. Push
```

**Validation:**
- [ ] Modal Results tab shows new values
- [ ] No visual regression in modal layout

---

#### 2.3 Design System Compliance Audit

**Trigger:** Quarterly, or after any CSS/HTML change by external contributor

**Agent:** OpenCode (read-only review)

**Audit Script:**
```bash
# Run in repo root
npx stylelint "**/*.css" --config .stylelintrc.json  # if configured
# Or manual grep checks:
grep -rn "box-shadow" style.css && echo "FAIL: box-shadow found"
grep -rn "background.*gradient" style.css && echo "FAIL: gradient found"
grep -rn "#[0-9a-fA-F]\{3,6\}" style.css | grep -v "var(--" && echo "FAIL: hardcoded hex"
grep -rn "font-family:" style.css | grep -v "var(--font" && echo "FAIL: hardcoded font"
```

**Expected:** Zero violations

---

#### 2.4 Performance Regression Check

**Trigger:** Before any deploy, or after adding assets

**Agent:** Hermes (browser_exec) or Claude Code

**Procedure:**
```bash
# 1. Deploy to preview (GitHub Pages preview deployment or local serve)
# 2. Run Lighthouse CI:
npx lighthouse https://alkayyiss-ds.github.io/ \
  --output=json --output-path=lighthouse-report.json \
  --preset=desktop --chrome-flags="--headless"

# 3. Check budgets:
#    - Performance ≥ 90
#    - Accessibility ≥ 95
#    - Best Practices ≥ 90
#    - SEO ≥ 90
#    - LCP < 2.5s, CLS < 0.1, TBT < 200ms
```

**If Failed:** Block deploy; create issue with specific metric + recommendation

---

#### 2.5 Asset Optimization Pipeline

**Trigger:** New project assets received (raw screenshots, notebook exports)

**Agent:** Codex (can run CLI tools)

**Script:**
```bash
#!/bin/bash
# optimize-assets.sh <project-slug>
SLUG=$1
DIR="assets/projects/$SLUG"
mkdir -p "$DIR"

# 1. Convert PNG → WebP (quality 80)
for f in "$DIR"/*.png; do
  cwebp -q 80 "$f" -o "${f%.png}.webp"
done

# 2. Optimize SVGs
for f in "$DIR"/*.svg; do
  npx svgo "$f" -o "$f"
done

# 3. Verify sizes
find "$DIR" -type f -exec ls -lh {} \;
```

**Standards:**
| Asset | Target | Max |
|-------|--------|-----|
| PNG/WebP (charts) | ≤ 100KB | 150KB |
| SVG (architecture) | ≤ 30KB | 50KB |
| Total per project | ≤ 500KB | 750KB |

---

#### 2.6 Accessibility Regression Test

**Trigger:** After modal changes, new components, or quarterly

**Agent:** Hermes (browser_exec with axe-core)

**Script:**
```python
# In browser_exec session
await new_tab("https://alkayyiss-ds.github.io/")
await wait_for_load()

# Inject axe-core
await js("""
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.8.2/axe.min.js';
  document.head.appendChild(script);
""")
await wait_for_load()

# Run audit
const results = await js("axe.run()")
print(results.violations.map(v => `${v.impact}: ${v.description} (${v.nodes.length} nodes)`))
```

**Threshold:** Zero `critical` or `serious` violations

---

### 3. Data Contracts

#### 3.1 Project Data Schema (TypeScript)

```typescript
interface ProjectData {
  id: string;                    // kebab-case, matches #project-<id>
  title: string;
  category: string[];            // subset of ['ml','cv','nlp','stats','pm']
  badges: string[];              // display badges
  icon: 'green'|'blue'|'purple'|'orange'|'pink'|'teal'; // CSS class suffix
  description: string;           // 1-2 sentences
  techStack: string[];           // 4-6 items
  githubUrl: string;             // full GitHub URL
  role: string;                  // "AI Engineer / Data Scientist" etc.
  status: string;                // "Completed", "Active Development (~70%)", etc.
  dataset: string;               // brief description + size
  metrics: {
    accuracy: string;            // "94.2%"
    f1Score: string;             // "0.938"
    precision: string;           // "0.941"
    recall: string;              // "0.935"
    rocAuc: string;              // "0.987"
  };
  assets: {
    confusionMatrix: string;     // relative path from root
    rocCurve: string;
    featureImportance: string;
    trainingCurve: string;
    architecture: string;
  };
}
```

#### 3.2 Current PROJECT_DATA Registry

Located in `script.js` as `window.PROJECT_DATA = { ... }`

**10 Projects Registered:**
1. `waste-classification` — BDC 2026 Waste Classification
2. `traffic-forecasting` — Traffic Speed Forecasting
3. `text-tampering` — Text Tampering Detection
4. `wiki-prediction` — Wikipedia Next-Click Prediction
5. `prd-tiktok` — AI Product Requirements Documents
6. `r-statistics` — R Statistics Mini Projects
7. `neo-horcrox` — Neo Horcrox Supply Chain Analytics
8. `interview-training` — Interview Training System
9. `suaralens` — SuaraLens Citizen Complaint NLP
10. `project-intelligence` — Project Intelligence System

---

### 4. Git Conventions

#### 4.1 Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat` — New feature (modal, new project, filter)
- `fix` — Bug fix (metric typo, mobile layout, focus trap)
- `docs` — Documentation only (README, PRD, architecture)
- `style` — CSS/design tokens only (no logic change)
- `refactor` — Code restructure (no behavior change)
- `perf` — Performance (asset optimization, lazy load)
- `chore` — Maintenance (deps, scripts, config)

**Scopes:** `modal`, `projects`, `filter`, `hero`, `navbar`, `assets`, `a11y`, `perf`, `docs`

**Examples:**
```
feat(modal): add project detail modal with 3 tabs
fix(modal): focus trap not releasing on ESC
perf(assets): optimize project images to WebP
docs(prd): add acceptance criteria for modal
style(cards): adjust project-card padding to 32px
```

#### 4.2 Branch Strategy

- `main` — Production (GitHub Pages auto-deploys)
- `feature/<slug>` — New project, modal enhancement
- `fix/<slug>` — Bug fixes
- No long-lived branches; PR → main with squash merge

#### 4.3 PR Template

```markdown
## Summary
Brief description of change

## Type
- [ ] Feature
- [ ] Bug Fix
- [ ] Documentation
- [ ] Performance
- [ ] Accessibility

## Testing
- [ ] Local preview works (`npx serve .` or `python -m http.server`)
- [ ] Modal opens/closes correctly
- [ ] Deep linking works
- [ ] Mobile tested (375px, 414px)
- [ ] Lighthouse run (attach report or scores)
- [ ] No console errors

## Screenshots
Before / After (mobile + desktop)

## Checklist
- [ ] Design system compliant (no new colors, correct tokens)
- [ ] No hardcoded values in CSS/JS
- [ ] Assets optimized (< 150KB each)
- [ ] JSON-LD updated if project metadata changed
```

---

### 5. Local Development Commands

```bash
# Serve locally (no build step needed)
npx serve .                    # or: python -m http.server 8000
# Open http://localhost:3000 or :8000

# Validate HTML
npx html-validate index.html

# Validate CSS (if stylelint configured)
npx stylelint style.css

# Check for hardcoded values
grep -nE "(#[0-9a-f]{3,8}|rgb\(|rgba\(|hsl\()" style.css | grep -v "var(--"

# Lighthouse local
npx lighthouse http://localhost:3000 --view
```

---

### 6. Asset Submission Checklist (for Human)

When providing new project assets:

- [ ] **confusion-matrix.png** — 600×500px, includes class labels, normalized % or counts
- [ ] **roc-curve.png** — 600×500px, AUC in legend, micro/macro if multi-class
- [ ] **feature-importance.png** — 600×500px, top 15 features, horizontal bar chart
- [ ] **training-curve.png** — 600×500px, loss + metric per epoch, train/val
- [ ] **architecture.svg** — 800×600 viewBox, mermaid or draw.io export, minified
- [ ] **metrics.json** — `{ "accuracy": "...", "f1Score": "...", "precision": "...", "recall": "...", "rocAuc": "..." }`
- [ ] All files named exactly per convention, placed in `/assets/projects/<slug>/`

---

### 7. Troubleshooting Guide

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Modal won't open | `window.PROJECT_DATA` missing key | Check `id` matches `data-project-id` on card |
| Images 404 in modal | Wrong path in `assets` object | Must be `/assets/projects/<slug>/<file>` (leading slash) |
| Modal cuts off on mobile | `max-height: 85vh` too small | Increase to `90vh`, reduce padding |
| Focus not trapped | `tabindex` missing on focusable elements | Ensure all buttons/links in modal have `tabindex="0"` |
| Filter hides modal card | `hidden` class not removed on filter change | `ProjectFilter` must call `ProjectModal.syncVisibility()` |
| Deep link doesn't work | Hash parsing expects `#project-` prefix | Check `handleHashChange()` logic |
| Lighthouse CLS > 0.1 | Images without dimensions | Add `width`/`height` or `aspect-ratio` CSS |
| Console: "Cannot read property of null" | DOM not ready when module init | Wrap in `DOMContentLoaded` or defer script |

---

### 8. Emergency Rollback

```bash
# If bad deploy to GitHub Pages:
git log --oneline -5
git revert <bad-commit-sha>
git push origin main
# GitHub Pages rebuilds automatically (~2-5 min)
```

---

### 9. Contact & Escalation

| Issue Type | Contact | SLA |
|------------|---------|-----|
| Design system violation | Owner (alkayyiss-ds) | 24h |
| Performance regression | Owner | 48h |
| Accessibility blocker | Owner | 24h |
| Asset missing | Owner | 1 week |
| Security concern | Owner + GitHub Security | Immediate |

---

### 10. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-09-26 | Hermes | Initial agent workflows for portfolio |