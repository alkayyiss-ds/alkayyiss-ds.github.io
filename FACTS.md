# FACTS — Portfolio Claim Register

Every number and claim shown on the site must appear here first.

- **VERIFIED**: the value comes from a source approved in the owner brief (2026-11-11) or from a file in a project repo that was checked.
- **TODO**: no approved source yet. The site shows `[TODO: ...]` or omits the claim.
- **REMOVED**: older claims taken off the site because no source exists or the owner corrected them.

Last audit: 2026-11-11.

---

## 1. Profile

| # | Claim | Value | Source | Status |
|---|---|---|---|---|
| P1 | Full name | Muhammad Naufal Al Kayyis | Owner brief | VERIFIED |
| P2 | Program | D4 Applied Data Science (Sains Data Terapan) | Owner brief | VERIFIED |
| P3 | Institution | Politeknik Elektronika Negeri Surabaya (PENS-EEPIS) | Owner brief | VERIFIED |
| P4 | Graduation year | 2028 | Owner brief | VERIFIED |
| P5 | GPA | 3.53 / 4.00 | Owner brief | VERIFIED |
| P6 | Leadership | Head of Event Department, LMB PENS | Owner brief | VERIFIED |
| P7 | Leadership | Head of Security Division, Minat Bakat Expo PENS | Owner brief | VERIFIED |
| P8 | Leadership | Steering Committee, Event Division, EEPIS Competition | Owner brief | VERIFIED |
| P9 | Email | naufalkayyiss@gmail.com | Owner brief | VERIFIED |
| P10 | GitHub | github.com/alkayyiss-ds | Owner brief | VERIFIED |
| P11 | LinkedIn | linkedin.com/in/naufal-kayyis | Owner brief | VERIFIED |
| P12 | "Top 10%" claim | Removed. Not supported: BDC rank 64 of 180 is about top 36%; Datathon rank 188 of 283 is about top 66% | Owner data, computed | REMOVED |
| P15 | BDC 2026 (Satria Data) rank | 64 of 180 teams | Owner message, 2026-11-11 | VERIFIED (owner); conflicts with T1 below |
| P16 | Datathon UI, Task 2 (Wiki next-click) rank | 188 of 283 teams | Owner message, 2026-11-11 | VERIFIED (owner) |
| P17 | Datathon UI year | 2026 | Owner message, 2026-11-11 | VERIFIED |
| W1 | Wiki next-click: role | Data Scientist (chosen by PM; owner may move it) | Decision | VERIFIED (decision) |
| W2 | Wiki next-click: rank | 188 of 283 teams, Datathon UI 2026, Task 2 | Owner message | VERIFIED |
| W3 | Wiki next-click: method | Blue-link color mask + batched EasyOCR; TF-IDF char n-gram title matching; graph features (shortest path, degree, text similarity, click frequency); LightGBM LambdaRank; layered fallback | Project README | VERIFIED |
| W4 | Wiki next-click: metrics | None in README or code | Project README (no numbers) | TODO: do not show |
| W5 | Wiki next-click: dataset label | Public dataset: Kaggle competition data from the organizers, https://www.kaggle.com/competitions/datathon-task-2/data | Owner message, 2026-11-11 | VERIFIED |
| W6 | Wiki next-click: team or solo | Team project | Owner message, 2026-11-11 | VERIFIED |
| W7 | Wiki next-click: CV title | — | Not provided | TODO |
| W8 | Wiki next-click: "100% no empty output", "10 h to 2.5 h OCR" | — | No measurement in repo | REMOVED (not used on site) |
| P13 | CV download | Not on the website (removed by owner, 2026-11-11) | Owner decision | REMOVED |
| P14 | Skills list | Items from the project `tags` and repositories (see `SKILL_GROUPS` in `script.js`) | Project repos | VERIFIED |

---

## 2. QC Manufacturing Intelligence & Data Warehouse (Data & BI)

