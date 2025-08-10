"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative h-9 w-9 rounded-full border border-gray-200 dark:border-gray-800 dark:bg-gray-900/50 dark:backdrop-blur-sm dark:hover:bg-gray-800/50 hover-glow transition-all duration-300 dark:hover:scale-110"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 dark:text-[#00FF94]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
