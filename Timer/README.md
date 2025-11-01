# Timer

A React timer application demonstrating the use of `useRef` hook for managing intervals and preventing unnecessary re-renders.

## Features

- Start/Stop timer functionality
- Counter increments every second
- Prevents multiple interval creation
- Clean state management with `useRef`

## Concepts Demonstrated

- **useRef hook**: Used to store the interval ID without causing re-renders
- **useState**: Manages the counter state
- **setInterval/clearInterval**: JavaScript timer functions
- **Conditional rendering**: Prevents starting multiple timers

## Key Learning Points

This project demonstrates why `useRef` is preferred over `useState` for storing interval IDs:

- `useRef` updates don't trigger re-renders, making it more efficient
- Using `useState` for the timer would cause an extra unnecessary re-render
- The interval ID survives re-renders and remains accessible for cleanup

## Running the Project

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
