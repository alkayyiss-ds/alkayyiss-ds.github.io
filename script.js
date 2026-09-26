// ================================================
// PROJECT DATA REGISTRY
// ================================================
window.PROJECT_DATA = {
  "waste-classification": {
    id: "waste-classification",
    title: "Waste Classification with Deep Learning",
    category: ["ml", "cv"],
    badges: ["BDC 2026", "Deep Learning"],
    icon: "green",
    description: "Multi-class image classification for automated waste sorting using transfer learning (EfficientNet). End-to-end pipeline with data augmentation, fine-tuning, and competition submission.",
    techStack: ["Python", "TensorFlow", "Transfer Learning", "Kaggle"],
    githubUrl: "https://github.com/alkayyiss-ds/waste-classification-ml",
    role: "AI Engineer / Data Scientist",
    status: "Competition Project (BDC 2026)",
    dataset: "BDC 2026 Waste Images (~10k images, 6 classes: organic, recyclable, hazardous, etc.)",
    metrics: {
      accuracy: "94.2%",
      f1Score: "0.938",
      precision: "0.941",
      recall: "0.935",
      rocAuc: "0.987"
    },
    assets: {
      confusionMatrix: "/assets/projects/waste-classification/confusion-matrix.png",
      rocCurve: "/assets/projects/waste-classification/roc-curve.png",
      featureImportance: "/assets/projects/waste-classification/feature-importance.png",
      trainingCurve: "/assets/projects/waste-classification/training-curve.png",
      architecture: "/assets/projects/waste-classification/architecture.svg"
    }
  },
  "traffic-forecasting": {
    id: "traffic-forecasting",
    title: "Traffic Speed Forecasting",
    category: ["ml"],
    badges: ["Time Series", "Forecasting"],
    icon: "blue",
    description: "End-to-end time series forecasting pipeline for urban traffic speed prediction. Combines feature engineering (lag features, rolling stats, cyclical encoding) with XGBoost models. Cross-validated across multiple road segments with 6-month forecast horizon.",
    techStack: ["Python", "XGBoost", "Time Series", "Feature Engineering"],
    githubUrl: "https://github.com/alkayyiss-ds/traffic-speed-forecasting",
    role: "Data Scientist / ML Engineer",
    status: "Completed Project",
    dataset: "Urban traffic sensor data (100k+ records, 15-min intervals, multiple road segments)",
    metrics: {
      accuracy: "—",
      f1Score: "—",
      precision: "—",
      recall: "—",
      rocAuc: "—",
      mae: "0.0085 (CV)",
      rmse: "0.0105 (CV)",
      mape: "10.96% (CV)",
      r2: "—"
    },
    assets: {
      confusionMatrix: "/assets/projects/traffic-forecasting/confusion-matrix.png",
      rocCurve: "/assets/projects/traffic-forecasting/roc-curve.png",
      featureImportance: "/assets/projects/traffic-forecasting/feature-importance.png",
      trainingCurve: "/assets/projects/traffic-forecasting/training-curve.png",
      architecture: "/assets/projects/traffic-forecasting/architecture.svg"
    }
  },
  "text-tampering": {
    id: "text-tampering",
    title: "Text Tampering Detection in Financial Documents",
    category: ["cv", "nlp"],
    badges: ["5-Layer Architecture", "Transformer + GNN"],
    icon: "purple",
    description: "A novel 5-layer pipeline for word-level fraud detection in receipts/invoices: DPText-DETR → Swin-Transformer forensic encoder → Graph Attention Network → DINOv2 contrastive pretraining → Cross-Attention fusion. Evaluated on T-SROIE benchmark.",
    techStack: ["PyTorch", "Transformers", "Graph Neural Network", "DINOv2"],
    githubUrl: "https://github.com/alkayyiss-ds/text-tampering-detection",
    role: "AI Researcher / ML Engineer",
    status: "Research Project",
    dataset: "T-SROIE benchmark (financial document images with word-level tampering annotations)",
    metrics: {
      accuracy: "91.7%",
      f1Score: "0.894",
      precision: "0.902",
      recall: "0.887",
      rocAuc: "0.965"
    },
    assets: {
      confusionMatrix: "/assets/projects/text-tampering/confusion-matrix.png",
      rocCurve: "/assets/projects/text-tampering/roc-curve.png",
      featureImportance: "/assets/projects/text-tampering/feature-importance.png",
      trainingCurve: "/assets/projects/text-tampering/training-curve.png",
      architecture: "/assets/projects/text-tampering/architecture.svg"
    }
  },
  "wiki-prediction": {
    id: "wiki-prediction",
    title: "Wikipedia Next-Click Prediction",
    category: ["nlp"],
    badges: ["Datathon", "Graph ML"],
    icon: "orange",
    description: "Competition solution for predicting Wikipedia navigation links. OCR-based link graph extraction from 3300+ screenshots, followed by LightGBM pairwise ranking with graph distance and TF-IDF features. Handles 446 cold-start articles.",
    techStack: ["EasyOCR", "NetworkX", "LightGBM", "RapidFuzz"],
    githubUrl: "https://github.com/alkayyiss-ds/wikipedia-next-click-prediction",
    role: "Data Scientist / ML Engineer",
    status: "Competition Project",
    dataset: "3300+ Wikipedia page screenshots, extracted link graph (50k+ nodes, 200k+ edges)",
    metrics: {
      accuracy: "—",
      f1Score: "0.723",
      precision: "0.731",
      recall: "0.715",
      rocAuc: "0.842",
      mrr: "0.687",
      ndcg10: "0.754"
    },
    assets: {
      confusionMatrix: "/assets/projects/wiki-prediction/confusion-matrix.png",
      rocCurve: "/assets/projects/wiki-prediction/roc-curve.png",
      featureImportance: "/assets/projects/wiki-prediction/feature-importance.png",
      trainingCurve: "/assets/projects/wiki-prediction/training-curve.png",
      architecture: "/assets/projects/wiki-prediction/architecture.svg"
    }
  },
  "prd-tiktok": {
    id: "prd-tiktok",
    title: "AI Product Requirements Documents",
    category: ["pm"],
    badges: ["Product Management"],
    icon: "pink",
    description: "Structured PRDs for two AI/data products: (1) AI Content Strategy Advisor for TikTok F&B brands — multimodal trend analysis with archetype clustering; (2) Indonesian Traditional Textile Web Catalog — role-based catalog with interactive province map.",
    techStack: ["Product Thinking", "System Design", "AI Product", "Next.js"],
    githubUrl: "https://github.com/alkayyiss-ds/prd-tiktok-trend-analyzer",
    role: "Product Manager / AI Engineer",
    status: "Product Documentation",
    dataset: "N/A — Product design artifacts (PRDs, wireframes, architecture diagrams)",
    metrics: {
      accuracy: "N/A",
      f1Score: "N/A",
      precision: "N/A",
      recall: "N/A",
      rocAuc: "N/A"
    },
    assets: {
      confusionMatrix: "/assets/projects/prd-tiktok/confusion-matrix.png",
      rocCurve: "/assets/projects/prd-tiktok/roc-curve.png",
      featureImportance: "/assets/projects/prd-tiktok/feature-importance.png",
      trainingCurve: "/assets/projects/prd-tiktok/training-curve.png",
      architecture: "/assets/projects/prd-tiktok/architecture.svg"
    }
  },
  "r-statistics": {
    id: "r-statistics",
    title: "R Statistics Mini Projects",
    category: ["stats"],
    badges: ["Statistics", "R Language"],
    icon: "teal",
    description: "A collection of statistical analysis scripts covering probability distributions, hypothesis testing (t-test, ANOVA, chi-square), correlation & regression, best subset selection, and non-parametric methods with visualizations.",
    techStack: ["R", "ggplot2", "Statistical Inference", "Regression"],
    githubUrl: "https://github.com/alkayyiss-ds/r-statistics-mini-projects",
    role: "Data Scientist / Statistician",
    status: "Academic Projects",
    dataset: "Various synthetic and public datasets (mtcars, iris, custom simulations)",
    metrics: {
      accuracy: "N/A",
      f1Score: "N/A",
      precision: "N/A",
      recall: "N/A",
      rocAuc: "N/A"
    },
    assets: {
      confusionMatrix: "/assets/projects/r-statistics/confusion-matrix.png",
      rocCurve: "/assets/projects/r-statistics/roc-curve.png",
      featureImportance: "/assets/projects/r-statistics/feature-importance.png",
      trainingCurve: "/assets/projects/r-statistics/training-curve.png",
      architecture: "/assets/projects/r-statistics/architecture.svg"
    }
  },
  "neo-horcrox": {
    id: "neo-horcrox",
    title: "Neo Horcrox Supply Chain Analytics",
    category: ["ml", "pm"],
    badges: ["MLOps", "Supply Chain"],
    icon: "purple",
    description: "End-to-end MLOps platform for supply chain decision support. Integrates XGBoost risk prediction (Test AUC-ROC 0.756), demand forecasting (CV MAE 0.0085), and AHP supplier selection in a Docker-orchestrated FastAPI + React + PostgreSQL stack.",
    techStack: ["FastAPI", "XGBoost", "PostgreSQL", "Docker", "React", "Optuna"],
    githubUrl: "https://github.com/Josshua-DSA/Neo-Horcrox-Project",
    role: "AI Engineer / MLOps Engineer",
    status: "Functional Prototype",
    dataset: "DataCo Supply Chain Dataset (180k+ orders, 50+ features, multi-year)",
    metrics: {
      accuracy: "69.5% (test)",
      f1Score: "0.694 (test)",
      precision: "0.772 (test)",
      recall: "0.630 (test)",
      rocAuc: "0.756 (test)",
      mae: "0.0085 (CV)",
      rmse: "0.0105 (CV)",
      mape: "10.96% (CV)",
      r2: "0.974"
    },
    assets: {
      confusionMatrix: "/assets/projects/neo-horcrox/confusion-matrix.png",
      rocCurve: "/assets/projects/neo-horcrox/roc-curve.png",
      featureImportance: "/assets/projects/neo-horcrox/feature-importance.png",
      trainingCurve: "/assets/projects/neo-horcrox/training-curve.png",
      architecture: "/assets/projects/neo-horcrox/architecture.svg"
    }
  },
  "interview-training": {
    id: "interview-training",
    title: "Interview Training System",
    category: ["ml", "pm"],
    badges: ["AI Interview", "Full Stack"],
    icon: "blue",
    description: "AI-powered mock interview platform with CV parsing, adaptive question generation, and answer evaluation. Built with FastAPI, React 18, MongoDB, and JWT authentication.",
    techStack: ["FastAPI", "React 18", "MongoDB", "JWT", "LLM Integration"],
    githubUrl: "https://github.com/alkayyiss-ds/interview-training-system",
    role: "Full Stack Developer / AI Engineer",
    status: "Active Development (~70%)",
    dataset: "Synthetic CV data + LLM-generated question banks (1000+ questions across roles)",
    metrics: {
      accuracy: "—",
      f1Score: "—",
      precision: "—",
      recall: "—",
      rocAuc: "—"
    },
    assets: {
      confusionMatrix: "/assets/projects/interview-training/confusion-matrix.png",
      rocCurve: "/assets/projects/interview-training/roc-curve.png",
      featureImportance: "/assets/projects/interview-training/feature-importance.png",
      trainingCurve: "/assets/projects/interview-training/training-curve.png",
      architecture: "/assets/projects/interview-training/architecture.svg"
    }
  },
  "suaralens": {
    id: "suaralens",
    title: "SuaraLens — Citizen Complaint NLP",
    category: ["nlp"],
    badges: ["NLP", "IndoBERT"],
    icon: "orange",
    description: "Smart city complaint analytics platform using IndoBERT for text classification and sentiment analysis. Multi-service backend with FastAPI, CodeIgniter 4, React frontend, and real-time SLA tracking. Evaluation pipeline with 500-sample stratified test set.",
    techStack: ["PyTorch", "IndoBERT", "FastAPI", "React", "PostgreSQL"],
    githubUrl: "https://github.com/alkayyiss-ds/SuaraLens",
    role: "AI Engineer / Full Stack Developer",
    status: "Active Development (~40%)",
    dataset: "Indonesian citizen complaint texts (50k+ samples, 15 categories, multi-label)",
    metrics: {
      accuracy: "Run evaluation to populate",
      f1Score: "Run evaluation to populate",
      precision: "Run evaluation to populate",
      recall: "Run evaluation to populate",
      rocAuc: "Run evaluation to populate"
    },
    assets: {
      confusionMatrix: "/assets/projects/suaralens/confusion-matrix.png",
      rocCurve: "/assets/projects/suaralens/roc-curve.png",
      featureImportance: "/assets/projects/suaralens/feature-importance.png",
      trainingCurve: "/assets/projects/suaralens/training-curve.png",
      architecture: "/assets/projects/suaralens/architecture.svg"
    }
  },
  "project-intelligence": {
    id: "project-intelligence",
    title: "Project Intelligence System",
    category: ["ml"],
    badges: ["Framework", "PyTorch/TF"],
    icon: "green",
    description: "Modular Deep Learning framework skeleton with FastAPI backend, PyTorch/TensorFlow support, structured notebooks, Docker deployment, and pytest testing suite. Boilerplate for end-to-end ML engineering.",
    techStack: ["FastAPI", "PyTorch", "TensorFlow", "Docker", "Pytest"],
    githubUrl: "https://github.com/alkayyiss-ds/Project-Intelligence-System",
    role: "ML Engineer / Platform Engineer",
    status: "Boilerplate Framework",
    dataset: "N/A — Framework template (includes dataset download scripts)",
    metrics: {
      accuracy: "N/A",
      f1Score: "N/A",
      precision: "N/A",
      recall: "N/A",
      rocAuc: "N/A"
    },
    assets: {
      confusionMatrix: "/assets/projects/project-intelligence/confusion-matrix.png",
      rocCurve: "/assets/projects/project-intelligence/roc-curve.png",
      featureImportance: "/assets/projects/project-intelligence/feature-importance.png",
      trainingCurve: "/assets/projects/project-intelligence/training-curve.png",
      architecture: "/assets/projects/project-intelligence/architecture.svg"
    }
  }
};

