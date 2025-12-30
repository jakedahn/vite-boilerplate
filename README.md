# Vite + React 19 + shadcn/ui Boilerplate

A modern boilerplate for building static sites and SPAs with Vite, React 19, TypeScript, and shadcn/ui. All the UI components you need, pre-configured and ready to go.

[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

## Features

### Core Stack
- **Vite 7** - Lightning-fast dev server and build tool
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Strict type checking
- **Tailwind CSS 4** - Utility-first CSS framework

### UI & Components
- **47 shadcn/ui components** pre-installed
- **Dark/light mode** theming with next-themes
- **Framer Motion** for animations
- **Lucide + React Icons** for comprehensive icon sets

### Data & Forms
- **TanStack Query** for server state management
- **react-hook-form** for form handling
- **zod** for schema validation

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## Adding Components

Add new shadcn/ui components:

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
```

## Project Structure

```
src/
├── main.tsx              # App entry point
├── App.tsx               # Root component
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── providers.tsx     # QueryClient + Theme providers
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── hooks/                # Custom React hooks
└── lib/
    └── utils.ts          # Utility functions (cn helper)
```

## Deployment

Build for production:

```bash
npm run build
```

The `dist/` folder can be deployed to any static hosting service (Vercel, Netlify, Cloudflare Pages, etc.).

## Learn More

- [Vite Documentation](https://vite.dev/guide/)
- [React Documentation](https://react.dev/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
