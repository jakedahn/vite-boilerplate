import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const technologies = [
  { name: "Vite 7", category: "Build" },
  { name: "React 19", category: "Framework" },
  { name: "TypeScript 5", category: "Language" },
  { name: "Tailwind CSS 4", category: "Styling" },
  { name: "shadcn/ui", category: "Components" },
  { name: "TanStack Query", category: "Data Fetching" },
  { name: "react-hook-form", category: "Forms" },
  { name: "Framer Motion", category: "Animation" },
  { name: "react-router-dom", category: "Routing" },
]

export function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="text-muted-foreground text-lg">
          Learn more about the technologies powering this boilerplate.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tech Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech.name} variant="secondary">
                {tech.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Dark mode support with next-themes</li>
              <li>Path aliases (@/*) configured</li>
              <li>ESLint + TypeScript strict mode</li>
              <li>47 pre-installed shadcn components</li>
              <li>Client-side routing with react-router</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Run <code className="bg-muted px-1 rounded">npm run dev</code> to start</li>
              <li>Add pages to <code className="bg-muted px-1 rounded">src/pages/</code></li>
              <li>Update routes in <code className="bg-muted px-1 rounded">src/router.tsx</code></li>
              <li>Add shadcn components as needed</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
