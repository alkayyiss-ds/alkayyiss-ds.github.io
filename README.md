# alkayyiss-ds.github.io

Personal portfolio of Muhammad Naufal Al Kayyis. Single static page for GitHub Pages: plain HTML, CSS, and vanilla JavaScript. No framework and no build step.

| File | Purpose |
|---|---|
| `index.html` | Page structure: About, Role & Projects, Contact |
| `style.css` | All styles (mobile first). Palette "Navy & Cobalt": navy `#0B1F3A` for headings and solid blocks, one cobalt accent `#1D4ED8` (dark theme `#60A5FA`); all colours are tokens in `:root` |
| `script.js` | Role list, project list, and rendering |
| `FACTS.md` | Register of every claim and number on the site, with its source |

## Rule before editing

Every number or claim on the site must have a **VERIFIED** row in `FACTS.md`. If there is no source yet, write `[TODO: ...]` instead of a value. The page highlights any `[TODO: ...]` text in yellow so gaps stay visible.

Do not use "production-ready", "real-time", or "100%" unless `FACTS.md` verifies it.

## Preview locally

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Edit a project

All projects live in the `PROJECTS` array in `script.js`. Find the object by its `id` and change its fields. Each card renders from these fields:

| Field | Meaning |
|---|---|
| `id` | Unique, kebab-case. Used for the card anchor `#project-<id>`. |
| `role` | `"bi"`, `"mle"`, or `"ds"`. A project belongs to one role only. |
| `title` | Card title. |
| `problem` | Business problem, one line. |
| `myRole` | Exact role title used in the CV. |
| `scope` | List of what the owner did. For team projects, the owner's part only. |
| `subtitle` | Short line under the title. |
| `kpis` | Up to two `{ value, label }` headline numbers shown as large tiles. Each value needs a VERIFIED row in `FACTS.md`. |
| `flow` | The process as short steps, shown as a numbered flow (e.g. `["MySQL source", "ETL", "Star schema", "Dashboard"]`). |
| `decisions` | List of `{ decision, why }`: the choices made and the business reason for each. Mark team choices as "(team decision)". |
| `outcome` | `{ text, evidence, source }`: business value in plain language, an optional evidence line with the metric, and the source label. |
| `tags` | Tech stack. |
| `dataset` | `"Real data"`, `"Public dataset"`, or `"Simulated data"`. |
| `context` | Optional labels, e.g. `"Coding test"`, `"Academic"`, `"Team project"`, `"Competition"`. Use `[]` if none. |
| `repo` | Repository URL. |
| `schema` | Optional. Star schema diagram (used by the QC card). |
| `screenshots` | Optional. List of screenshot placeholders. |

## Add a project

1. Add its facts to `FACTS.md` with a source for each number.
2. Copy an existing object in `PROJECTS`, paste it into the array, and change every field.
3. Set `role` to the one group it belongs to. Cards appear under their role automatically.
4. Preview locally and check that no unintended `[TODO: ...]` remains.

Example:

```js
{
  id: "my-new-project",
  role: "ds",
  title: "Project title",
  problem: "The business problem in one line.",
  myRole: "Data Scientist",
  scope: ["What I did, first item.", "What I did, second item."],
  outcome: { text: "Metric and value.", source: "Notebook name or README" },
  tags: ["Python", "Pandas"],
  dataset: "Public dataset",
  context: ["Academic"],
  repo: "https://github.com/alkayyiss-ds/my-new-project",
},
```

## Edit roles (chapters)

The page reads as a story: intro → Chapter 1 (Data & BI) → Chapter 2 (ML Engineer) → Chapter 3 (Data Scientist) → toolbox → contact.

Each role in the `ROLES` array in `script.js` is one chapter:

| Field | Meaning |
|---|---|
| `label` | Short name on the About tabs. |
| `chapter`, `title` | Chapter number and chapter title, e.g. "Chapter 1" and "Making data usable". |
| `roleName` | Full role name shown above the chapter title. |
| `summary` | One line shown in the About tab panel. |
| `narrative` | Two or three sentences that open the chapter. |

If you rename a chapter, also update the "How this page reads" list in `index.html`.

## Edit skills

The skills are in the `SKILL_GROUPS` array in `script.js`, one group per role. Every skill must appear in at least one project's `tags` or in its repository. Remove any skill that cannot be shown this way.

The website does not link to a CV. It shows who the owner is, the projects, and the skills.

## Add QC screenshots

Save the images in `assets/` and replace the `screenshots` entries of the `qc-manufacturing` project. To show images instead of text placeholders, change the `screenshots` rendering in `renderCard()` to output `<img>` tags with `alt` text.
