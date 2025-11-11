# Tailwind Responsiveness (React + Vite)

A small React app demonstrating responsive layouts with Tailwind CSS v4 on Vite.

## Stack

- React 19
- Vite 7
- Tailwind CSS v4 with `@tailwindcss/vite` plugin

## Getting started

1. Install dependencies:
   - `npm install`
2. Run the dev server:
   - `npm run dev`

## Tailwind setup (v4)

This project uses Tailwind v4 with the official Vite plugin.

- Config: No `tailwind.config.js` is required by default.
- CSS entry: `src/index.css` contains `@import "tailwindcss";`
- Vite plugin: `vite.config.js` loads `@tailwindcss/vite`

If you need customization (theme/plugins/dark mode class), you may add a `tailwind.config.js` file, but it’s optional for this setup.


## Project structure (key files)

- `src/App.jsx`: Page layout with responsive examples
- `src/components/Navbar.jsx`: Top navigation with spacing handled via parent padding
- `src/components/Sidebar.jsx`, `src/components/Dashboard.jsx`, `src/components/ProfileCard.jsx`: UI components
- `src/index.css`: Tailwind import
- `vite.config.js`: React + Tailwind Vite plugins
