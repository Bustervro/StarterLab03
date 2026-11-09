# Lab 03 — Counter App Testing

This repository contains the original Counter React app, five Jest/React Testing Library tests, and the exploratory and white-box testing report template in `TEST_REPORT.md`.

## Run in GitHub Codespaces (no VS Code installation)

Open Codespaces Terminal in this repository and run:

```bash
npm install
npm run dev
```

Open the forwarded port to try the buttons. Record **actual** results for five actions in `TEST_REPORT.md`. Then stop the dev server with Ctrl+C and run:

```bash
npm test
npm test -- --coverage
```

Take screenshots of the passing tests and the App.tsx coverage table. Add images under `screenshots/` and enter the coverage values in `TEST_REPORT.md`. Commit the project to a **public** GitHub repo and submit its link in Canvas. Do not claim tests ran unless you ran them.

The original assignment prompt is in `ASSIGNMENT_README.md`.