| # | Claim | Value | Source | Status |
|---|---|---|---|---|
| Q1 | Number of machines | 500 | Database screenshot, `dim_mesin` (owner brief) | VERIFIED |
| Q2 | Fact table name | `fakta_pemeriksaan_qc` | Owner brief | VERIFIED |
| Q3 | Fact table size | Brief says about 90,000 rows; `generate_mysql_data.py` inserts 100,000 | Owner brief vs. generator script | TODO: confirm row count from the database |
| Q4 | Fact grain | One inspection report per production batch | Owner brief | VERIFIED |
| Q5 | Star schema | 1 fact + 6 dimensions: `dim_produk`, `dim_mesin`, `dim_jenis_cacat`, `dim_waktu`, `dim_operator_qc`, `dim_batch_produksi` | Owner brief | TODO: names conflict with code (see Q15) |
| Q15 | Table names in code | MySQL source: `fakta_pemeriksaan_qc`, `dim_mesin` (generator). PostgreSQL ETL creates `dim_mesin`, `fact_log_qc` (`etl_mysql_to_pg.py`). `.ktr` outputs `dim_mesin`, `dim_produk`, `dim_waktu`, `dim_cacat`. No `dim_jenis_cacat`, `dim_operator_qc`, `dim_batch_produksi` in code | Code in `project_qc` | TODO: confirm the final warehouse schema |
| Q6 | Database totals | 7 tables, about 1.07 million rows, 98.3 MiB | Owner brief | VERIFIED (value) / TODO: confirm whether totals are the MySQL source or the PostgreSQL warehouse |
| Q7 | Dataset type | Simulated data | `generate_mysql_data.py` in repo | VERIFIED |
| Q8 | ETL tools | Pentaho PDI and Python | `mysql to postgre.ktr` and `etl_mysql_to_pg.py` in repo | VERIFIED |
| Q9 | Defect forecast, CV MAPE | 10.96% (± 1.47%, 4 folds, walk-forward) | `notebooks/02_forecast_evaluation.ipynb` output | VERIFIED |
| Q10 | Defect forecast, CV MAE | 0.008469 | `notebooks/02_forecast_evaluation.ipynb` output | VERIFIED |
| Q11 | Clustering method | BIRCH (unsupervised) | Owner brief | VERIFIED |
| Q12 | Repository | github.com/alkayyiss-ds/Dashboard-Quality-Control | `git remote` of `project_qc` | VERIFIED |
| Q13 | Screenshots (star schema, dashboard) | — | Not provided | TODO |
| Q14 | Role title in CV | — | Not provided | TODO |

**REMOVED:** 85,974 machines; fact table `laporan_qc_harian`; "production line" dimension; MAE 0.002376; Safe MAPE 15.05%; query time "< 1.5 s"; Silhouette score claims.

---

## 3. SuaraLens (Data & BI, dashboard angle)

| # | Claim | Value | Source | Status |
|---|---|---|---|---|
| S1 | Owner role | Project Manager & NLP Engineer | Owner brief | VERIFIED |
| S2 | Team size | Team of 3 | Owner brief | VERIFIED (see note) |
| S3 | Scope | Complaint classification, urgency, duplicate detection, SLA tracking, leadership dashboard | Owner brief | VERIFIED |
| S4 | Stack | IndoBERT, FastAPI, PostgreSQL + pgvector, CodeIgniter 4, Docker | Owner brief | VERIFIED (see note) |
| S5 | Repository | github.com/nurrasyid14/s (team repo) | `git remote` of `SuaraLens` | VERIFIED |
| S6 | Model accuracy / F1 | — | Unverified | TODO (do not show) |
| S7 | Dataset type | Simulated data | `SuaraLens/generate_data.py` (dummy generator with ground-truth labels) | VERIFIED |
| S8 | Verified outcome for card | — | Not provided | TODO |
| S9 | Role title in CV | Project Manager & NLP Engineer | Owner brief | VERIFIED |

**Note:** git history lists more than 3 committers, and the repo README describes an LLM-based classifier. The site follows the owner brief; the owner should confirm both points.

**REMOVED:** accuracy 89.4%, F1 0.881, precision 0.887, recall 0.876, ROC-AUC 0.945; "50k+ samples".

---

## 4. Neo Horcrox (Machine Learning Engineer)

