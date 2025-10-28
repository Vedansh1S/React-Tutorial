# React Posts Application

A tutorial project demonstrating React state management, component re-rendering, and dynamic content creation.

## Use Case

This application serves as a practical example of how React handles:

- **State Management**: Using `useState` hook to manage dynamic data
- **Component Re-rendering**: Demonstrating how React efficiently updates the UI when state changes
- **Dynamic Content Creation**: Adding new posts to a list without page refresh
- **Component Composition**: Breaking down UI into reusable components

## Features

- **Add Posts**: Click the "Add post" button to dynamically add new posts to the feed
- **Post Display**: Each post shows:
  - User profile image
  - User name and follower count
  - Post timestamp
  - Post description
- **Responsive Design**: Clean, modern UI with proper spacing and styling
- **Empty State**: Shows "No posts yet" when no posts are available

## Technical Implementation

### State Management

- Uses React's `useState` hook to manage the posts array
- Demonstrates immutable state updates using the spread operator

### Component Structure

- **App.jsx**: Main component handling state and post creation logic
- **Posts.jsx**: Reusable `PostComponent` for displaying individual posts

### Key React Concepts Demonstrated

1. **Re-rendering**: When `setPosts` is called, React automatically re-renders components that depend on the posts state
2. **Key Props**: Each post component uses `key={index}` for efficient list rendering
3. **Conditional Rendering**: Shows different content based on whether posts exist
4. **Event Handling**: Button click triggers state update

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the provided local URL

## Learning Objectives

This project helps developers understand:

- How React state updates trigger re-renders
- The importance of immutable state updates
- Component composition patterns
- Event handling in React
- Conditional rendering techniques

Perfect for React beginners who want to see state management and re-rendering in action!
