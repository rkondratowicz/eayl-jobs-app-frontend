# eayl- 🚀 TypeScript with strict configuration
- 📦 ES Modules (ESM) support
- ⚡ Fast development with `tsx`
- 🌐 Express.js web server
- 🛠️ Modern Node.js setup (18+)s-app-frontend

A modern Node.js TypeScript Express server using ES modules and tsx for development.

## Features

- 🚀 TypeScript with strict configuration
- 📦 ES Modules (ESM) support
- ⚡ Fast development with `tsx`
- ️ Modern Node.js setup (18+)

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
├── .gitignore           # Git ignore patterns
└── README.md            # This file
```