| # | Claim | Value | Source | Status |
|---|---|---|---|---|
| N1 | Owner role | Backend: FastAPI API, model serving, prediction logging to PostgreSQL; one-command Docker Compose setup | Owner brief | VERIFIED (see note) |
| N2 | Team | Built with a team of 3; ML model and frontend by a team partner | Owner brief; 3 committers in git | VERIFIED |
| N3 | Classifier AUC-ROC (test) | 0.7560 | Project README | VERIFIED |
| N4 | Classifier F1 (test) | 0.6938 | Project README | VERIFIED |
| N5 | Classifier accuracy (test) | 69.52% | Project README | VERIFIED |
| N6 | Classifier precision (test) | 77.23% | Project README | VERIFIED |
| N7 | Classifier recall (test) | 62.98% | Project README | VERIFIED |
| N8 | Demand forecast R² | 0.9742 | Project README | VERIFIED |
| N9 | Demand forecast MAE | 127.53 | Project README | VERIFIED |
| N10 | Demand forecast RMSE | 341.10 | Project README | VERIFIED |
| N11 | Deployment / auth | Not complete; runs locally with Docker Compose | Project README, owner brief | VERIFIED |
| N12 | Repository | github.com/Josshua-DSA/Neo-Horcrox-Project | `git remote` | VERIFIED |
| N13 | Dataset type | Public dataset (DataCo SMART Supply Chain, Kaggle) | Project README, "References > Dataset" | VERIFIED |
| N14 | Role title in CV | — | Not provided | TODO |

**Note:** git history credits a partner for the Dockerfile and deployment config. The site follows the owner brief; the owner should confirm.

**REMOVED:** API latency "< 80 ms"; any cloud deployment claim; MAE 0.0085 / RMSE 0.0105 / MAPE 10.96% (these belonged to the QC notebook).

---

## 5. SATRIA DATA — BDC 2026 (Machine Learning Engineer)

| # | Claim | Value | Source | Status |
|---|---|---|---|---|
| T1 | Competition ranking | 112 (BDC 2026) | Owner brief (earlier) | CONFLICT: replaced on site by 64 of 180 (P15); owner must confirm which is correct |
| T2 | Method | Transfer learning, EfficientNet, Optuna | Owner brief | VERIFIED |
| T3 | Score | — | Not recorded (notebook has no saved output) | TODO: do not show |
| T4 | Number of participating teams (for a percentile) | — | Not provided | TODO |
| T5 | Repository | github.com/alkayyiss-ds/waste-classification-ml | `git remote` | VERIFIED |
| T6 | Dataset type | — | Competition data; label not provided | TODO |
| T7 | Role title in CV | — | Not provided | TODO |

**Note:** the notebook in the repo still trains ResNet50 as its baseline. Sync the final EfficientNet notebook.

**REMOVED:** accuracy 94.2%, F1 0.938, precision 0.941, recall 0.935, ROC-AUC 0.987.

---

## 6. PT Aigra — Smart Farming (Data Scientist)

| # | Claim | Value | Source | Status |
|---|---|---|---|---|
| A1 | Context | Coding test for PT AIGRA EON INDONESIA | Owner brief; project README title | VERIFIED |
| A2 | Dataset | Bureau of Meteorology Australia, 140,000+ daily observations (public) | Owner brief | VERIFIED |
| A3 | Accuracy (test) | 83.15% | `model_card.md` | VERIFIED |
| A4 | ROC-AUC (test) | 0.882 | `model_card.md` | VERIFIED |
| A5 | Recall (test) | 71.48% | `model_card.md` | VERIFIED |
| A6 | Precision (test) | 60.51% | `model_card.md` | VERIFIED |
| A7 | F1 (test) | 65.54% | `model_card.md` | VERIFIED |
| A8 | Method | Anti-leakage imblearn Pipeline (split before resampling); XGBoost Calibrated; SARIMAX 24-month seasonal forecast with 95% interval | Owner brief | VERIFIED |
| A9 | Repository | github.com/alkayyiss-ds/rain-prediction-aigra | `git remote` | VERIFIED |
| A10 | Role title in CV | — | Not provided | TODO |

**REMOVED:** "no excessive false alarms" (precision 60.51% means many false positives).

---

## 7. Statistika Quick Count — Pilkada Jember (Data Scientist)

| # | Claim | Value | Source | Status |
|---|---|---|---|---|
| K1 | Method | Stratified random sampling per kecamatan; 95% confidence interval | Owner brief | VERIFIED |
| K2 | Candidate 1 | ~37.2% estimate vs 36.8% ground truth | Project README | VERIFIED |
| K3 | Candidate 2 | ~28.5% estimate vs 28.9% ground truth | Project README | VERIFIED |
| K4 | Candidate 3 | ~34.3% estimate vs 34.3% ground truth | Project README | VERIFIED |
| K5 | Coverage | All estimates fell within the 95% CI | Project README | VERIFIED |
| K6 | Context | Academic project | Owner brief | VERIFIED |
| K7 | Repository | github.com/alkayyiss-ds/quick-count-statistical-analysis | `git remote` | VERIFIED |
| K8 | Dataset type | Real data (KPU Kabupaten Jember TPS results) | Project README, "Data TPS" | VERIFIED |
| K9 | Role title in CV | — | Not provided | TODO |

