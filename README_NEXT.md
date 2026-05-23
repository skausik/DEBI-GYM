# Debi Gym — Next.js Port

This folder contains a minimal Next.js port of the original static `index.html`.

Quick start:

1. Install dependencies

```bash
cd DEBI-GYM
npm install
```

2. Run development server

```bash
npm run dev
```

The site is available at `http://localhost:3000`.

Notes:
- The global styles were copied from the original `index.html` into `styles/globals.css`.
- The interactive scripts were ported into `pages/index.js` using a `useEffect` hook.
- To finalize this as a production-ready Next app you may want to:
  - Add proper image assets into `public/`
  - Move repeated content into components under `components/`
  - Add TypeScript, linting, and formatting if desired
