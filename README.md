# Tippsy - Dating & Bar Matching App

<div align="center">
  <img src="https://github.com/user-attachments/assets/a1e7e0cd-fd70-4d7d-8ce8-45ba85b7b17f" alt="Tippsy Logo">
  <p><em>Find your perfect match and the perfect bar for your first date</em></p>
</div>

## About Tippsy

Tippsy is an innovative dating app that not only helps users find compatible matches but also suggests the perfect bars and venues for their first date. By combining dating preferences with drink and venue preferences, Tippsy creates a seamless experience from match to meetup.

The app features a stylish logo designed with the [Mrs Sheppards](https://fonts.google.com/specimen/Mrs+Sheppards) font from Google Fonts, with a beautiful gradient that adapts to both light and dark themes.

## Features

- **Match with Compatible People**: Swipe and match with people who share your interests
- **Bar Recommendations**: Get personalized bar suggestions based on mutual preferences
- **Dark/Light Mode**: Enjoy a beautiful UI in both light and dark modes with theme-responsive elements
- **Authentication**: Secure login options for users
- **Chat**: Real-time chat functionality between matches

## Tech Stack

- **[Next.js](https://nextjs.org/)**: For the web application
- **[TailwindCSS](https://tailwindcss.com/)**: For styling
- **[TypeScript](https://www.typescriptlang.org/)**: For type safety
- **[Bun](https://bun.sh)**: For fast development and builds

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
