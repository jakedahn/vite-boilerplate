import { Link, Outlet, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
]

export function RootLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                asChild
                className={cn(
                  location.pathname === item.path && "bg-accent"
                )}
              >
                <Link to={item.path}>{item.label}</Link>
              </Button>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 h-14 flex items-center justify-center text-sm text-muted-foreground">
          Built with Vite + React + shadcn/ui
        </div>
      </footer>
    </div>
  )
}
