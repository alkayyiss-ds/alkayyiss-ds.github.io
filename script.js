/* ==========================================================================
   Portfolio data and rendering.
   Every number below must have a VERIFIED row in FACTS.md.
   Any text containing "[TODO: ...]" is highlighted on the page.

   The page: hero → role picker (3 roles, skills on each card) → contact.
   ========================================================================== */

/* --------------------------------------------------------------------------
   THEME: light or dark. Saved choice wins; otherwise follow the system.
   Applied at once so the page does not flash on load.
   -------------------------------------------------------------------------- */
const THEME_KEY = "theme";

function readTheme() {
  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* storage blocked */ }
  if (saved === "light" || saved === "dark") return saved;
  const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return dark ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#0A1424" : "#F6F8FB");
  const button = document.getElementById("theme-toggle");
  if (button) {
    button.setAttribute("aria-pressed", String(theme === "dark"));
    button.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
}

applyTheme(readTheme());

function initThemeToggle() {
  const button = document.getElementById("theme-toggle");
  if (!button) return;
  applyTheme(readTheme());
  button.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* storage blocked */ }
    applyTheme(next);
  });
}

/* --------------------------------------------------------------------------
   ICONS: Lucide-style strokes (24×24). Decorative only (aria-hidden).
   -------------------------------------------------------------------------- */
const ICONS = {
  chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
  flask: '<path d="M10 2v7.31"/><path d="M14 9.3V2"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  external: '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
};

function icon(name, size = 20) {
  return `<svg class="icon" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name] || ""}</svg>`;
}

/* --------------------------------------------------------------------------
   ROLES: one role = one chapter. Projects reference a role by its `id`.
   -------------------------------------------------------------------------- */
const ROLES = [
  {
    id: "bi",
    icon: "chart",
    label: "Data & BI",
    chapter: "Chapter 1",
    title: "Making data usable",
    roleName: "Data & Business Intelligence",
    summary: "Data modeling, ETL, and dashboards that turn operational data into decisions.",
    narrative:
      "Most decisions start with data that is hard to query. I shape the data model, run the ETL, and put the result on a dashboard people can act on.",
  },
  {
    id: "mle",
    icon: "cpu",
    label: "Machine Learning Engineer",
    chapter: "Chapter 2",
    title: "Putting models to work",
    roleName: "Machine Learning Engineer",
    summary: "Model serving behind APIs, containerized setups, and reproducible training.",
    narrative:
      "A model only helps once something can call it. My part is the engineering around it: the API, the environment, and the training run that must finish on time.",
  },
  {
    id: "ds",
    icon: "flask",
    label: "Data Scientist",
    chapter: "Chapter 3",
    title: "Asking honest questions of data",
    roleName: "Data Scientist",
    summary: "Statistical analysis and predictive modeling, evaluated on held-out data.",
    narrative:
      "Where I am heading. These projects start with one question: what to predict, how to measure it honestly, and what the numbers do and do not say.",
  },
];

