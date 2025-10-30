List & Keys (React)

A tiny Vite + React example showing how to render lists in React and why stable `key` props matter for performance and correct UI updates.

Getting started

- Install dependencies: `npm install`
- Start the dev server: `npm run dev`

What it demonstrates

- Rendering arrays with `Array.map`
- Using unique, stable `key` values for list items
- Avoiding anti-patterns like using the array index as a key when items can reorder

Project structure

- `src/App.jsx`: Minimal demo rendering a list with proper keys
- `src/main.jsx`: App bootstrap

Notes on keys

- Keys help React identify which items changed, were added, or removed
- Prefer persistent IDs from data over indices
