# Product Requirements Document (PRD)
## Portfolio Website Enhancement — alkayyiss-ds.github.io

---

### 1. Product Overview

**Product Name:** Muhammad Naufal Al Kayyis — Data Science Portfolio  
**Current URL:** https://alkayyiss-ds.github.io/  
**Repository:** alkayyiss-ds/alkayyiss-ds.github.io  
**Owner:** Muhammad Naufal Al Kayyis (alkayyiss-ds)  
**Institution:** Politeknik Elektronika Negeri Surabaya (PENS-EEPIS)  
**Program:** D4 Sains Data Terapan (Applied Data Science)

---

### 2. Problem Statement

The current portfolio showcases 6 projects in a static card grid. Clicking "View on GitHub" redirects externally. There is no way to see project results (model metrics, charts, confusion matrices) without leaving the site. Stakeholders (recruiters, collaborators, competition reviewers) want to evaluate technical depth directly on the portfolio.

---

### 3. Goals & Success Metrics

| Goal | Metric |
|------|--------|
| **Increase technical depth visibility** | 100% of featured projects show inline metrics (accuracy, F1, ROC-AUC, confusion matrix) |
| **Reduce external navigation** | 0 external clicks needed to see core results; GitHub link remains for code |
| **Maintain performance** | LCP < 2.5s, CLS < 0.1, no layout shift on modal open |
| **Preserve design system** | Zero deviation from Mindloop monochrome + teal accent system |
| **Mobile parity** | Modal usable on ≥ 375px viewport; touch-friendly scroll |

---

### 4. User Personas

| Persona | Need | Priority |
|---------|------|----------|
| **Recruiter (30s scan)** | See model performance at a glance | P0 |
| **ML Engineer (deep dive)** | Inspect confusion matrix, feature importance, training curves | P1 |
| **Competition Reviewer** | Verify BDC 2026 / Kaggle metrics match submission | P1 |
| **Academic Collaborator** | Understand methodology, data volume, architecture | P2 |

---

### 5. Scope

#### In Scope (MVP)
- **10 Project Cards** (current 6 + Neo-Horcrox, Interview Training, SuaraLens, Project-Intelligence-System)
- **Dynamic Modal Overlay** per project (same page, no navigation)
- **Results Panel** inside modal: metrics table, confusion matrix image, ROC curve image, feature importance chart, training curve
- **Project Metadata**: tech stack, dataset size, role, status, GitHub link
- **Filter System** preserved (All, ML, CV, NLP, Stats, PM)
- **Responsive** down to 375px
- **Keyboard accessible** (ESC to close, Tab trap, focus restoration)

#### Out of Scope (Future)
- Interactive charts (Chart.js / Plotly.js inside modal)
- Video/GIF carousel for dashboard demos
- PDF export of project summary
- Multi-language (EN/ID)
- CMS-backed project data (currently hardcoded in HTML/JS)

---

### 6. Functional Requirements

| ID | Requirement | Description |
|----|-------------|-------------|
| FR-01 | Project Card Click | Clicking anywhere on card (except GitHub link) opens modal |
| FR-02 | Modal Structure | Header (title, badges), Tabs: Overview / Results / Architecture, Footer (GitHub link) |
| FR-03 | Results Tab | Metrics table (Accuracy, F1, Precision, Recall, ROC-AUC), Confusion Matrix image, ROC Curve image, Feature Importance chart, Training Curve chart |
| FR-04 | Overview Tab | Problem statement, approach, dataset, key results summary |
| FR-05 | Architecture Tab | High-level diagram (Mermaid or SVG), data flow, model serving |
| FR-06 | Image Assets | All images stored in `/assets/projects/<project-slug>/` (PNG/WebP, ≤ 200KB each) |
| FR-07 | Lazy Load | Modal content fetched on first open (not on page load) |
| FR-08 | URL Shareability | Hash-based deep link: `#project-waste` opens modal directly |
| FR-09 | Filter Integration | Filter buttons still work; filtered cards still open correct modal |
| FR-10 | Accessibility | ARIA roles: `dialog`, `aria-modal="true"`, `aria-labelledby`, focus trap |

---

### 7. Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| **Performance** | Modal JS < 8KB gzipped; images lazy-loaded; no blocking CSS |
| **Design** | Mindloop monochrome palette; Instrument Serif italic accents; 1px borders; teal accent only |
| **Browser** | Chrome 100+, Firefox 100+, Safari 15+, Edge 100+ |
| **Security** | No inline scripts; CSP compatible; sanitize any dynamic HTML |
| **SEO** | Project detail content indexable via JSON-LD schema (Project, SoftwareApplication) |

---

### 8. Data Model (Project Object)

