import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-800 dark:backdrop-blur-md transition-all duration-500">
      <div className="flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-[#06D6A0] dark:text-[#00FF94] font-medium transition-all duration-300 dark:animate-neon-pulse">
            Founders
          </span>
          <span className="font-medium dark:text-white transition-colors duration-300">Insights</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/blog"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-105"
          >
            Blog
          </Link>
          <Link
            href="/resources"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-105"
          >
            Resources
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-105"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button className="bg-[#06D6A0] text-white hover:bg-[#FF9F1C] dark:bg-gradient-to-r dark:from-[#00FF94] dark:to-[#06D6A0] dark:hover:from-[#FF9F1C] dark:hover:to-[#FF6B35] dark:shadow-lg dark:shadow-[#00FF94]/20 hover-glow transition-all duration-300 animate-gradient-shift">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
