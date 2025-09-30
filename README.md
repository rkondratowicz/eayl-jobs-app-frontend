# eayl-jobs-app-frontend

A modern Node.js TypeScript Express server using ES modules and tsx for development.

## Features

- 🚀 TypeScript with strict configuration
- 📦 ES Modules (ESM) support
- ⚡ Fast development with `tsx`
- 🌐 Express.js web server
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

Run the Express server in development mode with hot reload:

```bash
npm run dev
```

The server will start on `http://localhost:3000` with the following endpoints:
- `GET /` - Returns "Hello World!" message

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

### Other Scripts

- `npm run serve` - Build and start the production server
- `npm run type-check` - Check TypeScript types without building
- `npm run clean` - Remove build directory

## Project Structure

```
├── src/
│   └── index.ts          # Main application entry point
├── dist/                 # Compiled JavaScript (after build)
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── biome.json           # Biome configuration for formatting & linting
├── .gitignore           # Git ignore patterns
└── README.md            # This file
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