/* --------------------------------------------------------------------------
   PROJECTS: one object per project. To add a project, copy one object,
   change the fields, and set `role` to "bi", "mle", or "ds".
   `kpis` = up to two headline numbers; `flow` = the process in short steps.
   -------------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "qc-manufacturing",
    role: "bi",
    title: "QC Manufacturing Intelligence",
    subtitle: "Data warehouse and quality dashboard",
    kpis: [
      { value: "120", label: "machines monitored on the dashboard" },
      { value: "10.96%", label: "defect forecast error (CV MAPE)" },
    ],
    flow: ["MySQL source", "ETL: Pentaho + Python", "Star schema", "BIRCH + forecast", "Dashboard"],
    problem:
      "Inspection data sat in a transactional database. The quality team could not compare machines or see where defect rates were heading, so maintenance came after defects piled up.",
    myRole: "Data Scientist",
    scope: [
      "Designed a star-schema data warehouse: one fact table, fakta_pemeriksaan_qc (about 90,000 rows, one inspection report per production batch), and six dimensions, so quality data can be queried quickly in one place.",
      "Built automated ETL from the MySQL transactional database in two forms, a Pentaho PDI transformation and a Python script, and generated the simulated source data.",
      "Grouped the 120 machines on the dashboard into risk segments with BIRCH clustering, so maintenance can start with the highest-risk machines.",
      "Forecast defect rates per machine with confidence bands, and delivered an interactive Flask and Chart.js dashboard.",
    ],
    decisions: [
      { decision: "A star schema instead of querying the transactional database.", why: "Quality data becomes fast and reliable to query in one place." },
      { decision: "A fallback forecast for machines with limited history.", why: "Every machine still gets a forecast instead of a blank or an unreliable output." },
      { decision: "Thresholds and cluster count set by the user.", why: "The quality team decides what counts as Good, Warning, or Critical, and how finely to segment machines, without changing code." },
    ],
    outcome: {
      text: "Maintenance teams get an objective basis for prioritization: which machines drive defects, their risk segment, and where defect rates are heading. Written up as a journal manuscript.",
      evidence: "Defect forecast error: CV MAPE 10.96%, MAE 0.008469 (walk-forward cross-validation).",
      source: "CV; forecast numbers from notebook",
    },
    tags: ["SQL", "PostgreSQL", "MySQL", "Pentaho PDI", "Python", "BIRCH", "XGBoost", "Flask"],
    dataset: "Simulated data",
    context: [],
    repo: "https://github.com/alkayyiss-ds/Dashboard-Quality-Control",
    schema: {
      fact: { name: "fakta_pemeriksaan_qc", detail: "~90,000 rows · 1 row per batch inspection" },
      dimensions: ["dim_produk", "dim_mesin", "dim_jenis_cacat", "dim_waktu", "dim_operator_qc", "dim_batch_produksi"],
      totals: "MySQL source db_pabrik_mysql · 7 tables · about 1.07 million rows · 98.3 MiB",
    },
    screenshots: [
      { src: "assets/projects/qc-manufacturing/dashboard-overview.jpeg", alt: "QC Dashboard overview: total machines, average defect ratio, monthly defect trend, top 10 machines by defect ratio", caption: "Dashboard overview" },
      { src: "assets/projects/qc-manufacturing/star-schemas.png", alt: "Star schema of db_pabrik_mysql: fact table fakta_pemeriksaan_qc with six dimension tables", caption: "Star schema" },
      { src: "assets/projects/qc-manufacturing/cluster-overview.jpeg", alt: "QC Dashboard clustering page: BIRCH clustering of machines into three groups with silhouette score and scatter plot", caption: "BIRCH clustering" },
      { src: "assets/projects/qc-manufacturing/forecast-overview.jpeg", alt: "QC Dashboard forecast page: monthly defect-ratio forecast per machine with XGBoost regressor and confidence band", caption: "Defect forecast" },
    ],
  },
  {
    id: "suaralens",
    role: "bi",
    title: "SuaraLens",
    subtitle: "Complaint operations dashboard",
    kpis: [
      { value: "14", label: "work units with automatic routing" },
      { value: "3", label: "people on the team I managed" },
    ],
    flow: ["Complaint in", "Anonymize", "Classify + urgency", "Route to 14 units", "Leadership dashboard"],
    problem:
      "Complaints arrived unstructured from many channels. Leaders could not see what was urgent, who owned it, or what kept recurring; staff triaged by hand.",
    myRole: "Project Manager & NLP Engineer",
    scope: [
      "Led the 3-person team as project manager, from problem framing and scope definition through delivery.",
      "Designed automated triage: each complaint, feedback item, or suggestion is classified by type, responsible unit, category, sentiment, and urgency, then routed to one of 14 work units.",
      "Merged duplicate reports into one parent ticket and flagged unusual volume spikes for early attention.",
      "Built the leadership dashboard for complaint trends, priority issues, and SLA performance, and set up the Docker environment.",
    ],
    decisions: [
      { decision: "Separate the ML service from ticketing and SLA tracking.", why: "Each part can be maintained and changed on its own: FastAPI for the models, CodeIgniter 4 for tickets and SLAs." },
      { decision: "Human review for high-urgency cases.", why: "The most serious complaints are checked by a person before action is taken, not left to the model alone." },
      { decision: "Anonymize personal data in every complaint.", why: "People can report problems without worrying about being identified." },
      { decision: "Build on synthetic data while real data is requested.", why: "The team could deliver a working prototype without waiting for data access." },
    ],
    outcome: {
      text: "A pilot-ready prototype: one dashboard shows what is urgent, which unit owns it, what recurs, and whether deadlines are met.",
      source: "CV",
    },
    tags: ["Local LLM (Ollama)", "FastAPI", "PostgreSQL + pgvector", "CodeIgniter 4", "Docker"],
    dataset: "Simulated data",
    context: ["Team project"],
    repo: "https://github.com/nurrasyid14/s",
  },
  {
    id: "neo-horcrox",
    role: "mle",
    title: "Neo Horcrox",
    subtitle: "Supply chain decision support",
    kpis: [
      { value: "77.23%", label: "of late-shipment alerts are correct" },
      { value: "0.9742", label: "R² of the demand forecast" },
    ],
    flow: ["Order data", "Risk · Forecast · AHP", "FastAPI", "PostgreSQL log", "Planner"],
    problem:
      "Delivery risk, demand planning, and supplier choice were handled separately and by hand, so late shipments were noticed too late and stock decisions had no shared forecast.",
    myRole: "AI Engineer",
    scope: [
      "Built with a team of 3. My part was the backend; the models and frontend were built by a team partner.",
      "Built the FastAPI backend that serves shipment-risk prediction, demand forecasts, and supplier rankings through one API, and logs every prediction to PostgreSQL.",
      "Packaged the system with Docker Compose so the API, database, and frontend start with one command.",
    ],
    decisions: [
      { decision: "One API for risk, forecast, and supplier ranking.", why: "Planners get all three answers from one place instead of three separate tools." },
      { decision: "Log every prediction to PostgreSQL.", why: "Each prediction can be traced and reviewed later." },
      { decision: "Supplier ranking with AHP (team decision).", why: "Replaces intuition with weighted criteria that stakeholders can see and challenge: on-time delivery, profit margin, sales volume, and discount efficiency." },
    ],
    outcome: {
      text: "Delivery-delay risk is spotted earlier, and planners can adjust stock two weeks ahead, before overstock or stockouts. Documented with architecture docs, a pitch deck, and a project report.",
      evidence: "When the model flags a shipment as late it is right 77.23% of the time and catches 62.98% of late shipments (test set, AUC-ROC 0.7560). Demand forecast R² 0.9742.",
      source: "CV; metrics from project README",
    },
    tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker Compose"],
    dataset: "Public dataset",
    context: ["Team project", "Runs locally; cloud deployment and auth not complete"],
    repo: "https://github.com/Josshua-DSA/Neo-Horcrox-Project",
  },
  {
    id: "satria-data",
    role: "mle",
    title: "SATRIA DATA",
    subtitle: "Waste image classification, BDC 2026",
    kpis: [
      { value: "#64", label: "of 180 teams in BDC 2026" },
      { value: "Top 36%", label: "of all competing teams" },
    ],
    flow: ["Waste images", "EfficientNet", "Optuna tuning", "Submission"],
    problem:
      "Manual waste sorting is slow and error-prone. The competition task was to classify waste images into categories automatically.",
    myRole: "Model",
    scope: [
      "Built a transfer-learning CNN pipeline (EfficientNet) for multi-class waste image classification.",
      "Tuned hyperparameters with Optuna.",
      "Produced the competition submission file.",
    ],
    decisions: [
      { decision: "Transfer learning on a pretrained network.", why: "Reuses visual features learned from large image collections instead of training from scratch." },
      { decision: "Automated hyperparameter search with Optuna.", why: "Tuning is systematic and repeatable rather than trial and error." },
    ],
    outcome: {
      text: "A working image classifier for automated waste sorting, built and submitted within a national data competition.",
      evidence: "Placed 64th of 180 teams in BDC 2026 (Satria Data).",
      source: "CV; ranking from owner",
    },
    tags: ["Python", "EfficientNet", "Transfer learning", "Optuna"],
    dataset: "Real data",
    context: ["Competition"],
    repo: "https://github.com/alkayyiss-ds/waste-classification-ml",
  },
  {
    id: "pt-aigra",
    role: "ds",
    title: "PT Aigra",
    subtitle: "Smart farming rain prediction",
    kpis: [
      { value: "71.48%", label: "of rainy days caught a day ahead" },
      { value: "140k+", label: "daily weather observations" },
    ],
    flow: ["140k+ observations", "Split first", "Rebalance", "Calibrated XGBoost", "Rain warning"],
    problem:
      "Farmers need to know if it will rain tomorrow and how the season will look, to time planting and fertilizing and plan around crop-failure risk.",
    myRole: "Data Scientist",
    scope: [
      "Built a rain-prediction pipeline on 140,000+ daily weather observations.",
      "Added a two-year seasonal rainfall forecast (SARIMAX) that shows its uncertainty range.",
      "Tracked experiments in MLflow and documented the model's limitations and bias in a Model Card.",
    ],
    decisions: [
      { decision: "Split the data before any resampling or scaling.", why: "Prevents data leakage, so the evaluation reflects how the model will perform on new days." },
      { decision: "Correct the imbalance between rainy and dry days.", why: "Rainy days are the minority; a model that ignores them looks accurate while missing rain." },
      { decision: "Calibrate the model's probabilities.", why: "A predicted rain chance can be read as a real chance when farmers decide." },
      { decision: "Report precision openly.", why: "About 4 in 10 rain alerts are false alarms; the client should choose the trade-off between missed rain and false alarms." },
    ],
    outcome: {
      text: "Farmers get a next-day rain warning and a seasonal outlook they can plan around, with the model's limits written down.",
      evidence: "Catches 71.48% of rainy days a day ahead; 60.51% of rain alerts are correct (test set, ROC-AUC 0.882).",
      source: "CV; metrics from model_card.md",
    },
    tags: ["Python", "XGBoost", "imbalanced-learn", "SARIMAX", "MLflow"],
    dataset: "Public dataset",
    context: ["Coding test for PT AIGRA EON INDONESIA"],
    repo: "https://github.com/alkayyiss-ds/rain-prediction-aigra",
  },
  {
    id: "wiki-next-click",
    role: "ds",
    title: "Wikipedia Next Click Prediction",
    subtitle: "Datathon UI 2026, Task 2",
    kpis: [
      { value: "< 2.5 h", label: "to extract 3,312 page screenshots" },
      { value: "#188", label: "of 283 teams in Task 2" },
    ],
    flow: ["Screenshots", "Color mask", "EasyOCR", "Title match", "LambdaRank", "Next click"],
    problem:
      "Predict which link a user clicks next on the way to a target article. Links existed only as screenshots, were sparse, and many articles never appeared in training.",
    myRole: "Machine Learning Engineer",
    scope: [
      "Built a two-pass OCR pipeline: a fast color-mask scan to find link regions, then batched EasyOCR on the cropped regions.",
      "Matched OCR text to article titles with TF-IDF character n-grams.",
      "Ranked candidate links with LightGBM LambdaRank, using network-structure and title-similarity features.",
    ],
    decisions: [
      { decision: "Two OCR passes instead of reading every full page.", why: "Cut extraction of 3,312 screenshots to under 2.5 hours, which kept the work within the competition timeline." },
      { decision: "Learning to rank instead of plain classification.", why: "The model compares the candidate links on the same page against each other, which matches the question being asked." },
      { decision: "A dedicated strategy for cold-start articles.", why: "Articles never seen in training still get a prediction." },
    ],
    outcome: {
      text: "A complete ranking pipeline delivered within the competition timeline, built for the case where most items have little history.",
      evidence: "Placed 188th of 283 teams in Task 2, Datathon UI 2026.",
      source: "CV; ranking from owner",
    },
    tags: ["Python", "LightGBM", "NetworkX", "EasyOCR", "TF-IDF", "scikit-learn", "OpenCV"],
    dataset: "Public dataset",
    datasetUrl: "https://www.kaggle.com/competitions/datathon-task-2/data",
    context: ["Competition", "Team project"],
    repo: "https://github.com/alkayyiss-ds/wikipedia-next-click-prediction",
  },
];

/* --------------------------------------------------------------------------
   SKILLS: grouped by role. Each item must appear in at least one project's
   `tags` or in its repository. Add or remove items here only.
   -------------------------------------------------------------------------- */
