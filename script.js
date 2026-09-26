// ============================================================
// PROJECT DATA REGISTRY
// ============================================================
window.PROJECT_DATA = {
  "waste-classification": {
    id: "waste-classification",
    title: "Waste Classification with Deep Learning",
    category: ["ml", "cv"],
    badges: ["BDC 2026", "Deep Learning"],
    icon: "green",
    description: "Multi-class image classification for automated waste sorting using transfer learning (EfficientNet). End-to-end pipeline with data augmentation, fine-tuning, and competition submission.",
    techStack: ["Python", "TensorFlow", "Transfer Learning", "Data Augmentation"],
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
      confusionMatrix: "assets/projects/waste-classification/confusion-matrix.svg",
      rocCurve: "assets/projects/waste-classification/roc-curve.svg",
      featureImportance: "assets/projects/waste-classification/feature-importance.svg",
      trainingCurve: "assets/projects/waste-classification/training-curve.svg",
      architecture: "assets/projects/waste-classification/architecture.svg"
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
      confusionMatrix: "assets/projects/traffic-forecasting/confusion-matrix.svg",
      rocCurve: "assets/projects/traffic-forecasting/roc-curve.svg",
      featureImportance: "assets/projects/traffic-forecasting/feature-importance.svg",
      trainingCurve: "assets/projects/traffic-forecasting/training-curve.svg",
      architecture: "assets/projects/traffic-forecasting/architecture.svg"
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
      confusionMatrix: "assets/projects/text-tampering/confusion-matrix.svg",
      rocCurve: "assets/projects/text-tampering/roc-curve.svg",
      featureImportance: "assets/projects/text-tampering/feature-importance.svg",
      trainingCurve: "assets/projects/text-tampering/training-curve.svg",
      architecture: "assets/projects/text-tampering/architecture.svg"
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
      confusionMatrix: "assets/projects/wiki-prediction/confusion-matrix.svg",
      rocCurve: "assets/projects/wiki-prediction/roc-curve.svg",
      featureImportance: "assets/projects/wiki-prediction/feature-importance.svg",
      trainingCurve: "assets/projects/wiki-prediction/training-curve.svg",
      architecture: "assets/projects/wiki-prediction/architecture.svg"
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
      confusionMatrix: "assets/projects/prd-tiktok/confusion-matrix.svg",
      rocCurve: "assets/projects/prd-tiktok/roc-curve.svg",
      featureImportance: "assets/projects/prd-tiktok/feature-importance.svg",
      trainingCurve: "assets/projects/prd-tiktok/training-curve.svg",
      architecture: "assets/projects/prd-tiktok/architecture.svg"
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
      confusionMatrix: "assets/projects/r-statistics/confusion-matrix.svg",
      rocCurve: "assets/projects/r-statistics/roc-curve.svg",
      featureImportance: "assets/projects/r-statistics/feature-importance.svg",
      trainingCurve: "assets/projects/r-statistics/training-curve.svg",
      architecture: "assets/projects/r-statistics/architecture.svg"
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
      confusionMatrix: "assets/projects/neo-horcrox/confusion-matrix.svg",
      rocCurve: "assets/projects/neo-horcrox/roc-curve.svg",
      featureImportance: "assets/projects/neo-horcrox/feature-importance.svg",
      trainingCurve: "assets/projects/neo-horcrox/training-curve.svg",
      architecture: "assets/projects/neo-horcrox/architecture.svg"
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
      confusionMatrix: "assets/projects/interview-training/confusion-matrix.svg",
      rocCurve: "assets/projects/interview-training/roc-curve.svg",
      featureImportance: "assets/projects/interview-training/feature-importance.svg",
      trainingCurve: "assets/projects/interview-training/training-curve.svg",
      architecture: "assets/projects/interview-training/architecture.svg"
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
      confusionMatrix: "assets/projects/suaralens/confusion-matrix.svg",
      rocCurve: "assets/projects/suaralens/roc-curve.svg",
      featureImportance: "assets/projects/suaralens/feature-importance.svg",
      trainingCurve: "assets/projects/suaralens/training-curve.svg",
      architecture: "assets/projects/suaralens/architecture.svg"
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
      confusionMatrix: "assets/projects/project-intelligence/confusion-matrix.svg",
      rocCurve: "assets/projects/project-intelligence/roc-curve.svg",
      featureImportance: "assets/projects/project-intelligence/feature-importance.svg",
      trainingCurve: "assets/projects/project-intelligence/training-curve.svg",
      architecture: "assets/projects/project-intelligence/architecture.svg"
    }
  },
  "collaborative-filtering": {
    id: "collaborative-filtering",
    title: "Collaborative Filtering Recommender",
    category: ["ml", "nlp"],
    badges: ["Recommender", "Matrix Factorization"],
    icon: "orange",
    description: "Movie recommendation system using collaborative filtering with matrix factorization (SVD/ALS). Implements user-based and item-based approaches with implicit feedback handling.",
    techStack: ["Python", "Surprise", "Implicit", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/alkayyiss-ds/collaborative-filtering-recommender",
    role: "Data Scientist / ML Engineer",
    status: "Completed Project",
    dataset: "MovieLens dataset (100k-20M ratings, user-item interactions)",
    metrics: {
      accuracy: "—",
      f1Score: "—",
      precision: "0.723",
      recall: "0.687",
      rocAuc: "—",
      rmse: "0.892",
      mae: "0.691",
      coverage: "94.2%"
    },
    assets: {
      confusionMatrix: "assets/projects/collaborative-filtering/confusion-matrix.svg",
      rocCurve: "assets/projects/collaborative-filtering/roc-curve.svg",
      featureImportance: "assets/projects/collaborative-filtering/feature-importance.svg",
      trainingCurve: "assets/projects/collaborative-filtering/training-curve.svg",
      architecture: "assets/projects/collaborative-filtering/architecture.svg"
    }
  },
  "ml-pipeline": {
    id: "ml-pipeline",
    title: "ML Pipeline Framework",
    category: ["ml"],
    badges: ["Framework", "MLOps"],
    icon: "green",
    description: "Modular end-to-end ML pipeline template with FastAPI backend, PyTorch/TensorFlow support, structured notebooks, Docker deployment, and pytest testing suite.",
    techStack: ["FastAPI", "PyTorch", "TensorFlow", "Docker", "Pytest"],
    githubUrl: "https://github.com/alkayyiss-ds/ml-pipeline-framework",
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
      confusionMatrix: "assets/projects/ml-pipeline/confusion-matrix.svg",
      rocCurve: "assets/projects/ml-pipeline/roc-curve.svg",
      featureImportance: "assets/projects/ml-pipeline/feature-importance.svg",
      trainingCurve: "assets/projects/ml-pipeline/training-curve.svg",
      architecture: "assets/projects/ml-pipeline/architecture.svg"
    }
  }
};

