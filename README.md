# Portfolio Website

Single-page personal portfolio website for **Oluwaseyifunmi Adesola Gabriel** — Software
Engineer (backend, Linux systems, and software testing focus).

Built from scratch with plain HTML and CSS (vanilla JS only if a feature actually
needs it). No frameworks, no build step, no gradients — deliberately simple, in
line with the style used throughout my other projects.

## Online

GitHub profile: <https://github.com/Kingston-smj/>

## Project phases

The site is intentionally built in stages; each phase ends in a push to `main`.

1. **Phase 1 — Vanilla skeleton:** semantic single-page layout with content from
   my CVs and repositories.
2. **Phase 2 — Design pass:** simple, clean visual style in the flat palette used
   across my projects (indigo, teal, terracotta, blue on white). Still plain CSS,
   no libraries, no gradients.
3. **Phase 3 — Animated SVG previews:** hand-written `.svg` animations re-creating
   each application's real interface — layout, colors, and text taken from each
   project's own code (ClipIt's popup, TimeTableGen's timetable grid, Taskdock's
   CLI, See-My-Speech's transcription tab, Planet Hopper's game). They loop
   automatically and open in a dialog on click; hover shows the project
   description.
4. **Phase 4 — Hosting:** deploy per the hosting tutorial used, or Vercel if the
   chosen host has no instructions.

## Repo structure

```
Portfolio1/
├── index.html        # Single-page site: About, Projects, Experience, Contact
├── style.css         # Plain CSS, one file
├── script.js         # Small vanilla script: opens project previews in a dialog
├── assets/
│   ├── photos/       # Photo placeholders, swapped for real photos when available
│   └── projects/     # Hand-written looping UI previews (SVG) for each project card
├── .gitignore
└── README.md
```

## Featured projects

- **ClipIt** — Linux clipboard manager in Qt/C++ with a Win+V-style history popup
  for Wayland, pinned entries, pickers, and Ubuntu packaging for testers.
- **TimeTableGen** — PyQt6 automatic school timetable generator using a multi-pass
  constraint-satisfaction heuristic (~27 classes, sub-second generation).
- **Taskdock** — single-host build/test job runner in Go with SQLite queueing,
  retries, crash recovery, and bounded logs.
- **See-My-Speech** — desktop audio transcription with Whisper behind a PyQt
  interface for Linux and Windows, using worker threads to keep the UI responsive.
- **Farcade** — Farcaster mini-game built with Phaser, plus an original CSS/DOM
  version of the same game.

## Running it locally

No build step required:

```sh
git clone https://github.com/Kingston-smj/Portfolio1.git
cd Portfolio1
# open index.html in a browser, or:
python3 -m http.server 8000
```