const SKILL_GROUPS = [
  {
    role: "bi",
    title: "Data & Business Intelligence",
    items: ["SQL", "PostgreSQL", "MySQL", "Star schema design", "ETL", "Pentaho PDI", "Python ETL scripts", "Flask", "Chart.js"],
  },
  {
    role: "mle",
    title: "Machine Learning Engineering",
    items: ["Python", "FastAPI", "Docker", "Docker Compose", "REST API serving", "SQLAlchemy", "Apache Airflow", "PySpark", "MLflow", "Optuna", "XGBoost"],
  },
  {
    role: "ds",
    title: "Data Science",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "LightGBM", "SARIMAX", "Time series forecasting", "Conformal prediction", "Imbalanced-learn", "Statistical sampling"],
  },
];

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* Escape text, then wrap every [TODO: ...] in a highlighted span. */
function renderText(value) {
  return escapeHtml(value).replace(/\[TODO:[^\]]*\]/g, (match) => `<span class="todo">${match}</span>`);
}

/* --------------------------------------------------------------------------
   Case-study cards
   -------------------------------------------------------------------------- */
function renderKpis(kpis) {
  if (!kpis || !kpis.length) return "";
  return `<dl class="kpis">${kpis
    .map((k) => `<div class="kpi"><dt class="kpi__label">${renderText(k.label)}</dt><dd class="kpi__value">${renderText(k.value)}</dd></div>`)
    .join("")}</dl>`;
}

