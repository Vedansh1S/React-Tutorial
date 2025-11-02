# Context API Tutorial

A simple React application demonstrating the Context API for state management.

## Overview

This app uses React Context to share a lightbulb's on/off state across multiple components without prop drilling.

## Features

- Uses `createContext` and `ContextProvider` to manage global state
- `BulbStatus` component displays the current bulb state
- `ToggleStatus` component allows toggling the bulb state
- Both components access the shared state via `useContext` hook

## Running the App

```bash
npm install
npm run dev
```
