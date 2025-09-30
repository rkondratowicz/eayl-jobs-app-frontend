# eayl-jobs-app-frontend

A modern Node.js TypeScript Express server using ES modules and tsx for development.

## Features

- 🚀 TypeScript with strict configuration
- 📦 ES Modules (ESM) support
- ⚡ Fast development with `tsx`
- 🌐 Express.js web server with Nunjucks templating
- 🎨 **Tailwind CSS v4** with CLI setup
- 🛠️ Modern Node.js setup (18+)
- ⚡ **Biome** for fast formatting, linting, and code quality
- 🔧 Pre-configured code style with automatic fixes
- 📝 Import organization and sorting

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the Express server in development mode with hot reload and Tailwind CSS watching:

```bash
npm run dev
```

This command will:
- Start the Express server with `tsx` watching for changes
- Run Tailwind CSS CLI in watch mode to rebuild styles automatically

The server will start on `http://localhost:3000` with the following endpoints:
- `GET /` - Returns the main page with Tailwind CSS styling

### Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

### Start

Run the compiled application:

```bash
npm start
```

### Code Quality & Formatting

Format your code with Biome:

```bash
# Format and fix all files
npm run format

# Check formatting without fixing
npm run format:check

# Lint and fix all files
npm run lint

# Check linting without fixing
npm run lint:check

# Full check (format + lint + organize imports) with fixes
npm run check

# CI-optimized check without fixes
npm run check:ci
```

### Tailwind CSS Scripts

```bash
# Build CSS for production (minified)
npm run css:build

# Watch for changes and rebuild CSS during development
npm run css:watch

# Build CSS once for development
npm run css:dev
```

### Other Scripts

- `npm run serve` - Build (including CSS) and start the production server
- `npm run type-check` - Check TypeScript types without building
- `npm run clean` - Remove build directory and generated CSS files

## Project Structure

```
├── src/
│   ├── index.ts          # Main application entry point
│   └── input.css         # Tailwind CSS input file with custom styles
├── views/
│   └── index.njk         # Nunjucks template files
├── public/
│   └── styles.css        # Generated Tailwind CSS (auto-generated)
├── dist/                 # Compiled JavaScript (after build)
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── biome.json           # Biome configuration for formatting & linting
├── .biomeignore         # Files to ignore from Biome checking
├── .gitignore           # Git ignore patterns
└── README.md            # This file
```

## Tailwind CSS v4 Setup

This project uses **Tailwind CSS v4** with the CLI approach for styling. The setup includes:

### Configuration

- **Input CSS**: `src/input.css` - Contains Tailwind imports and custom styles
- **Output CSS**: `public/styles.css` - Generated CSS file served to browsers
- **CLI Version**: Uses `@tailwindcss/cli` for processing
- **Watch Mode**: Automatically rebuilds CSS during development

### Tailwind CSS Structure

```css
/* src/input.css */
@import "tailwindcss";

@theme {
  /* Custom theme variables can be defined here */
  /* --color-primary: #3b82f6; */
}

@layer components {
  /* Custom components */
}

@layer utilities {
  /* Custom utilities */
}
```

### Key Features

- ✅ **CSS-first configuration** - No `tailwind.config.js` required
- ✅ **Automatic content detection** - Scans templates for used classes
- ✅ **Zero external dependencies** - No PostCSS or Autoprefixer needed
- ✅ **Fast builds** - Optimized CLI performance
- ✅ **Production optimization** - Automatic minification with `--minify`

### Usage in Templates

Tailwind classes can be used directly in Nunjucks templates:

```html
<div class="bg-blue-500 text-white p-4 rounded-lg">
  <h1 class="text-2xl font-bold">{{ title }}</h1>
</div>
```

## Code Style & Quality

This project uses [Biome](https://biomejs.dev/) for code formatting, linting, and organization. The configuration includes:

- **Formatting**: 2-space indentation, 100-character line width, double quotes
- **Linting**: Recommended rules enabled for JavaScript/TypeScript
- **Import Organization**: Automatic import sorting and organization
- **Git Integration**: Uses `.gitignore` for file exclusion

### Editor Setup

For the best development experience, install the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) to get:
- Real-time formatting and linting
- Auto-fix on save
- Import organization on save

### CI/CD Integration

Add `npm run check:ci` to your CI pipeline to ensure code quality standards are maintained.