function renderFlow(flow) {
  if (!flow || !flow.length) return "";
  return `<ol class="flow" aria-label="Process, step by step">${flow.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`;
}

function renderSchemaFacts(schema) {
  return `
    <dl class="facts">
      <div><dt>Fact table</dt><dd><code>${escapeHtml(schema.fact.name)}</code> ${escapeHtml(schema.fact.detail)}</dd></div>
      <div><dt>Dimensions</dt><dd>${schema.dimensions.map((d) => `<code>${escapeHtml(d)}</code>`).join(" ")}</dd></div>
      <div><dt>Database</dt><dd>${renderText(schema.totals)}</dd></div>
    </dl>`;
}

function renderGallery(shots) {
  if (!shots || !shots.length) return "";
  const items = shots.map((shot, i) => `
    <figure class="gallery__item${i === 0 ? " gallery__item--main" : ""}">
      <a href="${escapeHtml(shot.src)}" target="_blank" rel="noopener">
        <img src="${escapeHtml(shot.src)}" alt="${escapeHtml(shot.alt)}" loading="lazy" decoding="async" width="1350" height="680">
        <span class="visually-hidden"> (opens full size in a new tab)</span>
      </a>
      <figcaption>${escapeHtml(shot.caption || "")}</figcaption>
    </figure>`).join("");
  return `<div class="gallery">${items}</div>`;
}

