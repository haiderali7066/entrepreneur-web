"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const trending = [
  {
    id: 1,
    title: "Social Media Trends ",
    image: "https://picsum.photos/600/350?random=30",
    category: "Digital Marketing",
  },
  {
    id: 2,
    title: "Creating a Perfect Writing Setup",
    image: "https://picsum.photos/600/350?random=31",
    category: "Productivity",
  },
  {
    id: 3,
    title: "The Art of Storytelling Through Food",
    image: "https://picsum.photos/600/350?random=32",
    category: "Content Creation",
  },
  {
    id: 4,
    title: "Building Your Digital Presence",
    image: "https://picsum.photos/600/350?random=33",
    category: "Personal Branding",
  },
  {
    id: 5,
    title: "Mindful Writing Practices",
    image: "https://picsum.photos/600/350?random=34",
    category: "Wellness",
  },
];

export function TrendingSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollTo({
        left:
          scrollContainerRef.current.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 relative bg-gray-50 dark:bg-transparent overflow-hidden">
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-gray-900/30 dark:via-purple-900/20 dark:to-blue-900/30 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-white bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
            🔥 Trending Now
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="h-10 w-10 rounded-full border-gray-300 dark:border-gray-700 dark:bg-gray-900/50 hover:scale-110 transition-transform"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full border-gray-300 dark:border-gray-700 dark:bg-gray-900/50 hover:scale-110 transition-transform"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trending.map((item) => (
            <article
              key={item.id}
              className="flex-none w-[300px] md:w-[380px] group cursor-pointer"
            >
              <div className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Content */}
                <div className="p-5">
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-yellow-400/30 to-orange-400/30 text-yellow-500 font-medium px-3 py-1 rounded-full mb-3 border border-yellow-400/30"
                  >
                    {item.category}
                  </Badge>
                  <h3 className="text-lg font-semibold leading-snug group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