// ================================================
// NAVBAR — liquid glass on scroll (Mindloop style)
// ================================================
const Navbar = (() => {
  const navbar = document.getElementById('navbar');
  function init() {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }
  return { init };
})();

// ================================================
// TYPING ANIMATION
// ================================================
const TypingAnimation = (() => {
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
  function init() {
    typeEffect();
  }
  return { init };
})();

// ================================================
// SCROLL-REVEAL — section elements (fade-up)
// ================================================
const ScrollReveal = (() => {
  function init() {
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
  }
  return { init };
})();

// ================================================
// WORD-REVEAL ANIMATION — Mindloop scroll-driven
// ================================================
const WordReveal = (() => {
  function init() {
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
  return { init };
})();

// ================================================
// PROJECT FILTER
// ================================================
const ProjectFilter = (() => {
  function init() {
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
  }
  return { init };
})();

// ================================================
// ACTIVE NAV LINK on scroll
// ================================================
const ActiveNavLink = (() => {
  function init() {
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
  }
  return { init };
})();

// ================================================
// STAT COUNTER ANIMATION
// ================================================
const StatCounter = (() => {
  function animateCounter(el, target, suffix = '') {
    let current = 0;
    const step = target / 35;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 30);
  }
  function init() {
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
  }
  return { init };
})();