function renderCase(project) {
  const scope = project.scope.map((item) => `<li>${renderText(item)}</li>`).join("");
  const decisions = (project.decisions || [])
    .map((d) => `<li><strong>${renderText(d.decision)}</strong> ${renderText(d.why)}</li>`)
    .join("");
  const tags = project.tags.map((t) => `<li class="tag">${escapeHtml(t)}</li>`).join("");
  const media = project.screenshots ? `<div class="case__media">${renderGallery(project.screenshots)}</div>` : "";
  const context = (project.context || []).filter(Boolean);

  const links = [
    `<a class="case__link" href="${escapeHtml(project.repo)}" target="_blank" rel="noopener">Repository ${icon("external", 16)}<span class="visually-hidden"> for ${escapeHtml(project.title)} (opens in a new tab)</span></a>`,
    project.datasetUrl
      ? `<a class="case__link" href="${escapeHtml(project.datasetUrl)}" target="_blank" rel="noopener">Dataset ${icon("external", 16)}<span class="visually-hidden"> (Kaggle, opens in a new tab)</span></a>`
      : "",
  ].join("");

  const more = decisions || project.schema || project.outcome.evidence
    ? `
          <details class="case__more">
            <summary><span>Decisions and evidence</span>${icon("chevron", 18)}</summary>
            <div class="case__more-body">
              ${decisions ? `<h5>Key decisions</h5><ul class="decisions">${decisions}</ul>` : ""}
              ${project.schema ? `<h5>Data model</h5>${renderSchemaFacts(project.schema)}` : ""}
              ${project.outcome.evidence ? `<h5>Evidence</h5><p class="case__evidence">${renderText(project.outcome.evidence)}</p>` : ""}
              <p class="case__source">Source: ${renderText(project.outcome.source)}</p>
            </div>
          </details>`
    : "";

  return `
    <article class="case reveal" id="project-${project.id}" aria-labelledby="title-${project.id}">
      <header class="case__head">
        <h4 class="case__title" id="title-${project.id}">${escapeHtml(project.title)}</h4>
        <p class="case__subtitle">${escapeHtml(project.subtitle || "")}</p>
      </header>

      <div class="case__grid">
        <div class="case__main">
          ${renderKpis(project.kpis)}

          <div class="case__block">
            <p class="case__label">The problem</p>
            <p class="case__problem">${renderText(project.problem)}</p>
          </div>

          <div class="case__block">
            <p class="case__label">What I built</p>
            <ul class="case__list">${scope}</ul>
          </div>

          <div class="case__block">
            <p class="case__label">How it works</p>
            ${renderFlow(project.flow)}
          </div>

          <div class="case__value">
            <p class="case__value-label">Business value</p>
            <p>${renderText(project.outcome.text)}</p>
          </div>
          ${more}
        </div>

        <aside class="case__aside" aria-label="Project facts for ${escapeHtml(project.title)}">
          <p class="case__label">Project facts</p>
          <dl class="case__facts">
            <div><dt>My role</dt><dd>${renderText(project.myRole)}</dd></div>
            ${context.length ? `<div><dt>Context</dt><dd>${context.map(renderText).join(" · ")}</dd></div>` : ""}
            <div><dt>Data</dt><dd>${renderText(project.dataset)}</dd></div>
            <div><dt>Stack</dt><dd><ul class="tags">${tags}</ul></dd></div>
          </dl>
          <div class="case__links">${links}</div>
        </aside>
      </div>
      ${media}
    </article>`;
}