// Skill categories
window.SKILL_DATA = [
  {
    title: "Machine Learning",
    count: 8,
    tags: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LightGBM", "Optuna", "MLflow", "Hugging Face"]
  },
  {
    title: "Computer Vision",
    count: 5,
    tags: ["OpenCV", "EfficientNet", "Swin Transformer", "DINOv2", "YOLO", "Segmentation", "Detection"]
  },
  {
    title: "Natural Language Processing",
    count: 6,
    tags: ["Transformers", "BERT/IndoBERT", "LLMs", "RAG", "Tokenizers", "spaCy", "Sentence Transformers"]
  },
  {
    title: "MLOps & Engineering",
    count: 7,
    tags: ["FastAPI", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "GitHub Actions", "DVC"]
  },
  {
    title: "Data & Analytics",
    count: 6,
    tags: ["Pandas", "Polars", "SQL", "Time Series", "Statistical Inference", "A/B Testing", "Causal Inference"]
  },
  {
    title: "Product & Tools",
    count: 5,
    tags: ["Product Strategy", "System Design", "Next.js", "React", "Figma", "Notion", "Jira"]
  }
];

// ============================================================
// UTILITIES
// ============================================================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function createElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function formatCategory(cat) {
  const map = { ml: 'ML', cv: 'CV', nlp: 'NLP', pm: 'Product', stats: 'Stats' };
  return cat.map(c => map[c] || c.toUpperCase()).join(' / ');
}