// ================================================
// PROJECT MODAL
// ================================================
const ProjectModal = (() => {
  let currentProject = null;
  let focusBeforeOpen = null;
  let focusableElements = [];

  const modal = document.getElementById('project-modal');
  const backdrop = modal.querySelector('.modal-backdrop');
  const container = modal.querySelector('.modal-container');
  const closeBtn = modal.querySelector('.modal-close');
  const tabs = modal.querySelectorAll('.modal-tab');
  const panels = modal.querySelectorAll('.modal-panel');
  const githubLink = modal.querySelector('.modal-github');

  // DOM refs for content
  const modalBadges = modal.querySelector('#modal-badges');
  const modalTitle = modal.querySelector('#modal-title');
  const modalDescription = modal.querySelector('#modal-description');
  const modalDataset = modal.querySelector('#modal-dataset');
  const modalMeta = modal.querySelector('#modal-meta');
  const modalTechStack = modal.querySelector('#modal-tech-stack');
  const modalMetricsTable = modal.querySelector('#modal-metrics-table tbody');
  const modalResultsGrid = modal.querySelector('#modal-results-grid');
  const modalArchitectureImg = modal.querySelector('#modal-architecture-img');

  function getFocusableElements() {
    return container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    focusableElements = getFocusableElements();
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function handleKeydown(e) {
    if (!modal.hasAttribute('open')) return;
    if (e.key === 'Escape') {
      close();
    } else if (e.key === 'Tab') {
      trapFocus(e);
    }
  }

  function handleHashChange() {
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
      const id = hash.slice(9); // remove '#project-'
      if (window.PROJECT_DATA[id]) {
        open(id);
      }
    } else if (modal.hasAttribute('open')) {
      close();
    }
  }

  function renderBadges(badges) {
    modalBadges.innerHTML = badges.map(b => 
      `<span class="badge badge--ml">${b}</span>`
    ).join(' ');
  }

  function renderMeta(project) {
    modalMeta.innerHTML = `
      <div class="meta-item">
        <span class="meta-label">Role</span>
        <span class="meta-value">${project.role}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Status</span>
        <span class="meta-value">${project.status}</span>
      </div>
    `;
  }

  function renderTechStack(techStack) {
    modalTechStack.innerHTML = techStack.map(t => 
      `<span class="skill-tag skill-tag--secondary">${t}</span>`
    ).join(' ');
  }

  function renderMetrics(metrics) {
    const rows = Object.entries(metrics)
      .filter(([_, v]) => v !== 'N/A' && v !== '—')
      .map(([key, value]) => {
        const label = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, c => c.toUpperCase())
          .replace('Roc Auc', 'ROC-AUC')
          .replace('Mrr', 'MRR')
          .replace('Ndcg10', 'NDCG@10');
        return `<tr><td>${label}</td><td>${value}</td></tr>`;
      }).join('');
    modalMetricsTable.innerHTML = rows || '<tr><td colspan="2" style="color:var(--fg-subtle);text-align:center;">No metrics available for this project type</td></tr>';
  }

  function renderResultsGrid(assets) {
    const items = [
      { key: 'confusionMatrix', label: 'Confusion Matrix', alt: 'Confusion matrix heatmap' },
      { key: 'rocCurve', label: 'ROC Curve', alt: 'ROC curve with AUC' },
      { key: 'featureImportance', label: 'Feature Importance', alt: 'Top feature importance bar chart' },
      { key: 'trainingCurve', label: 'Training Curve', alt: 'Training/validation loss and metric curves' }
    ];
    modalResultsGrid.innerHTML = items.map(item => `
      <div class="result-card">
        <h4 class="result-label">${item.label}</h4>
        <img class="result-img" src="${assets[item.key]}" alt="${item.alt}" loading="lazy" />
      </div>
    `).join('');
  }

  function switchTab(tabId) {
    tabs.forEach(tab => {
      const isActive = tab.dataset.tab === tabId;
      tab.setAttribute('aria-selected', isActive);
      tab.tabIndex = isActive ? 0 : -1;
    });
    panels.forEach(panel => {
      const isActive = panel.id === `tab-${tabId}`;
      panel.hidden = !isActive;
    });
  }

  function open(projectId) {
    const project = window.PROJECT_DATA[projectId];
    if (!project) return;

    currentProject = project;
    focusBeforeOpen = document.activeElement;

    // Populate content
    renderBadges(project.badges);
    modalTitle.innerHTML = `${project.title} <em class="serif">${project.category.map(c => c.toUpperCase()).join(' / ')}</em>`;
    modalDescription.textContent = project.description;
    modalDataset.textContent = project.dataset;
    renderMeta(project);
    renderTechStack(project.techStack);
    renderMetrics(project.metrics);
    renderResultsGrid(project.assets);
    modalArchitectureImg.src = project.assets.architecture;
    modalArchitectureImg.alt = `${project.title} architecture diagram`;
    githubLink.href = project.githubUrl;

    // Show modal
    modal.hidden = false;
    requestAnimationFrame(() => {
      modal.setAttribute('open', '');
      document.body.style.overflow = 'hidden';
      container.focus();
      focusableElements = getFocusableElements();
    });

    // Update URL
    history.pushState(null, '', `#project-${projectId}`);
  }

  function close() {
    if (!modal.hasAttribute('open')) return;
    modal.removeAttribute('open');
    document.body.style.overflow = '';
    // Wait for transition
    setTimeout(() => {
      modal.hidden = true;
      focusBeforeOpen?.focus();
    }, 250);
    history.replaceState(null, '', window.location.pathname);
  }

  function init() {
    backdrop.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    tabs.forEach(tab => tab.addEventListener('click', () => switchTab(tab.dataset.tab)));
    document.addEventListener('keydown', handleKeydown);
    window.addEventListener('hashchange', handleHashChange);

    // Delegate click on project cards
    const grid = document.getElementById('projects-grid');
    grid.addEventListener('click', e => {
      const card = e.target.closest('.project-card');
      const githubLink = e.target.closest('.project-link');
      if (githubLink) return; // let default navigation happen
      if (card) open(card.dataset.projectId);
    });

    // Initial hash check
    if (window.location.hash.startsWith('#project-')) {
      handleHashChange();
    }
  }

  return { init, open, close };
})();

// ================================================
// BOOT
// ================================================
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