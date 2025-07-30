<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Svelte Todo App

This is a Svelte application using Vite as the build tool and vanilla CSS for styling.

## Component Architecture

- Use Svelte's reactive statements (`$:`) for computed values
- Use `createEventDispatcher` for component communication
- Follow Svelte's naming conventions for component files (PascalCase)
- Use `bind:` directives for two-way data binding
- Prefer Svelte's built-in transitions and animations

## Styling Guidelines

- Use vanilla CSS with custom classes for styling
- Follow responsive design patterns with media queries
- Use semantic color schemes and consistent spacing
- Implement hover and focus states for interactive elements
- Keep CSS organized with clear class naming conventions

## State Management

- Use reactive statements for derived state
- Implement localStorage persistence for todos
- Use Svelte stores for complex shared state if needed

## Code Quality

- Use proper TypeScript types when beneficial
- Implement proper error handling
- Follow accessibility best practices
- Use semantic HTML elements