/* --------------------------------------------------------------------------
   Role picker: three role cards side by side, each with its skills. Choosing
   a card opens its panel (narrative + case studies) below. Closed until the
   viewer picks a role. Deep links: #role-bi, #role-mle, #role-ds, #project-<id>.
   -------------------------------------------------------------------------- */
const SKILL_PREVIEW = 6;
let activeRoleId = null;

function roleSkills(roleId) {
  const group = SKILL_GROUPS.find((g) => g.role === roleId);
  return group ? group.items : [];
}

function renderRolePicker() {
  const picker = document.getElementById("role-picker");
  if (!picker) return;
  picker.innerHTML = ROLES.map((role, i) => {
    const count = PROJECTS.filter((p) => p.role === role.id).length;
    const skills = roleSkills(role.id);
    const shown = skills.slice(0, SKILL_PREVIEW);
    const extra = skills.length - shown.length;
    const skillItems = shown.map((s) => `<li>${escapeHtml(s)}</li>`).join("")
      + (extra > 0 ? `<li class="role-pick__more-skills">+${extra}</li>` : "");
    return `
      <div class="role-pick reveal" data-role="${role.id}">
        <div class="role-pick__inner">
          <div class="role-pick__top">
            <span class="role-pick__icon">${icon(role.icon, 22)}</span>
            <span class="role-pick__step">${String(i + 1).padStart(2, "0")}</span>
          </div>
          <h3 class="role-pick__name">${escapeHtml(role.roleName)}</h3>
          <p class="role-pick__desc">${escapeHtml(role.summary)}</p>
          <ul class="role-pick__skills" aria-label="Skills for ${escapeHtml(role.roleName)}">${skillItems}</ul>
          <p class="role-pick__count">${count} case ${count === 1 ? "study" : "studies"} ${icon("arrow", 16)}</p>
        </div>
        <button type="button" class="role-pick__toggle" data-role="${role.id}"
                aria-expanded="false" aria-controls="role-panel">
          <span class="visually-hidden">Show projects for ${escapeHtml(role.roleName)}</span>
        </button>
      </div>`;
  }).join("");
}

