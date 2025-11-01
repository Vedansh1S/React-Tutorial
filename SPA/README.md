# Single Page Application (SPA)

A React single-page application demonstrating routing and navigation using React Router.

## Features

- Multi-page navigation without full page reloads
- Shared layout with navbar and footer
- Programmatic navigation
- Error page handling

## Pages

- **Home**: Welcome page
- **About**: About section
- **Login**: Login page
- **Navigate**: Demo of programmatic navigation
- **Error**: 404 page for undefined routes

## Concepts Demonstrated

- **React Router**: BrowserRouter, Routes, Route, Link, Outlet, useNavigate
- **Nested Routing**: Layouts with shared components
- **Layout Components**: Navbar, Footer
- **Outlet**: Renders child routes
- **useNavigate Hook**: Programmatic navigation
- **Error Handling**: Catch-all routes with wildcard

## Key Components

- `BrowserRouter`: Enables routing functionality
- `Routes/Route`: Define application routes
- `Link`: Navigation without reload
- `Outlet`: Renders child route components
- `useNavigate`: Hook for programmatic navigation

## Running the Project

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Dependencies

- React Router DOM v7.9.5
- React v19.1.1
- Vite v7.1.7