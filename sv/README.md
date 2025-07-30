# Svelte Todo App

A modern, responsive Todo application built with Svelte, Vite, and vanilla CSS.

## Features

- ✅ Add, edit, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Filter todos by status (All, Active, Completed)
- ✅ Clear all completed todos
- ✅ Persistent storage with localStorage
- ✅ Responsive design with vanilla CSS
- ✅ Smooth animations and transitions

## Tech Stack

- **Svelte** - Reactive UI framework
- **Vite** - Fast build tool and dev server
- **Vanilla CSS** - Custom CSS for styling
- **JavaScript** - Programming language

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd svelte-todo-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── lib/
│   ├── FilterTabs.svelte    # Filter buttons component
│   ├── TodoForm.svelte      # Add todo form component
│   ├── TodoItem.svelte      # Individual todo item component
│   └── TodoList.svelte      # Todo list container component
├── App.svelte               # Main application component
├── app.css                  # Global styles with Tailwind
└── main.js                  # Application entry point
```

## Component Architecture

- **App.svelte**: Main application logic and state management
- **TodoForm.svelte**: Handles new todo input and submission
- **FilterTabs.svelte**: Filter buttons with counts
- **TodoList.svelte**: Container for todo items with empty state
- **TodoItem.svelte**: Individual todo with edit/delete functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from "svelte/store";
export default writable(0);
```
