# Tippsy - Dating & Bar Matching App

<div align="center">
  <img src="https://via.placeholder.com/200x200.png?text=Tippsy+Logo" alt="Tippsy Logo" width="200" height="200">
  <p><em>Find your perfect match and the perfect bar for your first date</em></p>
</div>

## 🍹 About Tippsy

Tippsy is an innovative dating app that not only helps users find compatible matches but also suggests the perfect bars and venues for their first date. By combining dating preferences with drink and venue preferences, Tippsy creates a seamless experience from match to meetup.

## 🚀 Features

- **Match with Compatible People**: Swipe and match with people who share your interests
- **Bar Recommendations**: Get personalized bar suggestions based on mutual preferences
- **Dark/Light Mode**: Enjoy a beautiful UI in both light and dark modes
- **Cross-platform**: Available on web and mobile (iOS/Android)
- **Authentication**: Email, Google, Apple, and Meta login options
- **Chat**: Real-time chat functionality between matches

## 🛠️ Tech Stack

This monorepo is built with:

- **[Turborepo](https://turbo.build/repo)**: For managing the monorepo structure
- **[Next.js](https://nextjs.org/)**: For the web application
- **[React Native](https://reactnative.dev/)**: For the mobile applications
- **[Expo](https://expo.dev/)**: To streamline mobile development
- **[TailwindCSS](https://tailwindcss.com/)**: For styling the web app
- **[TypeScript](https://www.typescriptlang.org/)**: For type safety across all platforms
- **[Firebase](https://firebase.google.com/)**: For authentication and database

## 📂 Project Structure

```
tippsy-monorepo/
├── apps/
│   ├── docs/         # Documentation site
│   ├── mobile/       # React Native mobile app
│   └── web/          # Next.js web app
├── packages/
│   ├── eslint-config/  # Shared ESLint configurations
│   ├── typescript-config/  # Shared TypeScript configurations
│   ├── ui/          # Shared UI components
│   └── utils/       # Shared utilities
└── turbo.json       # Turborepo configuration
```

## 🧰 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) (v8 or later)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Tippsy/tippsy-monorepo.git
   cd tippsy-monorepo
   ```

2. Install dependencies
   ```sh
   pnpm install
   ```

3. Start development server
   ```sh
   pnpm dev
   ```

This will start the development servers for all applications:
- Web app: http://localhost:3000
- Documentation: http://localhost:3001
- Mobile app: Follow Expo instructions in terminal

### Development

```bash
# Start both web and mobile apps in development mode
pnpm dev

# Start only the web app
pnpm --filter web dev

# Start only the mobile app
pnpm --filter mobile dev
```

## 📱 Running on Mobile

To run the mobile app:

```sh
cd apps/mobile
pnpm start
```

Then, scan the QR code with the Expo Go app on your device, or press 'i' for iOS simulator or 'a' for Android emulator.

## 🔄 Workflows

- `pnpm build`: Build all applications
- `pnpm dev`: Start development environment
- `pnpm lint`: Run linting across all projects
- `pnpm test`: Run tests across all projects

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- Koji - Developer 