function getBadgeClass(category) {
  const map = { ml: 'badge--ml', cv: 'badge--cv', nlp: 'badge--nlp', pm: 'badge--pm', stats: 'badge--stats' };
  return map[category] || 'badge--ml';
}

// ============================================================
// PROJECT RENDERER
// ============================================================
const ProjectRenderer = (() => {
  const grid = $('#projects-grid');

  function getPlaceholderSvg(title) {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%23F5F5F5' width='400' height='250'/%3E%3Crect fill='%2300B4D8' width='400' height='2' opacity='0.4'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='14' font-weight='500' fill='%23737373'%3E${encodeURIComponent(title)}%3C/text%3E%3C/svg%3E`;
  }

  function renderCard(project) {
    const cats = project.category.join(' ');
    const badgeHtml = project.badges.map(b => `<span class="badge ${getBadgeClass(project.category[0])}">${b}</span>`).join('');
    const techHtml = project.techStack.slice(0, 4).map(t => `<span class="skill-tag">${t}</span>`).join('');
    const placeholderSrc = getPlaceholderSvg(project.title);

    return `
      <article class="project-card card card--interactive reveal" data-category="${cats}" data-project-id="${project.id}" role="listitem" tabindex="0" aria-label="${project.title}">
        <div class="project-card__media">
          <img src="${placeholderSrc}" alt="${project.title} preview" loading="lazy" width="400" height="250">
          <div class="project-card__badges">${badgeHtml}</div>
        </div>
        <div class="project-card__content">
          <span class="project-card__category">${formatCategory(project.category)}</span>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__footer">
            <div class="project-card__tech">${techHtml}${project.techStack.length > 4 ? `<span class="skill-tag">+${project.techStack.length - 4} more</span>` : ''}</div>
            <a href="${project.githubUrl}" target="_blank" rel="noopener" class="project-card__link project-link" aria-label="View ${project.title} on GitHub">
              <span>Code</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  function init() {
    if (!grid) return;
    const projects = Object.values(window.PROJECT_DATA);
    grid.innerHTML = projects.map(renderCard).join('');

    // Add stagger delays
    $$('.project-card', grid).forEach((card, i) => {
      card.style.transitionDelay = `${i * 60}ms`;
      card.classList.add(`reveal-delay-${Math.min(i + 1, 6)}`);
    });
  }

  return { init };
})();

// ============================================================
// SKILL RENDERER
// ============================================================
const SkillRenderer = (() => {
  const grid = $('#skills-grid');

  function renderCategory(skill, index) {
    const tagsHtml = skill.tags.map(t => `<span class="skill-tag">${t}</span>`).join('');
    return `
      <article class="skill-category card reveal reveal-delay-${Math.min(index + 1, 6)}" role="listitem" style="transition-delay: ${index * 60}ms">
        <header class="skill-category__header">
          <h3 class="skill-category__title">${skill.title}</h3>
          <span class="skill-category__count">${skill.count} technologies</span>
        </header>
        <div class="skill-category__tags">${tagsHtml}</div>
      </article>
    `;
  }

  function init() {
    if (!grid) return;
    grid.innerHTML = window.SKILL_DATA.map(renderCategory).join('');
  }

  return { init };
})();

// ============================================================
// NAVBAR — liquid glass on scroll
// ============================================================
const Navbar = (() => {
  const navbar = $('#navbar');
  function init() {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }
  return { init };
})();

// ============================================================
// TYPING ANIMATION
// ============================================================
const TypingAnimation = (() => {
  const typingText = $('#typing-text');
  const phrases = [
    'Data Science Student',
    'Machine Learning Engineer',
    'AI System Developer',
    'MLOps Practitioner',
    'Applied AI Researcher',
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function typeEffect() {
    if (!typingText) return;
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
    if (typingText) typeEffect();
  }
  return { init };
})();

// ============================================================
// SCROLL-REVEAL
// ============================================================
const ScrollReveal = (() => {
  function init() {
    const revealEls = $$('.reveal');
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

// ============================================================
// WORD-REVEAL ANIMATION
// ============================================================
const WordReveal = (() => {
  function init() {
    $$('.word-reveal p').forEach(para => {
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
    $$('.word-reveal p').forEach(p => wordObserver.observe(p));
  }
  return { init };
})();

// ============================================================
// PROJECT FILTER
// ============================================================
const ProjectFilter = (() => {
  function init() {
    const filterBtns = $$('.filter-btn');
    const projectCards = $$('.project-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const filter = btn.dataset.filter;
        projectCards.forEach((card, i) => {
          const cats = card.dataset.category || '';
          if (filter === 'all' || cats.includes(filter)) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeUp 0.4s ease both';
            card.style.transitionDelay = `${i * 30}ms`;
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }
  return { init };
})();

// ============================================================
// ACTIVE NAV LINK on scroll
// ============================================================
const ActiveNavLink = (() => {
  function init() {
    const sections = $$('section[id]');
    const navLinks = $$('.nav__link');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === '#' + entry.target.id;
            link.classList.toggle('active', isActive);
          });
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => sectionObserver.observe(s));
  }
  return { init };
})();

// ============================================================
// STAT COUNTER ANIMATION
// ============================================================
const StatCounter = (() => {
  function animateCounter(el, target, suffix = '') {
    let current = 0;
    const duration = 1000;
    const steps = 25;
    const stepTime = duration / steps;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current) + suffix;
      }
    }, stepTime);
  }

  function init() {
    const heroStats = $('.hero__stats');
    if (!heroStats) return;

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.stat-num').forEach(num => {
            const target = parseInt(num.dataset.target || num.textContent, 10);
            const suffix = num.dataset.suffix || (num.textContent.includes('+') ? '+' : '');
            if (!isNaN(target) && target > 0) {
              animateCounter(num, target, suffix);
            }
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    statsObserver.observe(heroStats);
  }
  return { init };
})();

// ============================================================
// PROJECT DETAIL
// ============================================================
const ProjectDetail = (() => {
  let focusBefore = null;

  // DOM refs
  const detail = $('#project-detail');
  const closeBtn = $('.detail-close');
  const titleEl = $('#detail-title');
  const badgesEl = $('#detail-badges');
  const descriptionEl = $('#detail-description');
  const datasetEl = $('#detail-dataset');
  const metaEl = $('#detail-meta');
  const techEl = $('#detail-tech');
  const metricsTable = $('#detail-metrics-table');
  const resultsGrid = $('#detail-results-grid');
  const archImg = $('#detail-architecture-img');
  const githubLink = $('#detail-github');

  function render(project) {
    titleEl.innerHTML = `${project.title} <em class="serif">${formatCategory(project.category)}</em>`;
    badgesEl.innerHTML = project.badges.map(b => `<span class="badge badge--ml">${b}</span>`).join(' ');
    descriptionEl.textContent = project.description;
    datasetEl.textContent = project.dataset;
    metaEl.innerHTML = `
      <div class="meta-item"><span class="meta-label">Role</span><span class="meta-value">${project.role}</span></div>
      <div class="meta-item"><span class="meta-label">Status</span><span class="meta-value">${project.status}</span></div>
    `;
    techEl.innerHTML = project.techStack.map(t => `<span class="skill-tag skill-tag--secondary">${t}</span>`).join(' ');
    const rows = Object.entries(project.metrics||{})
      .filter(([k,v]) => v !== 'N/A' && v !== '—')
      .map(([k,v]) => {
        const label = k.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase())
          .replace('Roc Auc','ROC-AUC').replace('Mrr','MRR').replace('Ndcg10','NDCG@10');
        return `<tr><td>${label}</td><td>${v}</td></tr>`;
      }).join('');
    metricsTable.innerHTML = rows || `<tr><td colspan="2" style="text-align:center;color:var(--color-fg-subtle);">No metrics</td></tr>`;
    const items = [
      {key:'confusionMatrix',label:'Confusion Matrix',alt:'Confusion matrix heatmap'},
      {key:'rocCurve',label:'ROC Curve',alt:'ROC curve with AUC'},
      {key:'featureImportance',label:'Feature Importance',alt:'Top feature importance bar chart'},
      {key:'trainingCurve',label:'Training Curve',alt:'Training/validation loss and metric curves'}
    ];
    resultsGrid.innerHTML = items.map(i => `
      <div class="result-card">
        <h4 class="result-label">${i.label}</h4>
        <img class="result-img" src="${project.assets[i.key]}" alt="${i.alt}" loading="lazy" />
      </div>`).join('');
    archImg.src = project.assets.architecture;
    archImg.alt = `${project.title} architecture diagram`;
    githubLink.href = project.githubUrl;
  }

  function open(projectId) {
    const project = window.PROJECT_DATA[projectId];
    if (!project) return;
    render(project);
    focusBefore = document.activeElement;
    detail.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    history.pushState(null, '', `#project-${projectId}`);
  }

  function close() {
    detail.classList.add('hidden');
    document.body.style.overflow = '';
    if (focusBefore) focusBefore.focus();
    history.replaceState(null, '', window.location.pathname);
  }

  function handleKey(e) {
    if (e.key === 'Escape') close();
  }

  function handleHash() {
    const h = window.location.hash;
    if (h.startsWith('#project-')) {
      open(h.slice(9));
    } else {
      close();
    }
  }

  function init() {
    if (!detail) return;
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', handleKey);
    window.addEventListener('hashchange', handleHash);
    const grid = $('#projects-grid');
    if (grid) {
      grid.addEventListener('click', e => {
        const card = e.target.closest('.project-card');
        const gh = e.target.closest('.project-link');
        if (gh) return;
        if (card) open(card.dataset.projectId);
      });
      grid.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          const card = e.target.closest('.project-card');
          if (card) { e.preventDefault(); open(card.dataset.projectId); }
        }
      });
    }
    if (window.location.hash.startsWith('#project-')) handleHash();
  }

  return {init, open, close};
})();

// ============================================================
// CONTACT FORM
// ============================================================
const ContactForm = (() => {
  const form = $('#contact-form');
  function init() {
    if (!form) return;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          submitBtn.textContent = 'Sent!';
          submitBtn.classList.add('btn--secondary');
          submitBtn.classList.remove('btn--primary');
          form.reset();
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.classList.remove('btn--secondary');
            submitBtn.classList.add('btn--primary');
            submitBtn.disabled = false;
          }, 3000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        submitBtn.textContent = 'Failed — try again';
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }
    });
  }
  return { init };
})();

// ============================================================
// BOOT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Render dynamic DOM content FIRST
  ProjectRenderer.init();
  SkillRenderer.init();

  // 2. Initialize interactive UI components that depend on DOM
  Navbar.init();
  TypingAnimation.init();
  ScrollReveal.init();
  WordReveal.init();
  ProjectFilter.init();
  ActiveNavLink.init();
  StatCounter.init();
  ProjectDetail.init();
  ContactForm.init();
});