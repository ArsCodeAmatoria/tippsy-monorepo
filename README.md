# Tippsy Web App

A web application built with Next.js 14 and TailwindCSS.

## Getting Started

This project uses [Bun](https://bun.sh) for faster development and build processes.

### Prerequisites

1. Install Bun if you haven't already:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Development

1. Install dependencies:

```bash
bun install
```

2. Start the development server:

```bash
bun run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### Build

To build the project for production:

```bash
bun run build
```

### Start Production Server

To start the production server:

```bash
bun run start
```

## Features

- Next.js 14 with App Router support
- TailwindCSS for styling
- Dark mode support with next-themes
- Google Fonts integration
- TypeScript support

## Project Structure

- `/app` - Next.js App Router pages
- `/components` - React components
- `/styles` - Global styles and CSS
- `/public` - Static assets
- `/pages` - Next.js Pages Router (legacy)

## Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `bunfig.toml` - Bun configuration
