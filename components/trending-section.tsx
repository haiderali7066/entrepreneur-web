"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const trending = [
  {
    id: 1,
    title: "Social Media Trends for Content Creators",
    image: "https://picsum.photos/400/225?random=30",
    category: "Digital Marketing",
  },
  {
    id: 2,
    title: "Creating a Perfect Writing Setup",
    image: "https://picsum.photos/400/225?random=31",
    category: "Productivity",
  },
  {
    id: 3,
    title: "The Art of Storytelling Through Food",
    image: "https://picsum.photos/400/225?random=32",
    category: "Content Creation",
  },
  {
    id: 4,
    title: "Building Your Digital Presence",
    image: "https://picsum.photos/400/225?random=33",
    category: "Personal Branding",
  },
  {
    id: 5,
    title: "Mindful Writing Practices",
    image: "https://picsum.photos/400/225?random=34",
    category: "Wellness",
  },
]

export function TrendingSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-transparent">
      <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-gray-900/10 dark:to-purple-900/10" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold dark:text-white">Trending now</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="h-8 w-8 rounded-full dark:border-gray-700 dark:bg-gray-900/50 dark:hover:bg-gray-800/50"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="h-8 w-8 rounded-full dark:border-gray-700 dark:bg-gray-900/50 dark:hover:bg-gray-800/50"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trending.map((item) => (
            <article key={item.id} className="flex-none w-[300px] md:w-[400px] group cursor-pointer">
              <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm dark:border dark:border-gray-700/50 rounded-lg overflow-hidden hover-glow transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <Badge
                    variant="secondary"
                    className="bg-[#FFD700]/10 text-[#FFD700] hover:bg-[#FFD700]/20 dark:bg-gradient-to-r dark:from-[#FFD700]/20 dark:to-[#FFA500]/20 dark:text-[#FFD700] dark:border dark:border-[#FFD700]/30 mb-3"
                  >
                    {item.category}
                  </Badge>
                  <h3 className="font-semibold group-hover:text-[#06D6A0] dark:text-white dark:group-hover:text-[#00FF94] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
