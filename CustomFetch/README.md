# CustomFetch

Reusable `useFetch` hook with a simple UI to fetch JSON from any URL. It includes focused input on mount and an Enter-to-fetch shortcut.

## Run locally

```bash
cd CustomFetch
npm install
npm run dev
```

## Hook API

From `src/useFetch.js` the hook returns:

- `data`: parsed JSON response object
- `Loading`: boolean while a request is in-flight
- `inputURL`, `setInputURL`: controlled input state for the URL field
- `inputRef`: ref that auto-focuses the input on mount
- `handleKeyPress(event)`: triggers fetch on Enter
- `getData(url: string)`: performs the fetch and updates state

## Notes

- The hook focuses the input on mount and after each successful fetch.
- There is commented code in the hook showing how to periodically re-fetch.