---

## 8. Owner TODO list

1. BDC 2026 rank: 112 (earlier brief) or 64 of 180 (latest message)? The site currently shows 64 of 180 (T1, P15).
   Wiki next-click card added (W1–W8). Remaining TODO for it: CV title (W7).
2. ~~Add CV PDFs~~ Removed from scope: the website does not link to a CV (P13).
3. QC: star schema screenshot and dashboard screenshot (Q13).
4. QC: confirm whether "7 tables, ~1.07M rows, 98.3 MiB" is the MySQL source or the PostgreSQL warehouse (Q6).
5. Exact CV role title for QC, Neo Horcrox, SATRIA, PT Aigra, Quick Count (Q14, N14, T7, A10, K9).
6. Dataset label for SuaraLens, Neo Horcrox, SATRIA, Quick Count (S7, N13, T6, K8).
7. SuaraLens: one verified outcome for the card (S8); confirm team size and IndoBERT (S2, S4).
8. Neo Horcrox: confirm Docker Compose ownership (N1).
9. SATRIA: score (T3) and number of teams, if a percentile is wanted (T4); sync the EfficientNet notebook.

---

## 9. Owner answers (2026-11-11) — supersede the TODO rows above

| # | Item | Resolution | Status |
|---|---|---|---|
| A1 | CV title, QC | "Full Stack (frontend, backend, model)" as given by owner | VERIFIED (owner) |
| A2 | CV title, Neo Horcrox | "Backend" | VERIFIED (owner) |
| A3 | CV title, SATRIA | "Model" | VERIFIED (owner) |
| A4 | CV title, PT Aigra | "Model" | VERIFIED (owner) |
| A5 | Quick Count | Removed from the website | REMOVED (owner) |
| A6 | CV title, Wiki next-click | "Model" | VERIFIED (owner) |
| B1 | QC database | MySQL source `db_pabrik_mysql` (phpMyAdmin screenshot). 7 tables: `dim_batch_produksi` ~199,617; `dim_jenis_cacat` ~198,824; `dim_mesin` 500; `dim_operator_qc` ~199,206; `dim_produk` ~184,442; `dim_waktu` ~199,497; `fakta_pemeriksaan_qc` ~89,951. Sum ≈ 1,072,037 rows; size sum ≈ 98.3 MiB | VERIFIED |
| B2 | QC fact row count | ~89,951 (database), so "about 90,000" holds. The generator's 100,000 is not the final count | VERIFIED |
| B3 | QC star schema | Fact + 6 dimensions as named in the brief. Confirmed by `star-schemas.png` (copied to `assets/projects/qc-manufacturing/`). `garis_produksi` is an attribute of `dim_mesin` and `dim_batch_produksi`, not a dimension | VERIFIED |
| B4 | PostgreSQL warehouse names | `etl_mysql_to_pg.py` creates `fact_log_qc`, not `fakta_pemeriksaan_qc`. The website describes the MySQL source only | TODO (low priority; not shown) |
| C1 | SATRIA score | Not shown. Score is on the organizer leaderboard, not in the repo | REMOVED from site |
| C2 | SATRIA dataset | Real data, from the organizer (image data) | VERIFIED (owner) |
| C3 | BDC rank | 64 of 180 teams (owner). 112 is retired | VERIFIED (owner) |
| D1 | SuaraLens outcome | No notebook metrics used: the system runs a local LLM. Shown as a description, with no accuracy | VERIFIED (owner) |
| D2 | SuaraLens tag | "IndoBERT" replaced by "Local LLM (Ollama)" to match the owner's answer. Owner to confirm | VERIFIED (owner); please confirm |
| E17 | Wiki dataset link | Kaggle competition data link shown on the card | VERIFIED (owner) |
| P13 | CV download | Not on the website | REMOVED |
| Q-dash | QC dashboard screenshot | Not provided | TODO |

### Remaining TODO on the site

