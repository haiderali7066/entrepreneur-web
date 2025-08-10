import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-transparent">
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-blue-900/20 dark:via-purple-900/20 dark:to-cyan-900/20 dark:backdrop-blur-3xl animate-gradient-shift" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-24">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight dark:text-white dark:bg-gradient-to-r dark:from-white dark:via-cyan-200 dark:to-blue-200 dark:bg-clip-text dark:text-transparent animate-gradient-shift transition-all duration-1000">
              Exclusive insights for ambitious founders
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-lg transition-colors duration-500">
              Access premium content, in-depth guides, and expert resources to grow your business.
            </p>
            <Button className="bg-[#06D6A0] text-white hover:bg-[#FF9F1C] dark:bg-gradient-to-r dark:from-[#00FF94] dark:to-[#06D6A0] dark:hover:from-[#FF9F1C] dark:hover:to-[#FF6B35] dark:shadow-lg dark:shadow-[#00FF94]/30 dark:border dark:border-[#00FF94]/30 hover-glow transition-all duration-300 animate-gradient-shift hover:scale-105">
              Get Started
            </Button>
          </div>
          <div className="relative aspect-square lg:aspect-auto animate-float">
            <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-blue-500/20 dark:rounded-full dark:blur-3xl animate-pulse-glow" />
            <Image
              src="https://picsum.photos/800/800?random=1"
              alt="Founders Insights illustration"
              width={800}
              height={800}
              className="object-contain relative z-10 dark:drop-shadow-2xl transition-all duration-500 hover:scale-105 rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