function renderRolePanel(role) {
  const projects = PROJECTS.filter((p) => p.role === role.id);
  const cases = projects.map((p) => renderCase(p).replace('class="case reveal"', 'class="case"')).join("");
  return `
    <div class="role-panel__head">
      <span class="chapter__icon">${icon(role.icon, 26)}</span>
      <div class="role-panel__text">
        <p class="role-panel__label">${escapeHtml(role.roleName)}</p>
        <h3 class="role-panel__title" id="role-panel-title" tabindex="-1">${escapeHtml(role.title)}</h3>
        <p class="role-panel__narrative">${escapeHtml(role.narrative)}</p>
      </div>
      <button type="button" class="role-panel__close" aria-label="Close projects">${icon("x", 18)}</button>
    </div>
    <div class="cases">${cases}</div>`;
}

function setActiveRole(roleId, options = {}) {
  const panel = document.getElementById("role-panel");
  if (!panel) return;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  activeRoleId = roleId && roleId !== activeRoleId ? roleId : null;

  document.querySelectorAll(".role-pick").forEach((card) => {
    const on = card.dataset.role === activeRoleId;
    card.classList.toggle("is-active", on);
    card.querySelector(".role-pick__toggle").setAttribute("aria-expanded", String(on));
    // Restart the flip animation each time this card is chosen.
    card.classList.remove("is-flip");
    if (on) {
      void card.offsetWidth;
      card.classList.add("is-flip");
    }
  });

  if (!activeRoleId) {
    panel.hidden = true;
    panel.innerHTML = "";
    panel.classList.remove("is-open");
    if (window.history && history.replaceState) history.replaceState(null, "", "#role-project");
    return;
  }

  const role = ROLES.find((r) => r.id === activeRoleId);
  panel.innerHTML = renderRolePanel(role);
  panel.hidden = false;
  panel.classList.remove("is-open");
  void panel.offsetWidth;
  panel.classList.add("is-open");
  if (window.history && history.replaceState) history.replaceState(null, "", `#role-${role.id}`);

  if (options.userAction) {
    const title = document.getElementById("role-panel-title");
    if (title) title.focus({ preventScroll: true });
    panel.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
  }
}