1. QC: dashboard screenshot (`[TODO: screenshot of dashboard]`).
2. Note: SuaraLens tag "IndoBERT" removed (D2). Confirm.

## 10. QC dashboard screenshots (2026-11-11)

| # | Item | Value | Source | Status |
|---|---|---|---|---|
| Q-dash1 | Screenshots on the QC card | `dashboard-overview.jpeg`, `cluster-overview.jpeg`, `forecast-overview.jpeg` in `assets/projects/qc-manufacturing/` | Owner upload | VERIFIED |
| Q-dash2 | Dashboard "Total mesin" | **120** machines | `dashboard-overview.jpeg` | CONFLICT: database `dim_mesin` has 500 machines (section 9, B1) |
| Q-dash3 | Clustering page, k=3 | Groups 59 / 49 / 12 machines (sum 120), silhouette **0.7142**, BIRCH threshold 0.5, branching factor 50 | `cluster-overview.jpeg` | CONFLICT: notebook reports k=4, silhouette 0.7963 |
| Q-dash4 | Forecast page | Example machine "Mesin Unit 001", 6-month horizon, XGBoost Regressor, 19 data points | `forecast-overview.jpeg` | VERIFIED (screenshot) |

**Action for owner:** the dashboard and the database disagree on machine count (120 vs 500) and on clustering (k=3 live vs k=4 notebook). Which one is the figure to show? The site currently states 500 machines (from the database) and the notebook CV metrics. The screenshots show the live dashboard as-is.

## 11. Owner decisions on dashboard conflicts (2026-11-11)

| # | Item | Resolution | Status |
|---|---|---|---|
| D-1 | Machine count on the QC card | 120, as shown on the dashboard. The owner noted an error in the data flow; the website follows the dashboard | VERIFIED (owner) |
| D-2 | Clustering on the QC card | BIRCH, user-selectable number of clusters (dashboard default k=3, silhouette 0.7142 on screenshot). Notebook k=4 figures are not used for this claim | VERIFIED (owner, screenshot) |
| D-3 | Database `dim_mesin` (500) | Kept in the database totals (section 9, B1). Owner to note the flow error separately | OPEN (owner) |

## 12. Copy changes (2026-11-11)

| # | Item | Change | Status |
|---|---|---|---|
| C-1 | Headline | Owner asked to remove dashes. "Data professional" moved to the line above; headline now reads "Analytics, data warehousing, and machine learning for business decisions." | Owner request |
| C-2 | Project titles | Dashes removed; titles split into title + subtitle | Owner request |
| C-3 | Results | Rewritten for a business reader. Numbers unchanged; plain-language readings are derived from the same sources: QC "off by about 11%" = MAPE 10.96%; Neo "right about 77%" = precision 77.23%, "catches about 63%" = recall 62.98%, "explains about 97%" = R² 0.9742; SATRIA "top 36%" = 64/180; PT Aigra "about 7 in 10 rainy days" = recall 71.48%, "about 4 in 10 alerts false" = 1 − precision 60.51% | VERIFIED (derived) |

## 13. Business results from the owner's CV (2026-11-11)

Sources: `CV_Muhammad_Naufal_Al_Kayyis_DTE.pdf` and `CV_Muhammad_Naufal_Al_Kayyis_Consulting_.pdf` (project root). Business-result text on the site now follows the CV. Metrics stay as the evidence line, with their original sources.

| # | Claim taken from the CV | Status |
|---|---|---|
| CV-1 | QC: quality data queryable in one place; risk segments give maintenance an objective basis; forecasts with confidence bands; journal manuscript | VERIFIED (owner CV) |
| CV-2 | SuaraLens: routed among 14 work units; duplicates merged into parent tickets; spikes flagged; pilot-ready prototype on synthetic data; PII anonymization; human review of high-urgency cases | VERIFIED (owner CV) |
| CV-3 | Neo Horcrox: one decision-support tool; stock adjusted two weeks ahead; AHP ranking stakeholders can challenge | VERIFIED (owner CV) |
| CV-4 | PT Aigra: crop-failure risk planning; two-year forecast with uncertainty; leakage guarded; MLflow; Model Card with limitations and bias | VERIFIED (owner CV) |
| CV-5 | Wiki: two-pass OCR cut extraction of 3,312 screenshots to under 2.5 hours | VERIFIED (owner CV); replaces W8 removal |

### Conflicts between the CV and confirmed facts (site keeps the confirmed fact)

