# Debounce

Lightweight `useDebounce` hook and demo that delays updating a value until the user stops typing.

## Run locally

```bash
cd Debounce
npm install
npm run dev
```

## Hook API

```js
const debouncedValue = useDebounce(value, delayMs);
```

- `value`: any changing input (string/number/object)
- `delayMs`: number of milliseconds to wait after the last change
- returns the debounced value

Implementation (`src/useDebounce.js`): waits `delay` then sets the value; cleans up on re-renders.

## Notes

- Debouncing reduces API calls and expensive computations during rapid input changes.
