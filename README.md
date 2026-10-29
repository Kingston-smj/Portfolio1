# Portfolio Website

Single-page personal portfolio website for **Adesola Oluwaseyifunmi Gabriel** — Software
Engineer (backend, Linux systems, and software testing focus).

Built from scratch with plain HTML and CSS (vanilla JS only if a feature actually
needs it). No frameworks, no build step, no gradients — deliberately simple, in
line with the style used throughout my other projects.

## Online

GitHub profile: <https://github.com/Kingston-smj/>

## Project phases

The site is intentionally built in stages; each phase ends in a push to `main`.

1. **Phase 1 — Vanilla skeleton:** semantic single-page layout and plain
   CSS, with content from my CVs and repositories.
2. **Phase 2 — Design pass:** apply my usual simple, clean visual style (still no
   libraries, no neon gradients).
3. **Phase 3 — Animated SVG previews:** hand-written `.svg` animations of each
   featured application's interface (CSS keyframes inside the SVG, looping
   automatically) to show what each project actually looks like.
4. **Phase 4 — Hosting:** deploy per the hosting tutorial used, or Vercel if the
   chosen host has no instructions.

## Repo structure

```
Portfolio1/
├── index.html        # Single-page site: About, Projects, Experience, Contact
├── style.css         # Plain CSS, one file
├── .gitignore
└── README.md
```

## Featured projects

- **Taskdock** — single-host build/test job runner in Go with SQLite queueing,
  retries, crash recovery, and bounded logs.
- **TimeTableGen** — PyQt6 automatic school timetable generator using a multi-pass
  constraint-satisfaction heuristic (~27 classes, sub-second generation).
- **Summarize** — Chrome side panel + CLI for URL, file, and media summarisation,
  with YouTube slide extraction and streaming output.
- **Vortex** — Telegram bot for crypto project launch management (wallet generation
  and metadata flows, SQLite-backed).
- **Crypto Marketplace** — Flask + SQLAlchemy peer-to-peer marketplace with crypto
  payment flows (private repo).

## Running it locally

No build step required:

```sh
git clone https://github.com/Kingston-smj/Portfolio1.git
cd Portfolio1
# open index.html in a browser, or:
python3 -m http.server 8000
```
