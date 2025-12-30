# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vite + React 19 + TypeScript + shadcn/ui boilerplate for static sites and SPAs.

## Commands

```bash
npm run dev        # Start development server (http://localhost:5173)
npm run build      # Build for production
npm run lint       # Run ESLint
npm run type-check # Run TypeScript compiler (no emit)
npm run preview    # Preview production build locally
```

**Adding shadcn components**: `npx shadcn@latest add <component-name>`

## Architecture

**Stack**: Vite 7, React 19, TypeScript 5, Tailwind CSS 4, TanStack Query, react-hook-form, zod

**Path alias**: `@/*` → `./src/*` (always use this for imports)

### Key Directories
- `src/main.tsx` - App entry point with Providers
- `src/App.tsx` - Root component
- `src/components/ui/` - shadcn/ui components (47 pre-installed)
- `src/components/providers.tsx` - App providers (QueryClient, Theme)
- `src/components/theme-provider.tsx` - Theme context wrapper
- `src/components/theme-toggle.tsx` - Dark mode toggle UI
- `src/hooks/` - Custom React hooks
- `src/lib/utils.ts` - Utility functions (cn helper)

## Component Patterns

- All components are client-side (no server components in Vite)
- Always use shadcn/ui components from `@/components/ui/`
- Use `cn()` utility for conditional Tailwind classes

## TanStack Query (Data Fetching)

Configured in `src/components/providers.tsx` (wraps app with QueryClientProvider + ThemeProvider).

```tsx
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

// Fetch with caching
const { data, isPending } = useQuery({
  queryKey: ["posts"],
  queryFn: async () => {
    const response = await fetch("/api/posts")
    return response.json()
  },
})

// Mutate with cache invalidation
const queryClient = useQueryClient()
const mutation = useMutation({
  mutationFn: async (newPost: Post) => {
    return fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
    })
  },
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
})
```

## Form Handling

Use react-hook-form with zod for validation:

```tsx
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type FormData = z.infer<typeof schema>

const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

const onSubmit = (data: FormData) => {
  const result = schema.safeParse(data)
  if (!result.success) {
    // Handle validation errors
  }
}
```

To enable zodResolver integration: `npm install @hookform/resolvers`

## Animation

**Framer Motion** - for complex animations:
```tsx
import { motion, AnimatePresence } from "framer-motion"

// Basic animation
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />

// Wrap shadcn components
const MotionCard = motion.create(Card)
<MotionCard whileHover={{ scale: 1.02 }} />

// Enter/exit animations require AnimatePresence wrapper
<AnimatePresence>
  {isVisible && <motion.div exit={{ opacity: 0 }}>...</motion.div>}
</AnimatePresence>
```

**CSS animations**: Use **tw-animate-css** for Tailwind v4 animation utilities.

## Icons

Two icon libraries available:

```tsx
// Lucide (default for shadcn)
import { Search, Menu, X } from "lucide-react"

// React Icons (larger icon set)
import { FaGithub, FaTwitter } from "react-icons/fa"
import { HiOutlineHome } from "react-icons/hi"
```

## Theming

Dark mode configured via `next-themes`:

```tsx
import { useTheme } from "next-themes"

const { theme, setTheme } = useTheme()
// theme: "light" | "dark" | "system"
```

Use `<ThemeToggle />` component for a dropdown theme switcher.

## Code Style

- Use `const` arrow functions: `const handleClick = () => {}`
- Prefix event handlers with `handle`: `handleSubmit`, `handleKeyDown`
- Use early returns for readability
- Use `cn()` utility for conditional Tailwind classes