```json
{
  "id": "waste-classification",
  "title": "Waste Classification with Deep Learning",
  "category": ["ml", "cv"],
  "badges": ["BDC 2026", "Deep Learning"],
  "icon": "green",
  "description": "Multi-class image classification for automated waste sorting using transfer learning (EfficientNet). End-to-end pipeline with data augmentation, fine-tuning, and competition submission.",
  "techStack": ["Python", "TensorFlow", "Transfer Learning", "Kaggle"],
  "githubUrl": "https://github.com/alkayyiss-ds/waste-classification-ml",
  "role": "AI Engineer / Data Scientist",
  "status": "Competition Project",
  "dataset": "BDC 2026 Waste Images (~10k images, 6 classes)",
  "metrics": {
    "accuracy": "94.2%",
    "f1Score": "0.938",
    "precision": "0.941",
    "recall": "0.935",
    "rocAuc": "0.987"
  },
  "assets": {
    "confusionMatrix": "assets/projects/waste-classification/confusion-matrix.png",
    "rocCurve": "assets/projects/waste-classification/roc-curve.png",
    "featureImportance": "assets/projects/waste-classification/feature-importance.png",
    "trainingCurve": "assets/projects/waste-classification/training-curve.png",
    "architecture": "assets/projects/waste-classification/architecture.svg"
  }
}
```

---

### 9. Project List (10 Featured)

| # | Project ID | Title | Category | Repo |
|---|------------|-------|----------|------|
| 1 | waste-classification | Waste Classification with Deep Learning | ml, cv | waste-classification-ml |
| 2 | traffic-forecasting | Traffic Speed Forecasting | ml | traffic-speed-forecasting |
| 3 | text-tampering | Text Tampering Detection in Financial Documents | cv, nlp | text-tampering-detection |
| 4 | wiki-prediction | Wikipedia Next-Click Prediction | nlp | wikipedia-next-click-prediction |
| 5 | prd-tiktok | AI Product Requirements Documents | pm | prd-tiktok-trend-analyzer |
| 6 | r-statistics | R Statistics Mini Projects | stats | r-statistics-mini-projects |
| 7 | neo-horcrox | Neo Horcrox Supply Chain Analytics | ml, pm | Neo-Horcrox-Project |
| 8 | interview-training | Interview Training System | ml, pm | interview-training-system |
| 9 | suaralens | SuaraLens — Citizen Complaint NLP | nlp | SuaraLens |
| 10 | project-intelligence | Project Intelligence System | ml | Project-Intelligence-System |

---

### 10. Timeline & Milestones

| Milestone | Target | Deliverable |
|-----------|--------|-------------|
| M1: Documentation & Architecture | Day 1 | prd.md, architecture.md, design-system.md, agents.md |
| M2: Asset Collection & Organization | Day 2 | `/assets/projects/` populated with 10×4 images |
| M3: Modal Component Implementation | Day 3 | Reusable modal JS + CSS (Mindloop compliant) |
| M4: Project Data Integration | Day 4 | 10 project objects in JS; HTML cards updated |
| M5: Results Tab Rendering | Day 5 | Metrics table, image gallery, responsive layout |
| M6: Deep Linking & Filter Sync | Day 6 | Hash routing, filter preservation |
| M7: Accessibility & QA | Day 7 | Keyboard nav, screen reader, mobile test |
| M8: Deploy & Verify | Day 8 | Push to GitHub Pages; Lighthouse ≥ 90 |

---

### 11. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Missing metric images for some projects | High | Medium | Use placeholder "Metrics being finalized" with notebook link |
| Modal breaks on mobile viewport | Medium | High | Test on 375px, 414px; use CSS clamp() for sizing |
| GitHub Pages cache delay | Medium | Low | Add `?v=<timestamp>` to asset URLs; verify via Actions |
| Design system drift | Low | High | Enforce via design-system.md; no new colors |

---

### 12. Acceptance Criteria

- [ ] All 10 project cards render on main page with correct badges
- [ ] Clicking card opens modal with 3 tabs (Overview, Results, Architecture)
- [ ] Results tab shows metrics table + 4 images (confusion matrix, ROC, feature importance, training curve)
- [ ] ESC closes modal; focus returns to triggering card
- [ ] Deep link `#project-<id>` opens modal on load
- [ ] Filter buttons work with modal (filtered cards open correct modal)
- [ ] Lighthouse Performance ≥ 90, Accessibility ≥ 95
- [ ] No console errors; no layout shift on modal open/close
- [ ] GitHub link in modal footer opens in new tab

---

### 13. Appendix: Asset Checklist per Project

Each project needs:
- [ ] confusion-matrix.png (600×500px)
- [ ] roc-curve.png (600×500px)
- [ ] feature-importance.png (600×500px)
- [ ] training-curve.png (600×500px)
- [ ] architecture.svg (vector, 800×600 viewBox)
- [ ] metrics.json (accuracy, f1, precision, recall, roc_auc as strings)

Total: 10 projects × 5 assets = 50 files in `/assets/projects/`