/* Read the hash: #role-<id> opens that role; #project-<id> opens its role and scrolls to it. */
function roleFromHash() {
  const hash = decodeURIComponent(location.hash.slice(1));
  const role = ROLES.find((r) => hash === `role-${r.id}`);
  if (role) return { roleId: role.id, projectId: null };
  const project = PROJECTS.find((p) => hash === `project-${p.id}`);
  return project ? { roleId: project.role, projectId: `project-${project.id}` } : null;
}

function initRolePicker() {
  const picker = document.getElementById("role-picker");
  const panel = document.getElementById("role-panel");
  if (!picker || !panel) return;

  picker.addEventListener("click", (event) => {
    const toggle = event.target.closest(".role-pick__toggle");
    if (toggle) setActiveRole(toggle.dataset.role, { userAction: true });
  });

  panel.addEventListener("click", (event) => {
    if (event.target.closest(".role-panel__close")) setActiveRole(null);
  });

  picker.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    const toggles = Array.from(picker.querySelectorAll(".role-pick__toggle"));
    const index = toggles.indexOf(document.activeElement);
    if (index === -1) return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    toggles[(index + step + toggles.length) % toggles.length].focus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeRoleId) {
      setActiveRole(null);
      const toggle = document.querySelector(`.role-pick__toggle[data-role="${activeRoleId}"]`);
      if (toggle) toggle.focus();
    }
  });

  const initial = roleFromHash();
  if (initial) {
    setActiveRole(initial.roleId);
    if (initial.projectId) {
      const el = document.getElementById(initial.projectId);
      if (el) el.scrollIntoView({ block: "start" });
    }
  }
}

/* Tilt the card toward the pointer. Only for fine pointers, and not under reduced motion. */
function initRoleTilt() {
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (reduce || !finePointer) return;
  document.querySelectorAll(".role-pick").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
      card.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

/* --------------------------------------------------------------------------
   Copy the email address. Falls back to selecting the text when the
   Clipboard API is unavailable (non-secure contexts).
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const button = document.getElementById("copy-email");
  if (!button) return;
  let timer = 0;
  button.addEventListener("click", async () => {
    const text = button.getAttribute("data-copy") || "";
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        ok = true;
      }
    } catch (e) { ok = false; }
    if (!ok) {
      const link = button.parentElement && button.parentElement.querySelector(".contact__email");
      if (link && window.getSelection) {
        const range = document.createRange();
        range.selectNodeContents(link);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      return;
    }
    button.classList.add("is-copied");
    clearTimeout(timer);
    timer = setTimeout(() => button.classList.remove("is-copied"), 1800);
  });
}

/* --------------------------------------------------------------------------
   Static icons in index.html: <span data-icon="name" data-size="20"></span>
   -------------------------------------------------------------------------- */
function renderStaticIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    el.innerHTML = icon(el.getAttribute("data-icon"), Number(el.getAttribute("data-size")) || 20);
  });
}

/* --------------------------------------------------------------------------
   Motion: subtle reveal on scroll. Content stays visible without JS and under
   prefers-reduced-motion, because the `motion-ok` class is only added here.
   -------------------------------------------------------------------------- */
function initReveal() {
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("motion-ok");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   Reading progress bar and active nav link
   -------------------------------------------------------------------------- */
function initReadingProgress() {
  const bar = document.getElementById("progress");
  if (!bar) return;
  let ticking = false;
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    bar.style.transform = `scaleX(${ratio})`;
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

function initActiveNav() {
  const links = Array.from(document.querySelectorAll(".nav a[href^='#']"));
  if (!links.length || !("IntersectionObserver" in window)) return;
  const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.removeAttribute("aria-current"));
      const link = byId.get(entry.target.id);
      if (link) link.setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  byId.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

/* --------------------------------------------------------------------------
   Boot
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderStaticIcons();
  initThemeToggle();
  renderRolePicker();
  initRolePicker();
  initRoleTilt();
  initCopyEmail();
  initReveal();
  initReadingProgress();
  initActiveNav();
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
});