| # | CV says | Site shows | Owner to decide |
|---|---|---|---|
| X-1 | QC: 85,974 machines | 120 machines (dashboard, D-1) | Correct the CV, or the site? |
| X-2 | Neo Horcrox: "AI Engineer, Independent Project" | Team of 3; owner built the backend (N1, N2) | Correct the CV, or the site? |
| X-3 | BDC 2026: ranked 56th in East Java | 64th of 180 teams (P15) | Which ranking to show? |
| X-4 | Datathon UI: ranked 54th on Kaggle leaderboard | 188th of 283 teams (W2) | Which ranking to show? |
| X-5 | PT Aigra: "Academic Project" | Coding test for PT AIGRA EON INDONESIA (README title) | Which context to show? |
| X-6 | SuaraLens: IndoBERT / Scikit-learn classifiers | Local LLM (D2) | Which model to show? |
| X-7 | CV role titles: QC "Data Scientist", Neo "AI Engineer", Smart Farming "Data Scientist", Wiki "Machine Learning Engineer" | Owner answers: QC "Full Stack (frontend, backend, model)", Neo "Backend", PT Aigra "Model", Wiki "Model" | Use CV titles on the site? |

## 14. CV-style project write-ups (2026-11-11)

Each project now reads: The problem → What I built → Key decisions → Business value (+ evidence line). Decisions come from the CVs (SuaraLens: separate ML service, human review, PII anonymization, synthetic data while real data is requested; Neo Horcrox: AHP supplier ranking; QC: star schema, fallback forecast, adjustable thresholds; PT Aigra: leakage guard, imbalance correction, calibration, Model Card; Wiki: two-pass OCR, cold-start strategy) or from confirmed facts (QC user-chosen cluster count; Neo one API and prediction logging, owner's backend part). The "why" lines restate the CV's stated purpose in plain language. Open conflicts X-1 to X-7 (section 13) are unchanged.

## 15. Owner decisions on CV conflicts (2026-11-11)

| # | Decision | Status |
|---|---|---|
| X-1 | QC: 120 machines (site). CV's 85,974 is not used | RESOLVED |
| X-2 | Neo Horcrox: team project of 3; owner built the backend | RESOLVED |
| X-3 | BDC 2026: 64th of 180 teams | RESOLVED |
| X-4 | Datathon UI 2026: 188th of 283 teams | RESOLVED |
| X-5 | PT Aigra: coding test for PT AIGRA EON INDONESIA | RESOLVED |
| X-6 | SuaraLens: local LLM based on Ollama | RESOLVED |
| X-7 | Role titles from the CV: QC "Data Scientist", SuaraLens "Project Manager & NLP Engineer", Neo Horcrox "AI Engineer", PT Aigra "Data Scientist", Wiki "Machine Learning Engineer". SATRIA has no role title in the CV; site keeps "Model" | RESOLVED (SATRIA: TODO) |

Note for the CV itself: it still says 85,974 machines (QC), "Independent Project" (Neo Horcrox), BDC 56th in East Java, Datathon 54th, PT Aigra "Academic Project", and IndoBERT (SuaraLens). These differ from the site.

## 16. Visual redesign: numbers shown as tiles and badges (2026-11-11)

| # | Shown as | Value | Source | Status |
|---|---|---|---|---|
| V-1 | Hero badge | #64 of 180 teams, BDC 2026 | P15 | VERIFIED |
| V-2 | Hero badge | GPA 3.53 / 4.00 | P5 | VERIFIED |
| V-3 | Bento | 2028 graduating; #188 / 283 Datathon UI 2026 Task 2 | P4, W2 | VERIFIED |
| V-4 | Bento | 6 case studies; 3 leadership roles | Count of site content (P6–P8) | VERIFIED |
| V-5 | KPI tiles | QC 120 machines, 10.96% MAPE; SuaraLens 14 units, team of 3; Neo 77.23% precision, R² 0.9742; SATRIA #64, top 36% (64/180); PT Aigra 71.48% recall, 140k+ observations; Wiki < 2.5 h for 3,312 screenshots, #188 of 283 | D-1, Q9, CV-2, S2, N6, N8, P15, A5, A2, CV-5, W2 | VERIFIED |
| V-6 | Process flows | Step labels summarize the "What I built" items of each project; no new claims | Same as project rows | VERIFIED |
